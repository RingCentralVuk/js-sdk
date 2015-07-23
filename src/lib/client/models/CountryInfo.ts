import model = require('../Model');

export class CountryInfo extends model.Model {

    /**
     * Internal identifier of a home country
     */
    public id:string;

    /**
     * Home country URI
     */
    public uri:string;

    /**
     * Home country calling code defined by ITU-T recommendations E.123 and E.164, see Calling Codes
     */
    public callingCode:string;

    /**
     * Home country code according to the ISO standard, see ISO 3166
     */
    public isoCode:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'callingCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'isoCode', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CountryInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CountryInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a home country",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Home country URI",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Home country calling code defined by ITU-T recommendations E.123 and E.164, see Calling Codes",
 *             "$name": "callingCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Home country code according to the ISO standard, see ISO 3166",
 *             "$name": "isoCode",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */