import model = require('../Model');

export class ExtensionServiceFeatureInfo extends model.Model {

    /**
     * Feature status; shows feature availability for an extension
     */
    public enabled:boolean;

    /**
     * Feature name, see all available values in Service Feature List
     */
    public featureName:string;

    /**
     * Reason of limitation for a particular service feature. Returned only if the enabled parameter value is 'False', see Service Feature Limitations and Reasons. When retrieving service features for an extension, the reasons for the limitations, if any, are returned in response
     */
    public reason:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'enabled', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'featureName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reason', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ExtensionServiceFeatureInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionServiceFeatureInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "boolean",
 *             "description": "Feature status; shows feature availability for an extension",
 *             "$name": "enabled",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Feature name, see all available values in Service Feature List",
 *             "$name": "featureName",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Reason of limitation for a particular service feature. Returned only if the enabled parameter value is 'False', see Service Feature Limitations and Reasons. When retrieving service features for an extension, the reasons for the limitations, if any, are returned in response",
 *             "$name": "reason",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */