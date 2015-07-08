/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class Location extends client.AbstractClient {

    prefix = 'location';

}

export function $get(prefix:string, id:string, context:context.Context):Location {
    return new Location(prefix, id, context);
}
