/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class ForwardingNumber extends client.AbstractClient {
    prefix = 'forwarding-number';
}

export function $get(prefix:string, id:string, context:context.Context):ForwardingNumber {
    return new ForwardingNumber(prefix, id, context);
}
