/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class AddressBook extends client.AbstractClient {
    prefix = 'address-book';
}

export function $get(prefix:string, id:string, context:context.Context):AddressBook {
    return new AddressBook(prefix, id, context);
}
