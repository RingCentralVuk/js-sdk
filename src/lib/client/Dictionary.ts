/// <reference path="../../typings/externals.d.ts" />

import context = require('../core/Context');
import client = require('./AbstractClient');

import country = require('./dictionary/Country');
import device = require('./dictionary/Device');
import language = require('./dictionary/Language');
import loc = require('./dictionary/Location');
import shippingMethod = require('./dictionary/ShippingMethod');
import state = require('./dictionary/State');

export class Dictionary extends client.AbstractClient {

    prefix = 'dictionary';

    country(id?:string) {
        return country.$get(this.getResourceUrl(), id, this.context);
    }

    device(id?:string) {
        return device.$get(this.getResourceUrl(), id, this.context);
    }

    language(id?:string) {
        return language.$get(this.getResourceUrl(), id, this.context);
    }

    location(id?:string) {
        return loc.$get(this.getResourceUrl(), id, this.context);
    }

    shippingMethod(id?:string) {
        return shippingMethod.$get(this.getResourceUrl(), id, this.context);
    }

    state(id?:string) {
        return state.$get(this.getResourceUrl(), id, this.context);
    }

}

export function $get(prefix:string, id:string, context:context.Context):Dictionary {
    return new Dictionary(prefix, id, context);
}
