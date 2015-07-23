import model = require('../Model');

export class GetPresenceExtensionInfo extends model.Model {

    /**
     * Internal identifier of an extension
     */
    public id:string;

    /**
     * Canonical URI of an extension
     */
    public uri:string;

    /**
     * Extension number (usually 3 or 4 digits)
     */
    public extensionNumber:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetPresenceExtensionInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetPresenceExtensionInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of an extension",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of an extension",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Extension number (usually 3 or 4 digits)",
 *             "$name": "extensionNumber",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */