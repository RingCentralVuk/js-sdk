/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getpresenceinfo = require('../models/GetPresenceInfo');

export class Presence extends client.Client {

    public load(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
    }):Promise<getpresenceinfo.GetPresenceInfo> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence',
                'method': 'get'
            },
            ResponseClass = getpresenceinfo.GetPresenceInfo;

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

export function $get(context:context.Context):Presence {
    return context.createSingleton('Presence', ()=> {
        return new Presence(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Presence"
 *         ],
 *         "summary": "Get Extension Presence Status",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Returns presence status of an extension or several extensions. The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension. If the user requests his/her own presence status, the response contains actual presence status even if the status publication is turned off. Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest and the corresponding message 'Extension Presence Info multipart request is limited to 30 extensions'.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadPresence</td><td>Getting user presence information</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
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
 *                     "$ref": "#/definitions/GetPresenceInfo"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence",
 *         "method": "get",
 *         "responseSchema": "getpresenceinfo.GetPresenceInfo",
 *         "imports": [
 *             "getpresenceinfo.GetPresenceInfo"
 *         ]
 *     }
 * ]
 */