/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getversionsresponse = require('../models/GetVersionsResponse');
import getversionresponse = require('../models/GetVersionResponse');

export class APIVersioning extends client.Client {

    public list(options?:{
    }):Promise<getversionsresponse.GetVersionsResponse> {

        var apiOptions = {
                'url': '/restapi/',
                'method': 'get'
            },
            ResponseClass = getversionsresponse.GetVersionsResponse;

        apiOptions = this.parseOptions(apiOptions, options, []);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public load(options?:{
        'apiVersion':string; // API version to be requested, for example 'v1.0'
    }):Promise<getversionresponse.GetVersionResponse> {

        var apiOptions = {
                'url': '/restapi/{apiVersion}',
                'method': 'get'
            },
            ResponseClass = getversionresponse.GetVersionResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "apiVersion",
                "type": "string",
                "in": "path",
                "description": "API version to be requested, for example 'v1.0'",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export function $get(context:context.Context):APIVersioning {
    return context.createSingleton('APIVersioning', ()=> {
        return new APIVersioning(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "API Versioning"
 *         ],
 *         "summary": "Get API Versions",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns current API version(s) and server info.</p>",
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
 *                     "$ref": "#/definitions/GetVersionsResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/",
 *         "method": "get",
 *         "responseSchema": "getversionsresponse.GetVersionsResponse",
 *         "imports": [
 *             "getversionsresponse.GetVersionsResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "API Versioning"
 *         ],
 *         "summary": "Get Version Info",
 *         "description": "<p style='font-style:italic;'>Since 1.0.0</p><p>Returns current API version info by apiVersion.</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "apiVersion",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "API version to be requested, for example 'v1.0'",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetVersionResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/{apiVersion}",
 *         "method": "get",
 *         "responseSchema": "getversionresponse.GetVersionResponse",
 *         "imports": [
 *             "getversionresponse.GetVersionResponse"
 *         ]
 *     }
 * ]
 */