import model = require('../Model');
import versioninfo = require('./VersionInfo');

export class GetVersionsResponse extends model.Model {

    /**
     * Сanonical URI of the API version
     */
    public uri:string;

    public apiVersions:versioninfo.VersionInfo[];

    /**
     * Server version
     */
    public serverVersion:string;

    /**
     * Server revision
     */
    public serverRevision:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'apiVersions', Class: versioninfo.VersionInfo, isArray: true,isRequired: false},
            {property: 'serverVersion', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serverRevision', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetVersionsResponse';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetVersionsResponse",
 *     "imports": [
 *         "versioninfo.VersionInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Сanonical URI of the API version",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "versioninfo.VersionInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/VersionInfo"
 *             },
 *             "$name": "apiVersions",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Server version",
 *             "$name": "serverVersion",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Server revision",
 *             "$name": "serverRevision",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */