/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class SMS extends client.AbstractClient {
    prefix = 'sms';
}

export function $get(prefix:string, id:string, context:context.Context):SMS {
    return new SMS(prefix, id, context);
}
