/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../AbstractClient');

export class Language extends client.AbstractClient {

    prefix = 'language';

}

export function $get(prefix:string, id:string, context:context.Context):Language {
    return new Language(prefix, id, context);
}
