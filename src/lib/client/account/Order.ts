/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class Order extends client.AbstractClient {

    prefix = 'order';

}

export function $get(prefix:string, id:string, context:context.Context):Order {
    return new Order(prefix, id, context);
}
