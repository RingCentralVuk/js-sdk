/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import callLog = require('../CallLog');

export class CallLogExt extends callLog.CallLog {}

export function $get(prefix:string, id:string, context:context.Context):CallLogExt {
    return new CallLogExt(prefix, id, context);
}
