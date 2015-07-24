import model = require('../Model');

export class NotificationDeliveryModeRequest extends model.Model {

    /**
     * Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)
     */
    public transportType:NotificationDeliveryModeRequestTransportType;

    /**
     * Optional parameter. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'true' (even if specified as 'false'). If request contains only message event filters the value by default is 'false'
     */
    public encryption:boolean;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'transportType', Class: NotificationDeliveryModeRequestTransportType, isArray: false,isRequired: false},
            {property: 'encryption', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'NotificationDeliveryModeRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum NotificationDeliveryModeRequestTransportType {
    PubNub = <any>'PubNub',
    APNS = <any>'APNS'
}