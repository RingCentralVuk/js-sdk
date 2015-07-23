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
            {property: 'text', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CreatePagerMessageRequest';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CreatePagerMessageRequest",
 *     "imports": [
 *         "messagestorecallerinfo.MessageStoreCallerInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Sender of pager message. The extensionNumber property must be filled",
 *             "$name": "from",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         },
 *         {
 *             "type": "number",
 *             "description": "Optional. ID of a message this message replies to",
 *             "$name": "replyOn",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Text of pager message",
 *             "$name": "text",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Receiver of pager message. The extensionNumber property must be filled",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         }
 *     ]
 * }
 */