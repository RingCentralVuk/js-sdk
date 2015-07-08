/// <reference path="../../typings/externals.d.ts" />

import context = require('../core/Context');
import utils = require('../core/Utils');
import request = require('../core/http/Request');
import response = require('../core/http/Response');
import platform = require('../core/Platform');

export class AbstractClient {

    protected context:context.Context;
    protected platform:platform.Platform;
    protected utils:utils.Utils;

    protected base:string = '';
    protected prefix:string = '';
    protected id:string|string[] = '';

    constructor(base:string, id:string|string[], context:context.Context) {

        this.context = context;
        this.platform = platform.$get(context);
        this.utils = utils.$get(context);

        this.base = base;
        this.id = id;

    }

    getResourceUrl(id?:string|string[]) { //FIXME Is smart mode needed?

        var currentId = id || this.id,
            currentIdArray = this.utils.isArray(currentId) ? <string[]>currentId : [currentId];

        return this.base +
               (this.prefix ? '/' + this.prefix : '') +
               ((currentIdArray.length > 0 && !!currentIdArray[0]) ? '/' + currentIdArray.join(',') : '');

    }

    extendOptionsWithQuery(options?:request.IAjaxOptions, query?:any) {

        options = options || {};
        options.query = options.query || {};

        if (query) options = this.utils.extend(true, {}, options, {query: query});

        return options;

    }

    get(query?:any, options?:request.IAjaxOptions):Promise<response.Response> {

        options = this.extendOptionsWithQuery(options, query);

        return this.platform.get(this.getResourceUrl(), options);

    }

    post(object:any, query?:any, options?:request.IAjaxOptions):Promise<response.Response> {

        options = this.extendOptionsWithQuery(options, query);
        options.body = object;

        return this.platform.post(this.getResourceUrl(object.id), options);

    }

    put(object:any, query?:any, options?:request.IAjaxOptions):Promise<response.Response> {

        options = this.extendOptionsWithQuery(options, query);
        options.body = object;

        return this.platform.put(this.getResourceUrl(object.id), options);

    }

    'delete'(object?:any, query?:any, options?:request.IAjaxOptions):Promise<response.Response> {

        options = this.extendOptionsWithQuery(options, query);

        return this.platform.delete(this.getResourceUrl(object && object.id), options);

    }

}

export function $get(context:context.Context):AbstractClient {
    return new AbstractClient('', '', context);
}
