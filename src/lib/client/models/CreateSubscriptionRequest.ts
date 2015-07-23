import model = require('../Model');
import notificationdeliverymoderequest = require('./NotificationDeliveryModeRequest');

export class CreateSubscriptionRequest extends model.Model {

    /**
     * Mandatory. Collection of URIs to API resources (see Event Types for details). For APNS transport type only message event filter is available
     */
    public eventFilters:string;

    /**
     * Notification delivery settings
     */
    public deliveryMode:notificationdeliverymoderequest.NotificationDeliveryModeRequest;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'eventFilters', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'deliveryMode', Class: notificationdeliverymoderequest.NotificationDeliveryModeRequest, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'CreateSubscriptionRequest';
    }

}