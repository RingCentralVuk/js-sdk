import model = require('../Model');

export class TimezoneInfo extends model.Model {

    /**
     * Internal identifier of a timezone
     */
    public id:string;

    /**
     * Canonical URI of a timezone
     */
    public uri:string;

    /**
     * Short name of a timezone
     */
    public name:string;

    /**
     * Meaningful description of the timezone
     */
    public description:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'description', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'TimezoneInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "TimezoneInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a timezone",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a timezone",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Short name of a timezone",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Meaningful description of the timezone",
 *             "$name": "description",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */