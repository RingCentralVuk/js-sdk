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

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "TargetServicePlanInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a target service plan",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Name of a target service plan",
 *             "$name": "name",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */