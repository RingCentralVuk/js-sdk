/// <reference path="../../../typings/externals.d.ts" />

import context = require('../../core/Context');
import client = require('../Client');
import getsubscriptioninforesponse = require('../models/GetSubscriptionInfoResponse');
import createsubscriptionrequest = require('../models/CreateSubscriptionRequest');
import modifysubscriptionrequest = require('../models/ModifySubscriptionRequest');

export class NotificationsSubscriptionAPI extends client.Client {

    /**
     * Create Subscription
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Creates a new subscription. To call this method with APNS transport type you have to specify endpoint_id attribute in get token request at authorization.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    public create(options?:{
        /** JSON body */
        'body':createsubscriptionrequest.CreateSubscriptionRequest;
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        return this.apiCall(this.parseOptions('post', '/restapi/v1.0/subscription', options, createOptions),
                            getsubscriptioninforesponse.GetSubscriptionInfoResponse);

    }

    /**
     * Get Subscription
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Returns the requested subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    public load(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        return this.apiCall(this.parseOptions('get', '/restapi/v1.0/subscription/{subscriptionId}', options, loadOptions),
                            getsubscriptioninforesponse.GetSubscriptionInfoResponse);

    }

    /**
     * Renew Subscription / Modify Event Filters
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>With empty request body - renews the existent subscription. If event filters specified - modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame
     *     of one subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    public update(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
        /** JSON body */
        'body':modifysubscriptionrequest.ModifySubscriptionRequest;
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        return this.apiCall(this.parseOptions('put', '/restapi/v1.0/subscription/{subscriptionId}', options, updateOptions),
                            getsubscriptioninforesponse.GetSubscriptionInfoResponse);

    }

    /**
     * Cancel Subscription
     *
     * <p style='font-style:italic;'></p>
     * <p>Cancels the existent subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    public remove(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
    }):Promise<any> {

        return this.apiCall(this.parseOptions('delete', '/restapi/v1.0/subscription/{subscriptionId}', options, removeOptions),
                            null);

    }

}

/**
 * Definition of options for create operation
 */
export var createOptions:client.IOperationParameter[] = [
    {
        "name": "body",
        "type": "createsubscriptionrequest.CreateSubscriptionRequest",
        "in": "body",
        "required": true
    }
];

/**
 * Definition of options for load operation
 */
export var loadOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for update operation
 */
export var updateOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "type": "modifysubscriptionrequest.ModifySubscriptionRequest",
        "in": "body",
        "required": true
    }
];

/**
 * Definition of options for remove operation
 */
export var removeOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

export function $get(context:context.Context):NotificationsSubscriptionAPI {
    return context.createSingleton('NotificationsSubscriptionAPI', ()=> {
        return new NotificationsSubscriptionAPI(context);
    });
}