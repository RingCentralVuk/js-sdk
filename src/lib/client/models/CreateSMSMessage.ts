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
            {property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'text', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CreateSMSMessage';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CreateSMSMessage",
 *     "imports": [
 *         "messagestorecallerinfo.MessageStoreCallerInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Sender of SMS message. The phoneNumber property must be filled to correspond to one of the account phone numbers which is allowed for given extension to send SMS from",
 *             "$name": "from",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Receiver of SMS message. The phoneNumber property must be filled",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         },
 *         {
 *             "type": "string",
 *             "description": "Text of SMS message",
 *             "$name": "text",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */