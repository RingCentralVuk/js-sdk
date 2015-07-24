import model = require('../Model');

export class GetVersionResponse extends model.Model {

    /**
     * Canonical URI of the version info resource
     */
    public uri:string;

    /**
     * Version of the RingCentral REST API
     */
    public versionString:string;

    /**
     * Release date of this version
     */
    public releaseDate:string;

    /**
     * URI part determining the current version
     */
    public uriString:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'versionString', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'releaseDate', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uriString', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetVersionResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}