/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import activeCalls = require('../ActiveCalls');

export class ActiveCallsExt extends activeCalls.ActiveCalls {}

export function $get(prefix:string, id:string, context:context.Context):ActiveCallsExt {
    return new ActiveCallsExt(prefix, id, context);
}
