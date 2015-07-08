/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class State extends client.AbstractClient {

    prefix = 'state';

}

export function $get(prefix:string, id:string, context:context.Context):State {
    return new State(prefix, id, context);
}
