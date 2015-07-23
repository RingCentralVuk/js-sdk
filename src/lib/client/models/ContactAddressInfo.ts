import model = require('../Model');

export class ContactAddressInfo extends model.Model {

    /**
     * Country name of extension user company
     */
    public country:string;

    /**
     * State/province name of extension user company
     */
    public state:string;

    /**
     * City name of extension user company
     */
    public city:string;

    /**
     * Street address of extension user company
     */
    public street:string;

    /**
     * Zip code of extension user company
     */
    public zip:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'country', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'state', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'city', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'street', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'zip', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ContactAddressInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ContactAddressInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Country name of extension user company",
 *             "$name": "country",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "State/province name of extension user company",
 *             "$name": "state",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "City name of extension user company",
 *             "$name": "city",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Street address of extension user company",
 *             "$name": "street",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Zip code of extension user company",
 *             "$name": "zip",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */