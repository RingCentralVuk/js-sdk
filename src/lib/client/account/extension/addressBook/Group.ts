/// <reference path="../../../../../typings/externals.d.ts" />

import context = require('../../../../core/Context');
import client = require('../../../AbstractClient');

export class Group extends client.AbstractClient {
    prefix = 'group';
}

export function $get(prefix:string, id:string, context:context.Context):Group {
    return new Group(prefix, id, context);
}
