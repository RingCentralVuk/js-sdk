/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class MessageSync extends client.AbstractClient {
    prefix = 'message-sync';
}

export function $get(prefix:string, id:string, context:context.Context):MessageSync {
    return new MessageSync(prefix, id, context);
}
