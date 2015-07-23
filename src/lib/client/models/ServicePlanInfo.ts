import model = require('../Model');

export class ServicePlanInfo extends model.Model {

    /**
     * Internal identifier of a service plan
     */
    public id:string;

    /**
     * Name of a service plan
     */
    public name:string;

    /**
     * Edition of a service plan
     */
    public edition:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'edition', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ServicePlanInfo';
    }

}