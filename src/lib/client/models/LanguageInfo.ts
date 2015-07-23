import model = require('../Model');

export class LanguageInfo extends model.Model {

    /**
     * Internal identifier of a language
     */
    public id:string;

    /**
     * Canonical URI of a language
     */
    public uri:string;

    /**
     * Indicates whether a language is available as greeting language
     */
    public greeting:boolean;

    /**
     * Indicates whether a language is available as formatting locale
     */
    public formattingLocale:boolean;

    /**
     * Localization code of a language
     */
    public localeCode:string;

    /**
     * Official name of a language
     */
    public name:string;

    /**
     * Indicates whether a language is available as UI language
     */
    public ui:boolean;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'greeting', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'formattingLocale', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'localeCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'ui', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'LanguageInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "LanguageInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a language",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a language",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "Indicates whether a language is available as greeting language",
 *             "$name": "greeting",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "Indicates whether a language is available as formatting locale",
 *             "$name": "formattingLocale",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Localization code of a language",
 *             "$name": "localeCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Official name of a language",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "Indicates whether a language is available as UI language",
 *             "$name": "ui",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */