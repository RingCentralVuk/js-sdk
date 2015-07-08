/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class Presence extends client.AbstractClient {
    prefix = 'presence';
}

export function $get(prefix:string, id:string, context:context.Context):Presence {
    return new Presence(prefix, id, context);
}
