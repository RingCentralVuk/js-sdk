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

    // CUSTOM METHODS
    // CUSTOM METHODS

}