/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getmessageinforesponse = require('../models/GetMessageInfoResponse');
import createpagermessagerequest = require('../models/CreatePagerMessageRequest');
import createfaxmessagerequest = require('../models/CreateFaxMessageRequest');
import createsmsmessage = require('../models/CreateSMSMessage');
import getmessagelist = require('../models/GetMessageList');
import updatemessagerequest = require('../models/UpdateMessageRequest');

export class Messages extends client.Client {

    public createPager(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'body':createpagermessagerequest.CreatePagerMessageRequest; // JSON body
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager',
                'method': 'post'
            },
            ResponseClass = getmessageinforesponse.GetMessageInfoResponse;

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
                "type": "createpagermessagerequest.CreatePagerMessageRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public createFax(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'body':createfaxmessagerequest.CreateFaxMessageRequest; // JSON body
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax',
                'method': 'post'
            },
            ResponseClass = getmessageinforesponse.GetMessageInfoResponse;

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
                "type": "createfaxmessagerequest.CreateFaxMessageRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public createSms(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'body':createsmsmessage.CreateSMSMessage; // JSON body
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms',
                'method': 'post'
            },
            ResponseClass = getmessageinforesponse.GetMessageInfoResponse;

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
                "type": "createsmsmessage.CreateSMSMessage",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public list(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'availability'?:IListAvailability; // Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted, collection: multi
        'conversationId'?:number; // Specifies the conversation identifier for the resulting messages
        'dateFrom'?:Date; // The start timestamp for the resulting messages. Default value is equal to dateTo minus 1 week
        'dateTo'?:Date; // Specifies the ending timestamp for the resulting messages. Default: current time
        'direction'?:IListDirection; // The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted, collection: multi
        'messageType'?:IListMessageType; // The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted, collection: multi
        'readStatus'?:IListReadStatus; // The read status for the resulting messages. Multiple values are accepted, collection: multi
        'page'?:number; // Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
        'perPage'?:number; // Indicates the page size (number of items). If not specified, the value is '100' by default
        'phoneNumber'?:string; // The phone number. If specified, messages are returned for this particular phone number only
    }):Promise<getmessagelist.GetMessageList> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store',
                'method': 'get'
            },
            ResponseClass = getmessagelist.GetMessageList;

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
                "name": "availability",
                "type": "IListAvailability",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Alive",
                    "Deleted",
                    "Purged"
                ],
                "in": "query",
                "description": "Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted",
                "required": false
            },
            {
                "name": "conversationId",
                "type": "number",
                "in": "query",
                "description": "Specifies the conversation identifier for the resulting messages",
                "required": false
            },
            {
                "name": "dateFrom",
                "type": "Date",
                "in": "query",
                "description": "The start timestamp for the resulting messages. Default value is equal to dateTo minus 1 week",
                "required": false
            },
            {
                "name": "dateTo",
                "type": "Date",
                "in": "query",
                "description": "Specifies the ending timestamp for the resulting messages. Default: current time",
                "required": false
            },
            {
                "name": "direction",
                "type": "IListDirection",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Inbound",
                    "Outbound"
                ],
                "in": "query",
                "description": "The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "messageType",
                "type": "IListMessageType",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Fax",
                    "SMS",
                    "VoiceMail",
                    "Pager",
                    "Text"
                ],
                "in": "query",
                "description": "The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "readStatus",
                "type": "IListReadStatus",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Read",
                    "Unread"
                ],
                "in": "query",
                "description": "The read status for the resulting messages. Multiple values are accepted",
                "required": false
            },
            {
                "name": "page",
                "type": "number",
                "in": "query",
                "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'",
                "required": false
            },
            {
                "name": "perPage",
                "type": "number",
                "in": "query",
                "description": "Indicates the page size (number of items). If not specified, the value is '100' by default",
                "required": false
            },
            {
                "name": "phoneNumber",
                "type": "string",
                "in": "query",
                "description": "The phone number. If specified, messages are returned for this particular phone number only",
                "required": false
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public load(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'messageId':number; // Internal identifier of a message
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}',
                'method': 'get'
            },
            ResponseClass = getmessageinforesponse.GetMessageInfoResponse;

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
                "name": "messageId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public update(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'messageId':number; // Internal identifier of a message
        'body':updatemessagerequest.UpdateMessageRequest; // JSON body
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}',
                'method': 'put'
            },
            ResponseClass = getmessageinforesponse.GetMessageInfoResponse;

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
                "name": "messageId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message",
                "required": true
            },
            {
                "name": "body",
                "type": "updatemessagerequest.UpdateMessageRequest",
                "in": "body",
                "description": "JSON body",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public remove(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'messageId':number; // Internal identifier of a message
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}',
                'method': 'delete'
            },
            ResponseClass = getmessageinforesponse.GetMessageInfoResponse;

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
                "name": "messageId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public loadContent(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'attachmentId':number; // Internal identifier of a message attachment
        'messageId':number; // Internal identifier of a message
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}',
                'method': 'get'
            },
            ResponseClass = getmessageinforesponse.GetMessageInfoResponse;

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
                "name": "attachmentId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message attachment",
                "required": true
            },
            {
                "name": "messageId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a message",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export enum IListAvailability {
    Alive = <any>'Alive',
    Deleted = <any>'Deleted',
    Purged = <any>'Purged'
}

export enum IListDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListMessageType {
    Fax = <any>'Fax',
    SMS = <any>'SMS',
    VoiceMail = <any>'VoiceMail',
    Pager = <any>'Pager',
    Text = <any>'Text'
}

export enum IListReadStatus {
    Read = <any>'Read',
    Unread = <any>'Unread'
}

export function $get(context:context.Context):Messages {
    return context.createSingleton('Messages', ()=> {
        return new Messages(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "createPager",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Create Pager Message",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Creates and sends a pager message.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>InternalMessages</td><td>Sending and receiving intra-company text messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
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
 *                 "type": "createpagermessagerequest.CreatePagerMessageRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager",
 *         "method": "post",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse",
 *             "createpagermessagerequest.CreatePagerMessageRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "createFax",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Create Fax Message",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Creates and sends/resends new fax message. Resend can be done if sending failed.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Faxes</td><td>Sending and receiving faxes</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
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
 *                 "type": "createfaxmessagerequest.CreateFaxMessageRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax",
 *         "method": "post",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse",
 *             "createfaxmessagerequest.CreateFaxMessageRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "createSms",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Create SMS Message",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Creates and sends new SMS message.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>SMS</td><td>Sending and receiving SMS (text) messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
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
 *                 "type": "createsmsmessage.CreateSMSMessage",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms",
 *         "method": "post",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse",
 *             "createsmsmessage.CreateSMSMessage"
 *         ]
 *     },
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Get Message List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Returns the list of messages from an extension mailbox.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
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
 *                 "name": "availability",
 *                 "type": "IListAvailability",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Alive",
 *                     "Deleted",
 *                     "Purged"
 *                 ],
 *                 "in": "query",
 *                 "description": "Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "conversationId",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Specifies the conversation identifier for the resulting messages",
 *                 "required": false
 *             },
 *             {
 *                 "name": "dateFrom",
 *                 "type": "Date",
 *                 "in": "query",
 *                 "description": "The start timestamp for the resulting messages. Default value is equal to dateTo minus 1 week",
 *                 "required": false
 *             },
 *             {
 *                 "name": "dateTo",
 *                 "type": "Date",
 *                 "in": "query",
 *                 "description": "Specifies the ending timestamp for the resulting messages. Default: current time",
 *                 "required": false
 *             },
 *             {
 *                 "name": "direction",
 *                 "type": "IListDirection",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Inbound",
 *                     "Outbound"
 *                 ],
 *                 "in": "query",
 *                 "description": "The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "messageType",
 *                 "type": "IListMessageType",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Fax",
 *                     "SMS",
 *                     "VoiceMail",
 *                     "Pager",
 *                     "Text"
 *                 ],
 *                 "in": "query",
 *                 "description": "The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "readStatus",
 *                 "type": "IListReadStatus",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Read",
 *                     "Unread"
 *                 ],
 *                 "in": "query",
 *                 "description": "The read status for the resulting messages. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "page",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'",
 *                 "required": false
 *             },
 *             {
 *                 "name": "perPage",
 *                 "type": "number",
 *                 "in": "query",
 *                 "description": "Indicates the page size (number of items). If not specified, the value is '100' by default",
 *                 "required": false
 *             },
 *             {
 *                 "name": "phoneNumber",
 *                 "type": "string",
 *                 "in": "query",
 *                 "description": "The phone number. If specified, messages are returned for this particular phone number only",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageList"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store",
 *         "method": "get",
 *         "responseSchema": "getmessagelist.GetMessageList",
 *         "imports": [
 *             "getmessagelist.GetMessageList"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Get Message Info",
 *         "description": "<p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>",
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
 *                 "name": "messageId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}",
 *         "method": "get",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "update",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Update Message",
 *         "description": "<p style='font-style:italic;'>Since 1.0.2</p><p>Updates an individual message or several messages. Batch request is supported. Currently, only the message read status updating is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditMessages</td><td>Viewing and updating user messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
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
 *                 "name": "messageId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message",
 *                 "required": true
 *             },
 *             {
 *                 "name": "body",
 *                 "type": "updatemessagerequest.UpdateMessageRequest",
 *                 "in": "body",
 *                 "description": "JSON body",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}",
 *         "method": "put",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse",
 *             "updatemessagerequest.UpdateMessageRequest"
 *         ]
 *     },
 *     {
 *         "operationId": "remove",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Delete Message",
 *         "description": "<p style='font-style:italic;'></p><p>Deletes an individual message or several messages by the given message ID(s). Batch request is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditMessages</td><td>Viewing and updating user messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
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
 *                 "name": "messageId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}",
 *         "method": "delete",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "loadContent",
 *         "tags": [
 *             "Messages"
 *         ],
 *         "summary": "Get Message Attachment",
 *         "description": "<p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p><p>Returns particular message attachment data as a media stream.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>",
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
 *                 "name": "attachmentId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message attachment",
 *                 "required": true
 *             },
 *             {
 *                 "name": "messageId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a message",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetMessageInfoResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}",
 *         "method": "get",
 *         "responseSchema": "getmessageinforesponse.GetMessageInfoResponse",
 *         "imports": [
 *             "getmessageinforesponse.GetMessageInfoResponse"
 *         ]
 *     }
 * ]
 */