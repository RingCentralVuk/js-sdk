import model = require('../Model');

export class NavigationInfo extends model.Model {

    /**
     * Canonical URI for the first page of the list
     */
    public firstPage:string;

    /**
     * Canonical URI for the next page of the list
     */
    public nextPage:string;

    /**
     * Canonical URI for the previous page of the list
     */
    public previousPage:string;

    /**
     * Canonical URI for the last page of the list
     */
    public lastPage:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'firstPage', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'nextPage', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'previousPage', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lastPage', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'NavigationInfo';
    }

}