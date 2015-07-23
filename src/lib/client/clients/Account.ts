/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getaccountinforesponse = require('../models/GetAccountInfoResponse');
import createaccountrequest = require('../models/CreateAccountRequest');

export class Account extends client.Client {

    public create(options?:{
        'body':createaccountrequest.CreateAccountRequest; // JSON body
    }):Promise<getaccountinforesponse.GetAccountInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account',
                'method': 'post'
            },
            ResponseClass = getaccountinforesponse.GetAccountInfoResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "body",
                "type": "createaccountrequest.CreateAccountRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public load(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
    }):Promise<getaccountinforesponse.GetAccountInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}',
                'method': 'get'
            },
            ResponseClass = getaccountinforesponse.GetAccountInfoResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export function $get(context:context.Context):Account {
    return context.createSingleton('Account', ()=> {
        return new Account(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "create",
 *         "tags": [
 *             "Account"
 *         ],
 *         "summary": "Create Account",
 *         "description": "<p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Creates the account in Initial state.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Accounts</td><td>Managing accounts: creating new accounts, viewing and updating account information, deleting existing accounts</td></tr><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr><tr><td class='code'>EditExtensions</td><td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "body",
 *                 "type": "createaccountrequest.CreateAccountRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetAccountInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account",
 *         "method": "post",
 *         "responseSchema": "getaccountinforesponse.GetAccountInfoResponse",
 *         "imports": [
 *             "getaccountinforesponse.GetAccountInfoResponse",
 *             "createaccountrequest.CreateAccountRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Account"
 *         ],
 *         "summary": "Get Account Info",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular RingCentral customer account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "accountId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetAccountInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}",
 *         "method": "get",
 *         "responseSchema": "getaccountinforesponse.GetAccountInfoResponse",
 *         "imports": [
 *             "getaccountinforesponse.GetAccountInfoResponse"
 *         ]
 *     }
 * ]
 */