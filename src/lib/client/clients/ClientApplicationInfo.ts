/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import clientapiresponse = require('../models/ClientApiResponse');
import customdataapiresponse = require('../models/CustomDataApiResponse');
import customdatarequest = require('../models/CustomDataRequest');

export class ClientApplicationInfo extends client.Client {

    public list(options?:{
    }):Promise<clientapiresponse.ClientApiResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/client-info',
                'method': 'get'
            },
            ResponseClass = clientapiresponse.ClientApiResponse;

        apiOptions = this.parseOptions(apiOptions, options, []);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public load(options?:{
        'my-custom-key':string; // Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won't be allowed to create any custom data key for that extension.
        'body':customdatarequest.CustomDataRequest; // JSON body
    }):Promise<customdataapiresponse.CustomDataApiResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/client-info/custom-data/{my-custom-key}',
                'method': 'put'
            },
            ResponseClass = customdataapiresponse.CustomDataApiResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "my-custom-key",
                "type": "string",
                "in": "path",
                "description": "Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won't be allowed to create any custom data key for that extension.",
                "required": true
            },
            {
                "name": "body",
                "type": "customdatarequest.CustomDataRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export function $get(context:context.Context):ClientApplicationInfo {
    return context.createSingleton('ClientApplicationInfo', ()=> {
        return new ClientApplicationInfo(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "Client Application Info"
 *         ],
 *         "summary": "Get Client Info",
 *         "description": "<p style='font-style:italic;'>Since 1.0.11 (Release 6.3)</p><p>Returns client application data: general info, specific provisioning parameters, hints, etc.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadClientInfo</td><td>Viewing of client application registered attributes and additional helper information (external URLs, hints, etc.)</td></tr></tbody></table>",
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
 *                     "$ref": "#/definitions/ClientApiResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/client-info",
 *         "method": "get",
 *         "responseSchema": "clientapiresponse.ClientApiResponse",
 *         "imports": [
 *             "clientapiresponse.ClientApiResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Client Application Info"
 *         ],
 *         "summary": "Create/Update Custom Data",
 *         "description": "<p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Creates or updates custom data for the extension that is currently logged in.</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "my-custom-key",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won't be allowed to create any custom data key for that extension.",
 *                 "required": true
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "customdatarequest.CustomDataRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/CustomDataApiResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/client-info/custom-data/{my-custom-key}",
 *         "method": "put",
 *         "responseSchema": "customdataapiresponse.CustomDataApiResponse",
 *         "imports": [
 *             "customdataapiresponse.CustomDataApiResponse",
 *             "customdatarequest.CustomDataRequest"
 *         ]
 *     }
 * ]
 */