/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class Device extends client.AbstractClient {

    prefix = 'device';

}

export function $get(prefix:string, id:string, context:context.Context):Device {
    return new Device(prefix, id, context);
}
