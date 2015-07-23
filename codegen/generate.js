var fs = require('fs');
var swagger = require('./swagger-ring.json');
var modelGenerator = require('./templates/model');
var clientGenerator = require('./templates/client');
var clientPath = __dirname + '/../src/lib/client';

//console.log(swagger.definitions);

function ref2model(ref) {
    return ref.split('/').pop();
}

function ref2modelNS(ref) {
    var model = ref2model(ref);
    return model.toLowerCase() + '.' + model;
}

function renameTypes(prop) {

    if (prop.type == 'DateTime') {
        prop.type = 'Date';
    }

    if (prop.type == 'integer') {
        prop.type = 'number';
    }

    //if (prop.type == 'boolean') {
    //    prop.type = 'bool';
    //}

    if (prop.type == 'null') {
        prop.type = 'any';
    }

    return prop;

}

var models = Object.keys(swagger.definitions)
    .map(function(key) {
        swagger.definitions[key].name = key;
        return swagger.definitions[key];
    })
    .map(function(def) {

        var properties = Object.keys(def.properties).map(function(key) {
            def.properties[key].$name = key;
            return def.properties[key];
        });

        var model = {};

        model.name = def.name;

        model.imports = [];

        model.properties = properties
            .map(function(prop) {

                prop.isRequired = def.required.indexOf(prop.$name) != -1;

                if (prop.$ref) {

                    prop.type = ref2modelNS(prop.$ref);
                    if (model.imports.indexOf(prop.type) == -1) model.imports.push(prop.type);

                } else if (prop.type.indexOf('#/') != -1) {

                    prop.type = ref2modelNS(prop.type);
                    if (model.imports.indexOf(prop.type) == -1) model.imports.push(prop.type);

                }

                if (prop.type == 'array') {

                    if (!prop.items.$ref && !prop.items.type) {

                        prop.description = (prop.description || '') + ' ' + prop.items.type;
                        prop.type = 'string[]';

                    } else if (prop.items.type) {

                        prop.type = prop.items.type + '[]';

                    } else if (prop.items.$ref) {

                        prop.type = (ref2modelNS(prop.items.$ref));
                        if (model.imports.indexOf(prop.type) == -1) model.imports.push(prop.type);
                        prop.type += '[]';

                    }

                }

                return renameTypes(prop);

            });

        return model;

    })
    .forEach(function(model) {

        fs.writeFileSync(clientPath + '/models/' + model.name + '.ts', modelGenerator(model));

    });

var clients = Object.keys(swagger.paths).reduce(function(res, path) {

    var operations = swagger.paths[path];

    Object.keys(operations).forEach(function(method) {

        var operation = operations[method];

        operation.path = '/restapi' + path;

        operation.method = method;

        operation.responseSchema = ref2modelNS(operation.responses['200'].schema.$ref);

        operation.imports = operation.responseSchema != '.' ? [operation.responseSchema] : [];

        operation.parameters.map(function(param) {

            if (param.schema) {

                param.type = ref2modelNS(param.schema.$ref); // override type with schema
                if (operation.imports.indexOf(param.type) == -1) operation.imports.push(param.type);
                delete param.schema;

            }

            if (param.type == 'array') {
                param.type = 'string';
            }

            return renameTypes(param);

        });

        operation.tags.forEach(function(tag) {

            if (!res[tag]) res[tag] = [];

            res[tag].push(operation); //operation.operationId

        });

    });

    return res;

}, {});

Object.keys(clients).forEach(function(tag) {

    var operations = clients[tag];

    tag = tag.replace(/[^a-z]/igm, '');

    fs.writeFileSync(clientPath + '/clients/' + tag + '.ts', clientGenerator(tag, operations));

});