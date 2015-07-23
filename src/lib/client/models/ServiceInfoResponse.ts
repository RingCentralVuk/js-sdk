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