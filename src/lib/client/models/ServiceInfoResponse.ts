import model = require('../Model');
import billingplaninfo = require('./BillingPlanInfo');
import brandinfo = require('./BrandInfo');
import serviceplaninfo = require('./ServicePlanInfo');
import targetserviceplaninfo = require('./TargetServicePlanInfo');

export class ServiceInfoResponse extends model.Model {

    /**
     * Canonical URI of a service info resource
     */
    public uri:string;

    /**
     * Information on account billing plan
     */
    public billingPlan:billingplaninfo.BillingPlanInfo;

    /**
     * Information on account brand
     */
    public brand:brandinfo.BrandInfo;

    /**
     * Information on account service plan
     */
    public servicePlan:serviceplaninfo.ServicePlanInfo;

    /**
     * Information on account target service plan
     */
    public targetServicePlan:targetserviceplaninfo.TargetServicePlanInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'billingPlan', Class: billingplaninfo.BillingPlanInfo, isArray: false,isRequired: false},
            {property: 'brand', Class: brandinfo.BrandInfo, isArray: false,isRequired: false},
            {property: 'servicePlan', Class: serviceplaninfo.ServicePlanInfo, isArray: false,isRequired: false},
            {property: 'targetServicePlan', Class: targetserviceplaninfo.TargetServicePlanInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ServiceInfoResponse';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ServiceInfoResponse",
 *     "imports": [
 *         "billingplaninfo.BillingPlanInfo",
 *         "brandinfo.BrandInfo",
 *         "serviceplaninfo.ServicePlanInfo",
 *         "targetserviceplaninfo.TargetServicePlanInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a service info resource",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/BillingPlanInfo",
 *             "description": "Information on account billing plan",
 *             "$name": "billingPlan",
 *             "isRequired": false,
 *             "type": "billingplaninfo.BillingPlanInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/BrandInfo",
 *             "description": "Information on account brand",
 *             "$name": "brand",
 *             "isRequired": false,
 *             "type": "brandinfo.BrandInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ServicePlanInfo",
 *             "description": "Information on account service plan",
 *             "$name": "servicePlan",
 *             "isRequired": false,
 *             "type": "serviceplaninfo.ServicePlanInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/TargetServicePlanInfo",
 *             "description": "Information on account target service plan",
 *             "$name": "targetServicePlan",
 *             "isRequired": false,
 *             "type": "targetserviceplaninfo.TargetServicePlanInfo"
 *         }
 *     ]
 * }
 */