/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getringoutstatusresponse = require('../models/GetRingOutStatusResponse');
import makeringoutrequest = require('../models/MakeRingoutRequest');

export class RingOut extends client.Client {

    public create(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'body':makeringoutrequest.MakeRingoutRequest; // JSON body
    }):Promise<getringoutstatusresponse.GetRingOutStatusResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout',
                'method': 'post'
            },
            ResponseClass = getringoutstatusresponse.GetRingOutStatusResponse;

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
            },
            {
                "name": "body",
                "type": "makeringoutrequest.MakeRingoutRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public load(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'ringoutId':string; // Internal identifier of a RingOut call
    }):Promise<getringoutstatusresponse.GetRingOutStatusResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}',
                'method': 'get'
            },
            ResponseClass = getringoutstatusresponse.GetRingOutStatusResponse;

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
            },
            {
                "name": "ringoutId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a RingOut call",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public remove(options?:{
    }):Promise<any> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}',
                'method': 'delete'
            },
            ResponseClass = null;

        apiOptions = this.parseOptions(apiOptions, options, []);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export function $get(context:context.Context):RingOut {
    return context.createSingleton('RingOut', ()=> {
        return new RingOut(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "create",
 *         "tags": [
 *             "RingOut"
 *         ],
 *         "summary": "Make RingOut Call",
 *         "description": "<p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
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
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "makeringoutrequest.MakeRingoutRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetRingOutStatusResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout",
 *         "method": "post",
 *         "responseSchema": "getringoutstatusresponse.GetRingOutStatusResponse",
 *         "imports": [
 *             "getringoutstatusresponse.GetRingOutStatusResponse",
 *             "makeringoutrequest.MakeRingoutRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "RingOut"
 *         ],
 *         "summary": "Get Status of RingOut Call",
 *         "description": "<p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Returns the status of a 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
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
 *             },
 *             {
 *                 "name": "ringoutId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a RingOut call",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetRingOutStatusResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}",
 *         "method": "get",
 *         "responseSchema": "getringoutstatusresponse.GetRingOutStatusResponse",
 *         "imports": [
 *             "getringoutstatusresponse.GetRingOutStatusResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "remove",
 *         "tags": [
 *             "RingOut"
 *         ],
 *         "summary": "Cancel RingOut Call",
 *         "description": "<p style='font-style:italic;'></p><p>Cancels the 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr><tr><td class='code'>accountId</td><td>string</td></tr><tr><td class='code'>extensionId</td><td>string</td></tr><tr><td class='code'>ringoutId</td><td>string</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}",
 *         "method": "delete",
 *         "responseSchema": ".",
 *         "imports": []
 *     }
 * ]
 */