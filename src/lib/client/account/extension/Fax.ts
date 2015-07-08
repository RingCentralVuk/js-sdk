/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class Fax extends client.AbstractClient {
    prefix = 'fax';
}

export function $get(prefix:string, id:string, context:context.Context):Fax {
    return new Fax(prefix, id, context);
}
