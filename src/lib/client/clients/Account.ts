/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getaccountinforesponse = require('../models/GetAccountInfoResponse');

export class Account extends client.Client {

    /**
     * Get Account Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns basic information about a particular RingCentral customer account.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    public load(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
    }):Promise<getaccountinforesponse.GetAccountInfoResponse> {

        return this.apiCall(this.parseOptions('get', '/restapi/v1.0/account/{accountId}', options, loadOptions),
                            getaccountinforesponse.GetAccountInfoResponse);

    }

}

/**
 * Definition of options for load operation
 */
export var loadOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];

export function $get(context:context.Context):Account {
    return context.createSingleton('Account', ()=> {
        return new Account(context);
    });
}