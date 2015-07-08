/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class Country extends client.AbstractClient {

    prefix = 'country';

}

export function $get(prefix:string, id:string, context:context.Context):Country {
    return new Country(prefix, id, context);
}
