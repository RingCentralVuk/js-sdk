import model = require('../Model');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class CreateFaxMessageRequest extends model.Model {

    /**
     * Recipient information. Phone number property is mandatory. Optional for resend fax request
     */
    public to:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Fax resolution
     */
    public resolution:CreateFaxMessageRequestResolution;

    /**
     * Optional. Timestamp to send fax at. If not specified (current or the past), the fax is sent immediately
     */
    public sendTime:Date;

    /**
     * Optional. Cover page index. If not specified, the default cover page which is configured in  Outbound Fax Settings  is attached. See also 'Available Cover Pages' table below
     */
    public coverIndex:integer (0-16);

    /**
     * Optional. Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
     */
    public coverPageText:string;

    /**
     * Internal identifier of the original fax message which needs to be resent. Supported for resend fax request
     */
    public originalMessageId:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'resolution', Class: CreateFaxMessageRequestResolution, isArray: false,isRequired: false},
            {property: 'sendTime', Class: Date, isArray: false,isRequired: false},
            {property: 'coverIndex', Class: integer (0-16), isArray: false,isRequired: false},
            {property: 'coverPageText', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'originalMessageId', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CreateFaxMessageRequest';
    }

}

export enum CreateFaxMessageRequestResolution {
    High = <any>'High',
    Low = <any>'Low'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CreateFaxMessageRequest",
 *     "imports": [
 *         "messagestorecallerinfo.MessageStoreCallerInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Recipient information. Phone number property is mandatory. Optional for resend fax request",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         },
 *         {
 *             "type": "CreateFaxMessageRequestResolution",
 *             "enum": [
 *                 "High",
 *                 "Low"
 *             ],
 *             "description": "Fax resolution",
 *             "$name": "resolution",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Optional. Timestamp to send fax at. If not specified (current or the past), the fax is sent immediately",
 *             "$name": "sendTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "integer (0-16)",
 *             "description": "Optional. Cover page index. If not specified, the default cover page which is configured in  Outbound Fax Settings  is attached. See also 'Available Cover Pages' table below",
 *             "$name": "coverIndex",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Optional. Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols",
 *             "$name": "coverPageText",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of the original fax message which needs to be resent. Supported for resend fax request",
 *             "$name": "originalMessageId",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */