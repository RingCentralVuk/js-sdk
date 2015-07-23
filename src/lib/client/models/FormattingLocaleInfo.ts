import model = require('../Model');

export class FormattingLocaleInfo extends model.Model {

    /**
     * Internal identifier of a formatting language
     */
    public id:string;

    /**
     * Localization code of a formatting language
     */
    public localeCode:string;

    /**
     * Official name of a formatting language
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
        return 'FormattingLocaleInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "FormattingLocaleInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a formatting language",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Localization code of a formatting language",
 *             "$name": "localeCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Official name of a formatting language",
 *             "$name": "name",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */