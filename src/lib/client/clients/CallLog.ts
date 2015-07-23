/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import accountactivecallsresponse = require('../models/AccountActiveCallsResponse');
import extensionactivecallsresponse = require('../models/ExtensionActiveCallsResponse');
import extensioncalllogresponse = require('../models/ExtensionCallLogResponse');
import getextensioncalllogrecordresponse = require('../models/GetExtensionCallLogRecordResponse');
import getcallrecordingresponse = require('../models/GetCallRecordingResponse');

export class CallLog extends client.Client {

    public listAccountActiveCalls(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'direction'?:IListAccountActiveCallsDirection; // The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi
        'type'?:IListAccountActiveCallsType; // Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi
        'page'?:number; // Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
        'perPage'?:number; // Indicates the page size (number of items). If not specified, the value is '100' by default.
    }):Promise<accountactivecallsresponse.AccountActiveCallsResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/active-calls',
                'method': 'get'
            },
            ResponseClass = accountactivecallsresponse.AccountActiveCallsResponse;

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
                "name": "direction",
                "type": "IListAccountActiveCallsDirection",
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
                "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "type",
                "type": "IListAccountActiveCallsType",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Voice",
                    "Fax"
                ],
                "in": "query",
                "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
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
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public listActiveCalls(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'direction'?:IListActiveCallsDirection; // The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi
        'type'?:IListActiveCallsType; // Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi
        'page'?:number; // Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
        'perPage'?:number; // Indicates the page size (number of items). If not specified, the value is '100' by default.
    }):Promise<extensionactivecallsresponse.ExtensionActiveCallsResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls',
                'method': 'get'
            },
            ResponseClass = extensionactivecallsresponse.ExtensionActiveCallsResponse;

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
                "name": "direction",
                "type": "IListActiveCallsDirection",
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
                "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "type",
                "type": "IListActiveCallsType",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Voice",
                    "Fax"
                ],
                "in": "query",
                "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
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
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public list(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'extensionNumber'?:string; // Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter
        'phoneNumber'?:string; // Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter
        'direction'?:IListDirection; // The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi
        'type'?:IListType; // Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi
        'view'?:IListView; // The default value is 'Simple' for both account and extension call log, collection: multi
        'withRecording'?:IListWithRecording; // 'True' if only recorded calls have to be returned, collection: multi
        'dateTo'?:Date; // Specifies the ending timestamp for result records. Default: current time
        'dateFrom'?:Date; // The start timestamp for result records. Default value is equal to dateTo minus 1 week
        'page'?:number; // Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
        'perPage'?:number; // Indicates the page size (number of items). If not specified, the value is '100' by default.
    }):Promise<extensioncalllogresponse.ExtensionCallLogResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log',
                'method': 'get'
            },
            ResponseClass = extensioncalllogresponse.ExtensionCallLogResponse;

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
                "name": "extensionNumber",
                "type": "string",
                "in": "query",
                "description": "Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter",
                "required": false
            },
            {
                "name": "phoneNumber",
                "type": "string",
                "in": "query",
                "description": "Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter",
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
                "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "type",
                "type": "IListType",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Voice",
                    "Fax"
                ],
                "in": "query",
                "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
                "required": false
            },
            {
                "name": "view",
                "type": "IListView",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Simple",
                    "Detailed"
                ],
                "in": "query",
                "description": "The default value is 'Simple' for both account and extension call log",
                "required": false
            },
            {
                "name": "withRecording",
                "type": "IListWithRecording",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "True",
                    "False"
                ],
                "in": "query",
                "description": "'True' if only recorded calls have to be returned",
                "required": false
            },
            {
                "name": "dateTo",
                "type": "Date",
                "in": "query",
                "description": "Specifies the ending timestamp for result records. Default: current time",
                "required": false
            },
            {
                "name": "dateFrom",
                "type": "Date",
                "in": "query",
                "description": "The start timestamp for result records. Default value is equal to dateTo minus 1 week",
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
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public load(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'extensionId'?:string; // Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
        'callRecordId':number; // Internal identifier of a call log record
    }):Promise<getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}',
                'method': 'get'
            },
            ResponseClass = getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse;

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
                "name": "callRecordId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of a call log record",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public loadAccountRecording(options?:{
        'accountId'?:string; // Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session
        'recordingId':number; // Internal identifier of recording (returned in Call Log)
    }):Promise<getcallrecordingresponse.GetCallRecordingResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/account/{accountId}/recording/{recordingId}',
                'method': 'get'
            },
            ResponseClass = getcallrecordingresponse.GetCallRecordingResponse;

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
                "name": "recordingId",
                "type": "number",
                "in": "path",
                "description": "Internal identifier of recording (returned in Call Log)",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export enum IListAccountActiveCallsDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListAccountActiveCallsType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum IListActiveCallsDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListActiveCallsType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum IListDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum IListView {
    Simple = <any>'Simple',
    Detailed = <any>'Detailed'
}

