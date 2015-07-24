import model = require('../Model');

export class ModifySubscriptionRequest extends model.Model {

    /**
     * Collection of URIs to API resources (see Event Types). Mandatory field
     */
    public eventFilters:string[];

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'eventFilters', Class: null /* string[] */, isArray: true,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ModifySubscriptionRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}