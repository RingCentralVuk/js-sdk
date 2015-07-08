/// <reference path="../../typings/externals.d.ts" />

import context = require('../core/Context');
import client = require('./AbstractClient');

import activeCalls = require('./account/ActiveCalls');
import callLog = require('./account/CallLog');
import device = require('./account/Device');
import extension = require('./account/Extension');
import order = require('./account/Order');
import phoneNumber = require('./account/PhoneNumber');
import serviceInfo = require('./account/ServiceInfo');

export class Account extends client.AbstractClient {

    prefix = 'account';

    extension(id?:string|string[]) {
        return extension.$get(this.getResourceUrl(), id, this.context);
    }

    phoneNumber(id?:string) {
        return phoneNumber.$get(this.getResourceUrl(), id, this.context);
    }

    activeCalls(id?:string) {
        return activeCalls.$get(this.getResourceUrl(), id, this.context);
    }

    callLog(id?:string) {
        return callLog.$get(this.getResourceUrl(), id, this.context);
    }

    serviceInfo() {
        return serviceInfo.$get(this.getResourceUrl(), null, this.context);
    }

    order(id?:string) {
        return order.$get(this.getResourceUrl(), id, this.context);
    }

    device(id?:string) {
        return device.$get(this.getResourceUrl(), id, this.context);
    }

}

export function $get(prefix:string, id:string, context:context.Context):Account {
    return new Account(prefix, id, context);
}
