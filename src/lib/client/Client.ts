/// <reference path="../../typings/externals.d.ts" />

import model = require('./Model');
import context = require('../core/Context');
import platform = require('../core/Platform');
import request = require('../core/http/Request');

export class Client {

    protected context:context.Context;
    protected platform:platform.Platform;

    constructor(context:context.Context) {

        this.context = context;
        this.platform = platform.$get(context);

    }

    protected parseOptions(apiOptions:any, //request.IAjaxOptions,
                           options:any,
                           operationParameters:IOperationParameter[]) { //:request.IAjaxOptions

        options = options || {};
        apiOptions = apiOptions || {};

        operationParameters.forEach((param)=> {

            if (param.required && !param.default && !options.hasOwnProperty(param.name)) {

                throw new Error('Required parameter "' + param.name + '" not found');

            }

            if (param.default && !options.hasOwnProperty(param.name)) {

                options[param.name] = param.default;

            }

            if (param.in == 'path') {

                apiOptions.url = apiOptions.url.replace('{' + param.name + '}', options[param.name]);

            }

            if (param.in == 'query' && options.hasOwnProperty(param.name)) {

                apiOptions.query = apiOptions.query || {};
                apiOptions.query[param.name] = options[param.name];

            }

            if (param.in == 'body') {

                apiOptions.body = options[param.name];

            }

        });

        return apiOptions;

    }

    protected apiCall(apiOptions:any, Class:typeof model.Model):Promise<model.Model> {

        return this.platform.apiCall(apiOptions).then((res)=> {

            //TODO Support multipart
            //TODO Think how to pass headers&stuff to outside
            if (Class && !res.isMultipart()) return new Class(this.context, res.json);

            return res;

        });

    }

}

export interface IOperationParameter {
    'name'?:string;
    'type'?:string;
    'items'?:{type?:string};
    'collectionFormat'?:string;
    'allowEmptyValue'?:boolean;
    'enum'?:string[];
    'in'?:string;
    'description'?:string;
    'required'?:boolean;
    'default'?:any;
}

export function $get(context:context.Context):Client {
    return context.createSingleton('Client', ()=> {
        return new Client(context);
    });
}
