/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getsubscriptioninforesponse = require('../models/GetSubscriptionInfoResponse');
import createsubscriptionrequest = require('../models/CreateSubscriptionRequest');
import modifysubscriptionrequest = require('../models/ModifySubscriptionRequest');

export class NotificationsSubscriptionAPI extends client.Client {

    public create(options?:{
        'body':createsubscriptionrequest.CreateSubscriptionRequest; // JSON body
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/subscription',
                'method': 'post'
            },
            ResponseClass = getsubscriptioninforesponse.GetSubscriptionInfoResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "body",
                "type": "createsubscriptionrequest.CreateSubscriptionRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public load(options?:{
        'subscriptionId':string; // Internal identifier of a subscription
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/subscription/{subscriptionId}',
                'method': 'get'
            },
            ResponseClass = getsubscriptioninforesponse.GetSubscriptionInfoResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "subscriptionId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a subscription",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public update(options?:{
        'subscriptionId':string; // Internal identifier of a subscription
        'body':modifysubscriptionrequest.ModifySubscriptionRequest; // JSON body
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/subscription/{subscriptionId}',
                'method': 'put'
            },
            ResponseClass = getsubscriptioninforesponse.GetSubscriptionInfoResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "subscriptionId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a subscription",
                "required": true
            },
            {
                "name": "body",
                "type": "modifysubscriptionrequest.ModifySubscriptionRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public remove(options?:{
        'subscriptionId':string; // Internal identifier of a subscription
    }):Promise<any> {

        var apiOptions = {
                'url': '/restapi/v1.0/subscription/{subscriptionId}',
                'method': 'delete'
            },
            ResponseClass = null;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "subscriptionId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a subscription",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export function $get(context:context.Context):NotificationsSubscriptionAPI {
    return context.createSingleton('NotificationsSubscriptionAPI', ()=> {
        return new NotificationsSubscriptionAPI(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "create",
 *         "tags": [
 *             "Notifications: Subscription API"
 *         ],
 *         "summary": "Create Subscription",
 *         "description": "<p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Creates a new subscription. To call this method with APNS transport type you have to specify endpoint_id attribute in get token request at authorization.</p><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "body",
 *                 "type": "createsubscriptionrequest.CreateSubscriptionRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetSubscriptionInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/subscription",
 *         "method": "post",
 *         "responseSchema": "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *         "imports": [
 *             "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *             "createsubscriptionrequest.CreateSubscriptionRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Notifications: Subscription API"
 *         ],
 *         "summary": "Get Subscription",
 *         "description": "<p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Returns the requested subscription.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "subscriptionId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a subscription",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetSubscriptionInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/subscription/{subscriptionId}",
 *         "method": "get",
 *         "responseSchema": "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *         "imports": [
 *             "getsubscriptioninforesponse.GetSubscriptionInfoResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "update",
 *         "tags": [
 *             "Notifications: Subscription API"
 *         ],
 *         "summary": "Renew Subscription / Modify Event Filters",
 *         "description": "<p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>With empty request body - renews the existent subscription. If event filters specified - modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "subscriptionId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a subscription",
 *                 "required": true
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "modifysubscriptionrequest.ModifySubscriptionRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetSubscriptionInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/subscription/{subscriptionId}",
 *         "method": "put",
 *         "responseSchema": "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *         "imports": [
 *             "getsubscriptioninforesponse.GetSubscriptionInfoResponse",
 *             "modifysubscriptionrequest.ModifySubscriptionRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "remove",
 *         "tags": [
 *             "Notifications: Subscription API"
 *         ],
 *         "summary": "Cancel Subscription",
 *         "description": "<p style='font-style:italic;'></p><p>Cancels the existent subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "subscriptionId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a subscription",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/subscription/{subscriptionId}",
 *         "method": "delete",
 *         "responseSchema": ".",
 *         "imports": []
 *     }
 * ]
 */