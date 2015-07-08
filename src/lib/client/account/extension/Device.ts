/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import device = require('../Device');

export class DeviceExt extends device.Device {}

export function $get(prefix:string, id:string, context:context.Context):DeviceExt {
    return new DeviceExt(prefix, id, context);
}
