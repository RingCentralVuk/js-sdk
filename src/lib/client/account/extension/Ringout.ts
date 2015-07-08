/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class Ringout extends client.AbstractClient {
    prefix = 'ringout';
}

export function $get(prefix:string, id:string, context:context.Context):Ringout {
    return new Ringout(prefix, id, context);
}
