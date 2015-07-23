module.exports = function(tag, operations) {

    var res = [],
        imports = [],
        enums = [];

    res.push('/// <reference path="../../../typings/externals.d.ts" />');
    res.push('');
    res.push('import context = require(\'../../core/Context\');');
    res.push('import client = require(\'../Client\');');

    operations.forEach(function(operation) {

        operation.imports.forEach(function(imp) {
            if (imports.indexOf(imp) == -1) imports.push(imp);
        });

    });

    imports.forEach(function(imp) {

        imp = imp.split('.');
        res.push('import ' + imp[0] + ' = require(\'../models/' + imp[1] + '\');');

    });

    res.push('');
    res.push('export class ' + tag + ' extends client.Client {');

    operations.forEach(function(operation) {

        var interfaceName = 'I' + operation.operationId.substr(0, 1).toUpperCase() + operation.operationId.substr(1),
            type = (operation.responseSchema == '.' ? 'null' : operation.responseSchema);

        res.push('');
        res.push('    public ' + operation.operationId + '(options?:{');
        operation.parameters.forEach(function(param) {

            if (param.enum) {

                param.type = interfaceName + param.name.substr(0, 1).toUpperCase() + param.name.substr(1);

                enums.push({
                    name: param.type,
                    values: param.enum
                });

            }

            res.push('        \'' + param.name + '\'' + (param.required ? '' : '?') + ':' + param.type + '; // ' + param.description + (param.collectionFormat ? ', collection: ' + param.collectionFormat : ''));

        });

        res.push('    }):Promise<' + (type == 'null' ? 'any' : type) + '> {');
        res.push('');
        res.push('        var apiOptions = {');
        res.push('                \'url\': \'' + operation.path + '\',');
        res.push('                \'method\': \'' + operation.method + '\'');
        res.push('            },');
        res.push('            ResponseClass = ' + type + ';');
        res.push('');
        res.push('        apiOptions = this.parseOptions(apiOptions, options, ' + JSON.stringify(operation.parameters, null, 4).split('\n').join('\n        ') + ');');
        res.push('');
        res.push('        return this.apiCall(apiOptions, ResponseClass);');
        res.push('');
        res.push('    }');

    });

    res.push('');
    res.push('}');

    enums.forEach(function(en) {

        res.push('');
        res.push('export enum ' + en.name + ' {');
        res.push('    ' + en.values.map(function(v) {

                var k = v.split(' ').join('');

                if (!k.match(/^[a-z]+$/i)) k = '\'' + k + '\'';

                return k + ' = <any>\'' + v + '\'';

            }).join(',\n    '));
        res.push('}');

    });


    res.push('');
    res.push('export function $get(context:context.Context):' + tag + ' {');
    res.push('    return context.createSingleton(\'' + tag + '\', ()=> {');
    res.push('        return new ' + tag + '(context);');
    res.push('    });');
    res.push('}');

    res.push('');
    res.push('/**');
    res.push(' * Swagger definition JSON used for CodeGen:');
    res.push(' *');
    res.push(' * ' + JSON.stringify(operations, null, 4).split('\n').join('\n * '));
    res.push(' */');

    return res.join('\n');

};