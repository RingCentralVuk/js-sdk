/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class BlockedNumber extends client.AbstractClient {
    prefix = 'blocked-number';
}

export function $get(prefix:string, id:string, context:context.Context):BlockedNumber {
    return new BlockedNumber(prefix, id, context);
}
