/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class ServiceInfo extends client.AbstractClient {

    prefix = 'service-info';

}

export function $get(prefix:string, id:string, context:context.Context):ServiceInfo {
    return new ServiceInfo(prefix, id, context);
}
