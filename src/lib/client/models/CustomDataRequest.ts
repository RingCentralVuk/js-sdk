import model = require('../Model');

export class CustomDataRequest extends model.Model {

    /**
     * Custom data access key. Optional. If specified, must match the custom key in the URL
     */
    public id:string;

    /**
     * Description of custom data. Mandatory for create, if there is no attachment specified. Maximum length is limited to 256 symbols
     */
    public value:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'value', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CustomDataRequest';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CustomDataRequest",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Custom data access key. Optional. If specified, must match the custom key in the URL",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Description of custom data. Mandatory for create, if there is no attachment specified. Maximum length is limited to 256 symbols",
 *             "$name": "value",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */