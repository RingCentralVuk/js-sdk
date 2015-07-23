import model = require('../Model');

export class GetTimezoneInfoResponse extends model.Model {

    /**
     * Internal identifier of a timezone
     */
    public id:string;

    /**
     * Canonical URI of the timezone
     */
    public uri:string;

    /**
     * Short name of the timezone
     */
    public name:string;

    /**
     * Description of the timezone
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
        return 'GetTimezoneInfoResponse';
    }

}