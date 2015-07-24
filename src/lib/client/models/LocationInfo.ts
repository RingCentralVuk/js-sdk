import model = require('../Model');

export class LocationInfo extends model.Model {

    /**
     * Canonical URI of a location
     */
    public uri:string;

    /**
     * Official name of the city, belonging to the certain state
     */
    public city:string;

    /**
     * Area code of the location (3-digit usually), according to the NANP number format, that can be summarized as NPA-NXX-xxxx and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See for details North American Numbering Plan
     */
    public npa:string;

    /**
     * Central office code of the location, according to the NANP number format, that can be summarized as NPA-NXX-xxxx and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See for details North American Numbering Plan
     */
    public nxx:string;

    /**
     * ID and URI of the state this location belongs to, see State Info
     */
    public state:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'city', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'npa', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'nxx', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'state', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'LocationInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}