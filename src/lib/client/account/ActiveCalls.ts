/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class ActiveCalls extends client.AbstractClient {

    prefix = 'active-calls';

}

export function $get(prefix:string, id:string, context:context.Context):ActiveCalls {
    return new ActiveCalls(prefix, id, context);
}
