import model = require('../Model');

export class TargetServicePlanInfo extends model.Model {

    /**
     * Internal identifier of a target service plan
     */
    public id:string;

    /**
     * Name of a target service plan
     */
    public name:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'TargetServicePlanInfo';
    }

}