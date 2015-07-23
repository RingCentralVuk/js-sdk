/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getcountrylistresponse = require('../models/GetCountryListResponse');
import countryinfo = require('../models/CountryInfo');
import languageinfo = require('../models/LanguageInfo');
import getlocationlistresponse = require('../models/GetLocationListResponse');

export class Dictionary extends client.Client {

    public listCountries(options?:{
        'page'?:number; // Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
        'perPage'?:number; // Indicates the page size (number of items). If not specified, the value is '100' by default.
    }):Promise<getcountrylistresponse.GetCountryListResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/dictionary/country',
                'method': 'get'
            },
            ResponseClass = getcountrylistresponse.GetCountryListResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
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

    public loadCountry(options?:{
        'countryId':string; // Internal identifier of a country
    }):Promise<countryinfo.CountryInfo> {

        var apiOptions = {
                'url': '/restapi/v1.0/dictionary/country/{countryId}',
                'method': 'get'
            },
            ResponseClass = countryinfo.CountryInfo;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "countryId",
                "type": "string",
                "in": "path",
                "description": "Internal identifier of a country",
                "required": true
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public listLanguages(options?:{
    }):Promise<any> {

        var apiOptions = {
                'url': '/restapi/v1.0/dictionary/language',
                'method': 'get'
            },
            ResponseClass = null;

        apiOptions = this.parseOptions(apiOptions, options, []);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public loadLanguage(options?:{
    }):Promise<languageinfo.LanguageInfo> {

        var apiOptions = {
                'url': '/restapi/v1.0/dictionary/language/{languageId}',
                'method': 'get'
            },
            ResponseClass = languageinfo.LanguageInfo;

        apiOptions = this.parseOptions(apiOptions, options, []);

        return this.apiCall(apiOptions, ResponseClass);

    }

    public listLocations(options?:{
        'orderBy'?:IListLocationsOrderBy; // Sorts results by the specified property. The default value is 'City', collection: multi
        'page'?:number; // Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
        'perPage'?:number; // Indicates the page size (number of items). If not specified, the value is '100' by default.
        'stateId'?:string; // Internal identifier of a state
    }):Promise<getlocationlistresponse.GetLocationListResponse> {

        var apiOptions = {
                'url': '/restapi/v1.0/dictionary/location',
                'method': 'get'
            },
            ResponseClass = getlocationlistresponse.GetLocationListResponse;

        apiOptions = this.parseOptions(apiOptions, options, [
            {
                "name": "orderBy",
                "type": "IListLocationsOrderBy",
                "items": {
                    "type": "string"
                },
                "collectionFormat": "multi",
                "allowEmptyValue": true,
                "enum": [
                    "Npa",
                    "City"
                ],
                "in": "query",
                "description": "Sorts results by the specified property. The default value is 'City'",
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
                "name": "stateId",
                "type": "string",
                "in": "query",
                "description": "Internal identifier of a state",
                "required": false
            }
        ]);

        return this.apiCall(apiOptions, ResponseClass);

    }

}

export enum IListLocationsOrderBy {
    Npa = <any>'Npa',
    City = <any>'City'
}

export function $get(context:context.Context):Dictionary {
    return context.createSingleton('Dictionary', ()=> {
        return new Dictionary(context);
    });
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * [
 *     {
 *         "operationId": "listCountries",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Country List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the countries available for calling.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
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
 *                     "$ref": "#/definitions/GetCountryListResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/country",
 *         "method": "get",
 *         "responseSchema": "getcountrylistresponse.GetCountryListResponse",
 *         "imports": [
 *             "getcountrylistresponse.GetCountryListResponse"
 *         ]
 *     },
 *     {
 *         "operationId": "loadCountry",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Country",
 *         "description": "<p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns the information on the required country.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "countryId",
 *                 "type": "string",
 *                 "in": "path",
 *                 "description": "Internal identifier of a country",
 *                 "required": true
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/CountryInfo"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/country/{countryId}",
 *         "method": "get",
 *         "responseSchema": "countryinfo.CountryInfo",
 *         "imports": [
 *             "countryinfo.CountryInfo"
 *         ]
 *     },
 *     {
 *         "operationId": "listLanguages",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Language List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns the information about supported languages.</p><h4>Usage Plan Group</h4><p>Light</p>",
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
 *         "path": "/restapi/v1.0/dictionary/language",
 *         "method": "get",
 *         "responseSchema": ".",
 *         "imports": []
 *     },
 *     {
 *         "operationId": "loadLanguage",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Language",
 *         "description": "<p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns language by its respective ID.</p><h4>Usage Plan Group</h4><p>Light</p>",
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
 *                     "$ref": "#/definitions/LanguageInfo"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/language/{languageId}",
 *         "method": "get",
 *         "responseSchema": "languageinfo.LanguageInfo",
 *         "imports": [
 *             "languageinfo.LanguageInfo"
 *         ]
 *     },
 *     {
 *         "operationId": "listLocations",
 *         "tags": [
 *             "Dictionary"
 *         ],
 *         "summary": "Get Location List",
 *         "description": "<p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the available locations for the certain state.</p><h4>Usage Plan Group</h4><p>Light</p>",
 *         "consumes": [
 *             "application/json"
 *         ],
 *         "produces": [
 *             "application/json"
 *         ],
 *         "parameters": [
 *             {
 *                 "name": "orderBy",
 *                 "type": "IListLocationsOrderBy",
 *                 "items": {
 *                     "type": "string"
 *                 },
 *                 "collectionFormat": "multi",
 *                 "allowEmptyValue": true,
 *                 "enum": [
 *                     "Npa",
 *                     "City"
 *                 ],
 *                 "in": "query",
 *                 "description": "Sorts results by the specified property. The default value is 'City'",
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
 *                 "name": "stateId",
 *                 "type": "string",
 *                 "in": "query",
 *                 "description": "Internal identifier of a state",
 *                 "required": false
 *             }
 *         ],
 *         "responses": {
 *             "200": {
 *                 "description": "Success",
 *                 "schema": {
 *                     "$ref": "#/definitions/GetLocationListResponse"
 *                 }
 *             }
 *         },
 *         "path": "/restapi/v1.0/dictionary/location",
 *         "method": "get",
 *         "responseSchema": "getlocationlistresponse.GetLocationListResponse",
 *         "imports": [
 *             "getlocationlistresponse.GetLocationListResponse"
 *         ]
 *     }
 * ]
 */