import model = require('../Model');

export class GreetingLanguageInfo extends model.Model {

    /**
     * Internal identifier of a greeting language
     */
    public id:string;

    /**
     * Localization code of a greeting language
     */
    public localeCode:string;

    /**
     * Official name of a greeting language
     */
    public name:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'localeCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GreetingLanguageInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GreetingLanguageInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a greeting language",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Localization code of a greeting language",
 *             "$name": "localeCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Official name of a greeting language",
 *             "$name": "name",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */