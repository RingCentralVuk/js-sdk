/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class ShippingMethod extends client.AbstractClient {

    prefix = 'shipping-method';

}

export function $get(prefix:string, id:string, context:context.Context):ShippingMethod {
    return new ShippingMethod(prefix, id, context);
}
