import model = require('../Model');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class CreateSMSMessage extends model.Model {

    /**
     * Sender of SMS message. The phoneNumber property must be filled to correspond to one of the account phone numbers which is allowed for given extension to send SMS from
     */
    public from:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Receiver of SMS message. The phoneNumber property must be filled
     */
    public to:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Text of SMS message
     */
    public text:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: true},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: true},
            {property: 'text', Class: null /* string */, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'CreateSMSMessage';
    }

}