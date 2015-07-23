/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getextensionlistresponse = require('../models/GetExtensionListResponse');
import getextensioninforesponse = require('../models/GetExtensionInfoResponse');

export class Extension extends client.Client {

    public list(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'page'?:number; // Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
        'perPage'?:number; // Indicates the page size (number of items). If not specified, the value is '100' by default.
        'status'?:IListStatus; // Extension current state. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned, collection: multi
    }):Promise<getextensionlistresponse.GetExtensionListResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension',
                'method': 'get'
            },
            ResponseClass = getextensionlistresponse.GetExtensionListResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
                "required": false
            },
            {
                "name": "status",
                "type": "IListStatus",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Enabled",
                    "Disabled",
                    "NotActivated",
                    "Unassigned"
                ],
                "in": "query",
                "description": "Extension current state. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned",
                "required": false
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public load(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
    }):Promise<getextensioninforesponse.GetExtensionInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}',
                'method': 'get'
            },
            ResponseClass = getextensioninforesponse.GetExtensionInfoResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "accountId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session",
                "required": false
            },
            {
                "name": "extensionId",
                "default": "~",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
                "required": false
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export enum IListStatus {
    Enabled = <any>'Enabled',
    Disabled = <any>'Disabled',
    NotActivated = <any>'NotActivated',
    Unassigned = <any>'Unassigned'
}

export function $get(context:context.Context):Extension {
    return context.createSingleton('Extension', ()=> {
        return new Extension(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "Extension"
 *         ],
 *         "summary": "Get Extension List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
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
 *             },
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default.",
 *                 "required": false
 *             },
 *             {
 *                 "name": "status",
 *                 "type": "IListStatus",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Enabled",
 *                     "Disabled",
 *                     "NotActivated",
 *                     "Unassigned"
 *                 ],
 *                 "in": "query",
 *                 "description": "Extension current state. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetExtensionListResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension",
 *         "method": "get",
 *         "responseSchema": "getextensionlistresponse.GetExtensionListResponse",
 *         "imports": [
 *             "getextensionlistresponse.GetExtensionListResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Extension"
 *         ],
 *         "summary": "Get Extension Info",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular extension of an account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
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
 *             },
 *             {
 *                 "name": "extensionId",
 *                 "default": "~",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetExtensionInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}",
 *         "method": "get",
 *         "responseSchema": "getextensioninforesponse.GetExtensionInfoResponse",
 *         "imports": [
 *             "getextensioninforesponse.GetExtensionInfoResponse"
 *         ]
 *     }
 * ]
 */