/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class PhoneNumber extends client.AbstractClient {

    prefix = 'phone-number';

}

export function $get(prefix:string, id:string, context:context.Context):PhoneNumber {
    return new PhoneNumber(prefix, id, context);
}
