/// <reference path="../../../../typings/externals.d.ts" />

import context = require('../../../core/Context');
import client = require('../../AbstractClient');

export class CompanyPager extends client.AbstractClient {
    prefix = 'company-pager';
}

export function $get(prefix:string, id:string, context:context.Context):CompanyPager {
    return new CompanyPager(prefix, id, context);
}
