import model = require('../Model');
import notificationdeliverymode = require('./NotificationDeliveryMode');

export class GetSubscriptionInfoResponse extends model.Model {

    /**
     * Internal identifier of a subscription
     */
    public id:string;

    /**
     * Canonical URI of a subscription
     */
    public uri:string;

    /**
     * Collection of URIs to API resources (message-store/presence/detailed presence)
     */
    public eventFilters:string[];

    /**
     * Subscription expiration time
     */
    public expirationTime:string;

    /**
     * Subscription lifetime in seconds. The default value is 900
     */
    public expiresIn:number;

    /**
     * Subscription status
     */
    public status:GetSubscriptionInfoResponseStatus;

    /**
     * Subscription creation time
     */
    public creationTime:string;

    /**
     * Delivery mode data
     */
    public deliveryMode:notificationdeliverymode.NotificationDeliveryMode;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'eventFilters', Class: null /* string[] */, isArray: true,isRequired: false},
            {property: 'expirationTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'expiresIn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'status', Class: GetSubscriptionInfoResponseStatus, isArray: false,isRequired: false},
            {property: 'creationTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'deliveryMode', Class: notificationdeliverymode.NotificationDeliveryMode, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'GetSubscriptionInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum GetSubscriptionInfoResponseStatus {
    Active = <any>'Active',
    Suspended = <any>'Suspended'
}