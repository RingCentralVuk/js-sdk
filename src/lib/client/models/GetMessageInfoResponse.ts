import model = require('../Model');
import messageattachmentinfo = require('./MessageAttachmentInfo');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class GetMessageInfoResponse extends model.Model {

    /**
     * Internal identifier of a message
     */
    public id:string;

    /**
     * Canonical URI of a message
     */
    public uri:string;

    public attachments:messageattachmentinfo.MessageAttachmentInfo[];

    /**
     * Message availability status. Message in 'Deleted' state is still preserved with all its attachments and can be restored. 'Purged' means that all attachments are already deleted and the message itself is about to be physically deleted shortly
     */
    public availability:GetMessageInfoResponseAvailability;

    /**
     * SMS and Pager only. Identifier of the conversation the message belongs to
     */
    public conversationId:number;

    /**
     * Message creation timestamp
     */
    public creationTime:Date;

    /**
     * SMS only. Delivery error code returned by gateway
     */
    public deliveryErrorCode:string;

    /**
     * Message direction. Note that for some message types not all directions are allowed. For example voicemail messages can be only inbound
     */
    public direction:GetMessageInfoResponseDirection;

    /**
     * Fax only. Page count in fax message
     */
    public faxPageCount:number;

    /**
     * Fax only. Resolution of fax message. ('High' for black and white image scanned at 200 dpi, 'Low' for black and white image scanned at 100 dpi)
     */
    public faxResolution:GetMessageInfoResponseFaxResolution;

    /**
     * Sender information
     */
    public from:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * The timestamp when the message was modified on server
     */
    public lastModifiedTime:Date;

    /**
     * Message status. Different message types may have different allowed status values.For outbound faxes the aggregated message status is returned: If status for at least one recipient is 'Queued', then 'Queued' value is returned If status for at least one recipient is 'SendingFailed', then 'SendingFailed' value is returned In other cases Sent status is returned
     */
    public messageStatus:GetMessageInfoResponseMessageStatus;

    /**
     * Pager only. True if at least one of the message recipients is Department extension
     */
    public pgToDepartment:boolean;

    /**
     * Message priority
     */
    public priority:GetMessageInfoResponsePriority;

    /**
     * Message read status
     */
    public readStatus:GetMessageInfoResponseReadStatus;

    /**
     * SMS only. The timestamp when outbound SMS was delivered to recipient's handset. It is filled only if the carrier sends a delivery receipt to RingCentral
     */
    public smsDeliveryTime:Date;

    /**
     * SMS only. Number of attempts made to send an outbound SMS to the gateway (if gateway is temporary unavailable)
     */
    public smsSendingAttemptsCount:number;

    /**
     * Message subject. For SMS and Pager messages it replicates message text which is also returned as an attachment
     */
    public subject:string;

    /**
     * Recipient information
     */
    public to:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Message type
     */
    public type:GetMessageInfoResponseType;

    /**
     * Voicemail only. Status of voicemail to text transcription. If VoicemailToText feature is not activated for account, the 'NotAvailable' value is returned
     */
    public vmTranscriptionStatus:GetMessageInfoResponseVmTranscriptionStatus;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'attachments', Class: messageattachmentinfo.MessageAttachmentInfo, isArray: true,isRequired: false},
            {property: 'availability', Class: GetMessageInfoResponseAvailability, isArray: false,isRequired: false},
            {property: 'conversationId', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'creationTime', Class: Date, isArray: false,isRequired: false},
            {property: 'deliveryErrorCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'direction', Class: GetMessageInfoResponseDirection, isArray: false,isRequired: false},
            {property: 'faxPageCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'faxResolution', Class: GetMessageInfoResponseFaxResolution, isArray: false,isRequired: false},
            {property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'lastModifiedTime', Class: Date, isArray: false,isRequired: false},
            {property: 'messageStatus', Class: GetMessageInfoResponseMessageStatus, isArray: false,isRequired: false},
            {property: 'pgToDepartment', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'priority', Class: GetMessageInfoResponsePriority, isArray: false,isRequired: false},
            {property: 'readStatus', Class: GetMessageInfoResponseReadStatus, isArray: false,isRequired: false},
            {property: 'smsDeliveryTime', Class: Date, isArray: false,isRequired: false},
            {property: 'smsSendingAttemptsCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'subject', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'type', Class: GetMessageInfoResponseType, isArray: false,isRequired: false},
            {property: 'vmTranscriptionStatus', Class: GetMessageInfoResponseVmTranscriptionStatus, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetMessageInfoResponse';
    }

}

export enum GetMessageInfoResponseAvailability {
    Alive = <any>'Alive',
    Deleted = <any>'Deleted',
    Purged = <any>'Purged'
}

export enum GetMessageInfoResponseDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum GetMessageInfoResponseFaxResolution {
    High = <any>'High',
    Low = <any>'Low'
}

export enum GetMessageInfoResponseMessageStatus {
    Queued = <any>'Queued',
    Sent = <any>'Sent',
    Delivered = <any>'Delivered',
    DeliveryFailed = <any>'DeliveryFailed',
    SendingFailed = <any>'SendingFailed',
    Received = <any>'Received'
}

export enum GetMessageInfoResponsePriority {
    Normal = <any>'Normal',
    High = <any>'High'
}

export enum GetMessageInfoResponseReadStatus {
    Read = <any>'Read',
    Unread = <any>'Unread'
}

export enum GetMessageInfoResponseType {
    Fax = <any>'Fax',
    SMS = <any>'SMS',
    VoiceMail = <any>'VoiceMail',
    Pager = <any>'Pager',
    Text = <any>'Text'
}

export enum GetMessageInfoResponseVmTranscriptionStatus {
    NotAvailable = <any>'NotAvailable',
    InProgress = <any>'InProgress',
    TimedOut = <any>'TimedOut',
    Completed = <any>'Completed',
    CompletedPartially = <any>'CompletedPartially',
    Failed = <any>'Failed'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetMessageInfoResponse",
 *     "imports": [
 *         "messageattachmentinfo.MessageAttachmentInfo",
 *         "messagestorecallerinfo.MessageStoreCallerInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a message",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a message",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "messageattachmentinfo.MessageAttachmentInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/MessageAttachmentInfo"
 *             },
 *             "$name": "attachments",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseAvailability",
 *             "enum": [
 *                 "Alive",
 *                 "Deleted",
 *                 "Purged"
 *             ],
 *             "description": "Message availability status. Message in 'Deleted' state is still preserved with all its attachments and can be restored. 'Purged' means that all attachments are already deleted and the message itself is about to be physically deleted shortly",
 *             "$name": "availability",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "SMS and Pager only. Identifier of the conversation the message belongs to",
 *             "$name": "conversationId",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Message creation timestamp",
 *             "$name": "creationTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "SMS only. Delivery error code returned by gateway",
 *             "$name": "deliveryErrorCode",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseDirection",
 *             "enum": [
 *                 "Inbound",
 *                 "Outbound"
 *             ],
 *             "description": "Message direction. Note that for some message types not all directions are allowed. For example voicemail messages can be only inbound",
 *             "$name": "direction",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Fax only. Page count in fax message",
 *             "$name": "faxPageCount",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseFaxResolution",
 *             "enum": [
 *                 "High",
 *                 "Low"
 *             ],
 *             "description": "Fax only. Resolution of fax message. ('High' for black and white image scanned at 200 dpi, 'Low' for black and white image scanned at 100 dpi)",
 *             "$name": "faxResolution",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Sender information",
 *             "$name": "from",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         },
 *         {
 *             "type": "Date",
 *             "description": "The timestamp when the message was modified on server",
 *             "$name": "lastModifiedTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseMessageStatus",
 *             "enum": [
 *                 "Queued",
 *                 "Sent",
 *                 "Delivered",
 *                 "DeliveryFailed",
 *                 "SendingFailed",
 *                 "Received"
 *             ],
 *             "description": "Message status. Different message types may have different allowed status values.For outbound faxes the aggregated message status is returned: If status for at least one recipient is 'Queued', then 'Queued' value is returned If status for at least one recipient is 'SendingFailed', then 'SendingFailed' value is returned In other cases Sent status is returned",
 *             "$name": "messageStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "Pager only. True if at least one of the message recipients is Department extension",
 *             "$name": "pgToDepartment",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponsePriority",
 *             "enum": [
 *                 "Normal",
 *                 "High"
 *             ],
 *             "description": "Message priority",
 *             "$name": "priority",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseReadStatus",
 *             "enum": [
 *                 "Read",
 *                 "Unread"
 *             ],
 *             "description": "Message read status",
 *             "$name": "readStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "SMS only. The timestamp when outbound SMS was delivered to recipient's handset. It is filled only if the carrier sends a delivery receipt to RingCentral",
 *             "$name": "smsDeliveryTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "SMS only. Number of attempts made to send an outbound SMS to the gateway (if gateway is temporary unavailable)",
 *             "$name": "smsSendingAttemptsCount",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Message subject. For SMS and Pager messages it replicates message text which is also returned as an attachment",
 *             "$name": "subject",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/MessageStoreCallerInfo",
 *             "description": "Recipient information",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "messagestorecallerinfo.MessageStoreCallerInfo"
 *         },
 *         {
 *             "type": "GetMessageInfoResponseType",
 *             "enum": [
 *                 "Fax",
 *                 "SMS",
 *                 "VoiceMail",
 *                 "Pager",
 *                 "Text"
 *             ],
 *             "description": "Message type",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetMessageInfoResponseVmTranscriptionStatus",
 *             "enum": [
 *                 "NotAvailable",
 *                 "InProgress",
 *                 "TimedOut",
 *                 "Completed",
 *                 "CompletedPartially",
 *                 "Failed"
 *             ],
 *             "description": "Voicemail only. Status of voicemail to text transcription. If VoicemailToText feature is not activated for account, the 'NotAvailable' value is returned",
 *             "$name": "vmTranscriptionStatus",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */