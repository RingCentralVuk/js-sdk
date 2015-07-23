import model = require('../Model');

export class NotificationDeliveryMode extends model.Model {

    /**
     * Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)
     */
    public transportType:NotificationDeliveryModeTransportType;

    /**
     * Optional parameter. Specifies if the message will be encrypted or not. For APNS transport type the value is always  false 
     */
    public encryption:NotificationDeliveryModeEncryption;

    /**
     * PubNub channel name. For APNS transport type - internal identifier of a device  device_token 
     */
    public address:string;

    /**
     * PubNub subscriber credentials required to subscribe to the channel
     */
    public subscriberKey:string;

    /**
     * PubNub subscriber credentials required to subscribe to the channel. Optional (for PubNub transport type only)
     */
    public secretKey:string;

    /**
     * Encryption algorithm 'AES' (for PubNub transport type only)
     */
    public encryptionAlgorithm:string;

    /**
     * Key for notification message decryption (for PubNub transport type only)
     */
    public encryptionKey:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'transportType', Class: NotificationDeliveryModeTransportType, isArray: false,isRequired: false},
            {property: 'encryption', Class: NotificationDeliveryModeEncryption, isArray: false,isRequired: false},
            {property: 'address', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'subscriberKey', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'secretKey', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'encryptionAlgorithm', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'encryptionKey', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'NotificationDeliveryMode';
    }

}

export enum NotificationDeliveryModeTransportType {
    PubNub = <any>'PubNub',
    APNS = <any>'APNS'
}

export enum NotificationDeliveryModeEncryption {
    True = <any>'True',
    False = <any>'False'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "NotificationDeliveryMode",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "NotificationDeliveryModeTransportType",
 *             "enum": [
 *                 "PubNub",
 *                 "APNS"
 *             ],
 *             "description": "Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)",
 *             "$name": "transportType",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "NotificationDeliveryModeEncryption",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "Optional parameter. Specifies if the message will be encrypted or not. For APNS transport type the value is always  false ",
 *             "$name": "encryption",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "PubNub channel name. For APNS transport type - internal identifier of a device  device_token ",
 *             "$name": "address",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "PubNub subscriber credentials required to subscribe to the channel",
 *             "$name": "subscriberKey",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "PubNub subscriber credentials required to subscribe to the channel. Optional (for PubNub transport type only)",
 *             "$name": "secretKey",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Encryption algorithm 'AES' (for PubNub transport type only)",
 *             "$name": "encryptionAlgorithm",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Key for notification message decryption (for PubNub transport type only)",
 *             "$name": "encryptionKey",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */