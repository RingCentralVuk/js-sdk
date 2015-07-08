/// <reference path="../../typings/externals.d.ts" />

import context = require('../core/Context');
import client = require('./AbstractClient');

import account = require('./Account');
import dictionary = require('./Dictionary');

export class Client extends client.AbstractClient {

    constructor(context:context.Context) {
        super('', '', context);
    }

    account(id?:string):account.Account {
        return account.$get(this.getResourceUrl(), id, this.context);
    }

    dictionary():dictionary.Dictionary {
        return dictionary.$get(this.getResourceUrl(), null, this.context);
    }

}

export function $get(context:context.Context):Client {
    return context.createSingleton('Client', ()=> {
        return new Client(context);
    });
}
