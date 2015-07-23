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

    public eventFilters:string[];

    /**
     * Subscription expiration time
     */
    public expirationTime:Date;

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
    public creationTime:Date;

    /**
     * Delivery mode data
     */
    public deliveryMode:notificationdeliverymode.NotificationDeliveryMode;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'eventFilters', Class: null /* string[] */, isArray: true,isRequired: false},
            {property: 'expirationTime', Class: Date, isArray: false,isRequired: false},
            {property: 'expiresIn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'status', Class: GetSubscriptionInfoResponseStatus, isArray: false,isRequired: false},
            {property: 'creationTime', Class: Date, isArray: false,isRequired: false},
            {property: 'deliveryMode', Class: notificationdeliverymode.NotificationDeliveryMode, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'GetSubscriptionInfoResponse';
    }

}

export enum GetSubscriptionInfoResponseStatus {
    Active = <any>'Active',
    Suspended = <any>'Suspended'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetSubscriptionInfoResponse",
 *     "imports": [
 *         "notificationdeliverymode.NotificationDeliveryMode"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a subscription",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a subscription",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string[]",
 *             "items": {
 *                 "type": "string",
 *                 "description": "Collection of string"
 *             },
 *             "$name": "eventFilters",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Subscription expiration time",
 *             "$name": "expirationTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Subscription lifetime in seconds. The default value is 900",
 *             "$name": "expiresIn",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetSubscriptionInfoResponseStatus",
 *             "enum": [
 *                 "Active",
 *                 "Suspended"
 *             ],
 *             "description": "Subscription status",
 *             "$name": "status",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Subscription creation time",
 *             "$name": "creationTime",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/NotificationDeliveryMode",
 *             "description": "Delivery mode data",
 *             "$name": "deliveryMode",
 *             "isRequired": true,
 *             "type": "notificationdeliverymode.NotificationDeliveryMode"
 *         }
 *     ]
 * }
 */