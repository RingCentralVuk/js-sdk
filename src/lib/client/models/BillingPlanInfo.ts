import model = require('../Model');

export class BillingPlanInfo extends model.Model {

    /**
     * Internal identifier of a billing plan
     */
    public id:string;

    /**
     * Billing plan name
     */
    public name:string;

    /**
     * Duration period
     */
    public durationUnit:BillingPlanInfoDurationUnit;

    /**
     * Number of duration units
     */
    public duration:string;

    /**
     * Billing plan type
     */
    public type:BillingPlanInfoType;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'durationUnit', Class: BillingPlanInfoDurationUnit, isArray: false,isRequired: false},
            {property: 'duration', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: BillingPlanInfoType, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'BillingPlanInfo';
    }

}

export enum BillingPlanInfoDurationUnit {
    Month = <any>'Month',
    Day = <any>'Day'
}

export enum BillingPlanInfoType {
    Initial = <any>'Initial',
    Regular = <any>'Regular',
    Suspended = <any>'Suspended',
    Trial = <any>'Trial',
    TrialNoCC = <any>'TrialNoCC',
    Free = <any>'Free'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "BillingPlanInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a billing plan",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Billing plan name",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "BillingPlanInfoDurationUnit",
 *             "enum": [
 *                 "Month",
 *                 "Day"
 *             ],
 *             "description": "Duration period",
 *             "$name": "durationUnit",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Number of duration units",
 *             "$name": "duration",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "BillingPlanInfoType",
 *             "enum": [
 *                 "Initial",
 *                 "Regular",
 *                 "Suspended",
 *                 "Trial",
 *                 "TrialNoCC",
 *                 "Free"
 *             ],
 *             "description": "Billing plan type",
 *             "$name": "type",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */