import model = require('../Model');

export class MessageStoreCallerInfo extends model.Model {

    /**
     * Extension short number (usually 3 or 4 digits). This property is filled when parties communicate by means of short internal numbers, for example when calling to other extension or sending/receiving Company Pager message
     */
    public extensionNumber:string;

    /**
     * Contains party location (city, state) if one can be determined from phoneNumber. This property is filled only when phoneNumber is not empty and server can calculate location information from it (for example, this information is unavailable for US toll-free numbers)
     */
    public location:string;

    /**
     * Status of a message. Returned for outbound fax messages only
     */
    public messageStatus:MessageStoreCallerInfoMessageStatus;

    /**
     * Symbolic name associated with a party. If the phone does not belong to the known extension, only the location is returned, the name is not determined then
     */
    public name:string;

    /**
     * Phone number of a party. Usually it is a plain number including country and area code like 18661234567. But sometimes it could be returned from database with some formatting applied, for example (866)123-4567. This property is filled in all cases where parties communicate by means of global phone numbers, for example when calling to direct numbers or sending/receiving SMS
     */
    public phoneNumber:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'location', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'messageStatus', Class: MessageStoreCallerInfoMessageStatus, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'MessageStoreCallerInfo';
    }

}

export enum MessageStoreCallerInfoMessageStatus {
    Queued = <any>'Queued',
    Sent = <any>'Sent',
    Delivered = <any>'Delivered',
    DeliveryFailed = <any>'DeliveryFailed',
    SendingFailed = <any>'SendingFailed',
    Received = <any>'Received'
}