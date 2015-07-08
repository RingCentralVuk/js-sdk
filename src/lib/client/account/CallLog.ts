/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class CallLog extends client.AbstractClient {

    prefix = 'call-log';

}

export function $get(prefix:string, id:string, context:context.Context):CallLog {
    return new CallLog(prefix, id, context);
}
