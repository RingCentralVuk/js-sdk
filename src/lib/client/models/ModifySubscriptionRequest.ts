import model = require('../Model');

export class ModifySubscriptionRequest extends model.Model {

    /**
     * Collection of URIs to API resources (see Event Types). Mandatory field
     */
    public eventFilters:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'eventFilters', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ModifySubscriptionRequest';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ModifySubscriptionRequest",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Collection of URIs to API resources (see Event Types). Mandatory field",
 *             "$name": "eventFilters",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */