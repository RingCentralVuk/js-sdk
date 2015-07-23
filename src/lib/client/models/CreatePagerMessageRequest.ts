import model = require('../Model');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class CreatePagerMessageRequest extends model.Model {

    /**
     * Sender of pager message. The extensionNumber property must be filled
     */
    public from:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Optional. ID of a message this message replies to
     */
    public replyOn:number;

    /**
     * Text of pager message
     */
    public text:string;

    /**
     * Receiver of pager message. The extensionNumber property must be filled
     */
    public to:messagestorecallerinfo.MessageStoreCallerInfo;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'replyOn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'text', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'CreatePagerMessageRequest';
    }

}