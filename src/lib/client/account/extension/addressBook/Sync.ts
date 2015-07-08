/// <reference path="../../../../../typings/externals.d.ts" />

import context = require('../../../../core/Context');
import client = require('../../../AbstractClient');

export class Sync extends client.AbstractClient {
    prefix = 'sync';
}

export function $get(prefix:string, id:string, context:context.Context):Sync {
    return new Sync(prefix, id, context);
}
