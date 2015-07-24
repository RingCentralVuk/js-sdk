import model = require('../Model');

export class GetStateInfoResponse extends model.Model {

    /**
     * Internal identifier of a state
     */
    public id:string;

    /**
     * Canonical URI of a state
     */
    public uri:string;

    /**
     * ID and URI of the country the state is in, as a part of the Country Info
     */
    public country:string;

    /**
     * Short code for a state (2-letter usually)
     */
    public isoCode:string;

    /**
     * Official name of a state
     */
    public name:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'country', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'isoCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetStateInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}