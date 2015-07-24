import model = require('../Model');

export class DepartmentInfo extends model.Model {

    /**
     * Internal identifier of a department extension
     */
    public id:string;

    /**
     * Canonical URI of a department extension
     */
    public uri:string;

    /**
     * Number of a department extension
     */
    public extensionNumber:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'DepartmentInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}