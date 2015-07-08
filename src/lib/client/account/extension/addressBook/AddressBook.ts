/// <reference path="../../../../../typings/externals.d.ts" />

import context = require('../../../../core/Context');
import client = require('../../../AbstractClient');

export class Contact extends client.AbstractClient {
    prefix = 'contact';
}

export function $get(prefix:string, id:string, context:context.Context):Contact {
    return new Contact(prefix, id, context);
}
