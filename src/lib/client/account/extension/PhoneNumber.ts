/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import phoneNumber = require('../PhoneNumber');

export class PhoneNumberExt extends phoneNumber.PhoneNumber {
    constructor(prefix:string, id:string, context:context.Context){ //FIXME Hack
        super(prefix, id, context);
    }
}

export function $get(prefix:string, id:string, context:context.Context):PhoneNumberExt {
    return new PhoneNumberExt(prefix, id, context);
}
