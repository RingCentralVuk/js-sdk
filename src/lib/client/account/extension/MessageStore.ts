/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class MessageStore extends client.AbstractClient {
    prefix = 'message-store';
}

export function $get(prefix:string, id:string, context:context.Context):MessageStore {
    return new MessageStore(prefix, id, context);
}
