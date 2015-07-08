/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

import activeCalls = require('./extension/ActiveCalls');
import addressBook = require('./extension/AddressBook');
import blockedNumber = require('./extension/BlockedNumber');
import callLog = require('./extension/CallLog');
import companyPager = require('./extension/CompanyPager');
import conferencing = require('./extension/Conferencing');
import device = require('./extension/Device');
import fax = require('./extension/Fax');
import forwardingNumber = require('./extension/ForwardingNumber');
import messageStore = require('./extension/MessageStore');
import messageSync = require('./extension/MessageSync');
import phoneNumber = require('./extension/PhoneNumber');
import presence = require('./extension/Presence');
import ringout = require('./extension/Ringout');
import sms = require('./extension/SMS');

export class Extension extends client.AbstractClient {

    prefix = 'extension';

    blockedNumber() {
        return blockedNumber.$get(this.getResourceUrl(), null, this.context);
    }

    addressBook() {
        return addressBook.$get(this.getResourceUrl(), null, this.context);
    }

    activeCalls(id?:string) {
        return activeCalls.$get(this.getResourceUrl(), id, this.context);
    }

    callLog(id?:string) {
        return callLog.$get(this.getResourceUrl(), id, this.context);
    }

    phoneNumber(id?:string) {
        return addressBook.$get(this.getResourceUrl(), id, this.context);
    }

    presence() {
        return presence.$get(this.getResourceUrl(), null, this.context);
    }

    ringout(id?:string) {
        return ringout.$get(this.getResourceUrl(), id, this.context);
    }

    device(id?:string) {
        return device.$get(this.getResourceUrl(), id, this.context);
    }

    messageStore(id?:string) {
        return messageStore.$get(this.getResourceUrl(), id, this.context);
    }

    messageSync() {
        return messageSync.$get(this.getResourceUrl(), null, this.context);
    }

    sms() {
        return sms.$get(this.getResourceUrl(), null, this.context);
    }

    fax() {
        return fax.$get(this.getResourceUrl(), null, this.context);
    }

    companyPager() {
        return companyPager.$get(this.getResourceUrl(), null, this.context);
    }

    forwardingNumber(id?:string) {
        return forwardingNumber.$get(this.getResourceUrl(), id, this.context);
    }

    conferencing(id?:string) {
        return conferencing.$get(this.getResourceUrl(), id, this.context);
    }

}

export function $get(prefix:string, id:string|string[], context:context.Context):Extension {
    return new Extension(prefix, id, context);
}