export enum IListWithRecording {
    True = <any>'True',
    False = <any>'False'
}

export function $get(context:context.Context):CallLog {
    return context.createSingleton('CallLog', ()=> {
        return new CallLog(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "listAccountActiveCalls",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Account Active Calls",
 *         "description": "<p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p><p>Returns records of all calls that are in progress, ordered by start time in descending order.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
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
 *                 "name": "direction",
 *                 "type": "IListAccountActiveCallsDirection",
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
 *                 "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "type",
 *                 "type": "IListAccountActiveCallsType",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Voice",
 *                     "Fax"
 *                 ],
 *                 "in": "query",
 *                 "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
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
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/AccountActiveCallsResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/active-calls",
 *         "method": "get",
 *         "responseSchema": "accountactivecallsresponse.AccountActiveCallsResponse",
 *         "imports": [
 *             "accountactivecallsresponse.AccountActiveCallsResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "listActiveCalls",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Active Calls",
 *         "description": "<p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p><p>Returns records of all extension calls that are in progress, ordered by start time in descending order.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
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
 *                 "name": "direction",
 *                 "type": "IListActiveCallsDirection",
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
 *                 "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "type",
 *                 "type": "IListActiveCallsType",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Voice",
 *                     "Fax"
 *                 ],
 *                 "in": "query",
 *                 "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
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
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/ExtensionActiveCallsResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls",
 *         "method": "get",
 *         "responseSchema": "extensionactivecallsresponse.ExtensionActiveCallsResponse",
 *         "imports": [
 *             "extensionactivecallsresponse.ExtensionActiveCallsResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "list",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Call Log Records by Filter",
 *         "description": "<p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p><p>Returns call log records filtered by the specified parameters.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
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
 *                 "name": "extensionNumber",
 *                 "type": "string",
 *                 "in": "query",
 *                 "description": "Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter",
 *                 "required": false
 *             },
 *             {
 *                 "name": "phoneNumber",
 *                 "type": "string",
 *                 "in": "query",
 *                 "description": "Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter",
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
 *                 "description": "The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "type",
 *                 "type": "IListType",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Voice",
 *                     "Fax"
 *                 ],
 *                 "in": "query",
 *                 "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
 *                 "required": false
 *             },
 *             {
 *                 "name": "view",
 *                 "type": "IListView",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Simple",
 *                     "Detailed"
 *                 ],
 *                 "in": "query",
 *                 "description": "The default value is 'Simple' for both account and extension call log",
 *                 "required": false
 *             },
 *             {
 *                 "name": "withRecording",
 *                 "type": "IListWithRecording",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "True",
 *                     "False"
 *                 ],
 *                 "in": "query",
 *                 "description": "'True' if only recorded calls have to be returned",
 *                 "required": false
 *             },
 *             {
 *                 "name": "dateTo",
 *                 "type": "Date",
 *                 "in": "query",
 *                 "description": "Specifies the ending timestamp for result records. Default: current time",
 *                 "required": false
 *             },
 *             {
 *                 "name": "dateFrom",
 *                 "type": "Date",
 *                 "in": "query",
 *                 "description": "The start timestamp for result records. Default value is equal to dateTo minus 1 week",
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
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/ExtensionCallLogResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log",
 *         "method": "get",
 *         "responseSchema": "extensioncalllogresponse.ExtensionCallLogResponse",
 *         "imports": [
 *             "extensioncalllogresponse.ExtensionCallLogResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "load",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Call Log Record",
 *         "description": "<p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p><p>Returns individual call log record by callRecordId(s).</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
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
 *                 "name": "callRecordId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of a call log record",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetExtensionCallLogRecordResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}",
 *         "method": "get",
 *         "responseSchema": "getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse",
 *         "imports": [
 *             "getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "loadAccountRecording",
 *         "tags": [
 *             "Call Log"
 *         ],
 *         "summary": "Get Call Recording",
 *         "description": "<p style='font-style:italic;'>Since 1.0.18</p><p>Returns call recording metadata.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallRecording</td><td>Downloading call recording content</td></tr><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>",
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
 *                 "name": "recordingId",
 *                 "type": "number",
 *                 "in": "path",
 *                 "description": "Internal identifier of recording (returned in Call Log)",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetCallRecordingResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/account/{accountId}/recording/{recordingId}",
 *         "method": "get",
 *         "responseSchema": "getcallrecordingresponse.GetCallRecordingResponse",
 *         "imports": [
 *             "getcallrecordingresponse.GetCallRecordingResponse"
 *         ]
 *     }
 * ]
 */