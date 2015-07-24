import model = require('../Model');

export class NotificationDeliveryMode extends model.Model {

    /**
     * Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)
     */
    public transportType:NotificationDeliveryModeTransportType;

    /**
     * Optional parameter. Specifies if the message will be encrypted or not. For APNS transport type the value is always  false 
     */
    public encryption:boolean;

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
            {property: 'encryption', Class: null /* boolean */, isArray: false,isRequired: false},
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

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum NotificationDeliveryModeTransportType {
    PubNub = <any>'PubNub',
    APNS = <any>'APNS'
}