/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class Conferencing extends client.AbstractClient {
    prefix = 'conferencing';
}

export function $get(prefix:string, id:string, context:context.Context):Conferencing {
    return new Conferencing(prefix, id, context);
}
