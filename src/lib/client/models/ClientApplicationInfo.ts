import model = require('../Model');

export class ClientApplicationInfo extends model.Model {

    /**
     * 'true', if the server succeeded detecting application info, sufficient to return provisioning info
     */
    public detected:boolean;

    /**
     * The value of 'User-Agent' header, as it was passed in request
     */
    public userAgent:string;

    /**
     * Application identifier (from authorisation session)
     */
    public appId:string;

    /**
     * Application name (from authorization session, but must match 'User-Agent')
     */
    public appName:string;

    /**
     * Application version (parsed from 'User-Agent')
     */
    public appVersion:string;

    /**
     * Application platform operation system (parsed from 'User-Agent': Windows, MacOS, Android, iOS
     */
    public appPlatform:string;

    /**
     * Application platform operation system version (parsed from 'User-Agent')
     */
    public appPlatformVersion:string;

    /**
     * Locale, parsed from 'Accept-Language'. Currently en-GB and en-US locales are supported. The default value is en-US
     */
    public locale:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'detected', Class: null /* boolean */, isArray: false,isRequired: true},
            {property: 'userAgent', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'appId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'appName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'appVersion', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'appPlatform', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'appPlatformVersion', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'locale', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ClientApplicationInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientApplicationInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "boolean",
 *             "description": "'true', if the server succeeded detecting application info, sufficient to return provisioning info",
 *             "$name": "detected",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "string",
 *             "description": "The value of 'User-Agent' header, as it was passed in request",
 *             "$name": "userAgent",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application identifier (from authorisation session)",
 *             "$name": "appId",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application name (from authorization session, but must match 'User-Agent')",
 *             "$name": "appName",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application version (parsed from 'User-Agent')",
 *             "$name": "appVersion",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application platform operation system (parsed from 'User-Agent': Windows, MacOS, Android, iOS",
 *             "$name": "appPlatform",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Application platform operation system version (parsed from 'User-Agent')",
 *             "$name": "appPlatformVersion",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Locale, parsed from 'Accept-Language'. Currently en-GB and en-US locales are supported. The default value is en-US",
 *             "$name": "locale",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */