import model = require('../Model');

export class CreateSubscriptionRequest extends model.Model {

    /**
     * Mandatory. Collection of URIs to API resources (see Event Types for details). For APNS transport type only message event filter is available
     */
    public eventFilters:string;

    public deliveryMode:Collection of parameters[];

    /**
     * Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)
     */
    public transportType:CreateSubscriptionRequestTransportType;

    /**
     * Optional parameter. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'true' (even if specified as 'false'). If request contains only message event filters the value by default is 'false'
     */
    public encryption:CreateSubscriptionRequestEncryption;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'eventFilters', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'deliveryMode', Class: Collection of parameters, isArray: true,isRequired: true},
            {property: 'transportType', Class: CreateSubscriptionRequestTransportType, isArray: false,isRequired: false},
            {property: 'encryption', Class: CreateSubscriptionRequestEncryption, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CreateSubscriptionRequest';
    }

}

export enum CreateSubscriptionRequestTransportType {
    PubNub = <any>'PubNub',
    APNS = <any>'APNS'
}

export enum CreateSubscriptionRequestEncryption {
    True = <any>'True',
    False = <any>'False'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CreateSubscriptionRequest",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Mandatory. Collection of URIs to API resources (see Event Types for details). For APNS transport type only message event filter is available",
 *             "$name": "eventFilters",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Collection of parameters[]",
 *             "items": {
 *                 "type": "Collection of parameters"
 *             },
 *             "$name": "deliveryMode",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "CreateSubscriptionRequestTransportType",
 *             "enum": [
 *                 "PubNub",
 *                 "APNS"
 *             ],
 *             "description": "Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)",
 *             "$name": "transportType",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CreateSubscriptionRequestEncryption",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "Optional parameter. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'true' (even if specified as 'false'). If request contains only message event filters the value by default is 'false'",
 *             "$name": "encryption",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */