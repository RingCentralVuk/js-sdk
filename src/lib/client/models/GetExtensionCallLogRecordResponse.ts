import model = require('../Model');
import calllogcallerinfo = require('./CallLogCallerInfo');
import recordinginfo = require('./RecordingInfo');

export class GetExtensionCallLogRecordResponse extends model.Model {

    /**
     * Internal identifier of a cal log record
     */
    public id:string;

    /**
     * Canonical URI of a call log record
     */
    public uri:string;

    /**
     * Internal identifier of a call session
     */
    public sessionId:string;

    /**
     * Caller information
     */
    public from:calllogcallerinfo.CallLogCallerInfo;

    /**
     * Callee information
     */
    public to:calllogcallerinfo.CallLogCallerInfo;

    /**
     * Call type
     */
    public type:GetExtensionCallLogRecordResponseType;

    /**
     * Call direction
     */
    public direction:GetExtensionCallLogRecordResponseDirection;

    /**
     * Action description of the call operation.
     */
    public action:GetExtensionCallLogRecordResponseAction;

    /**
     * Status description of the call operation.
     */
    public result:GetExtensionCallLogRecordResponseResult;

    /**
     * Call start time
     */
    public startTime:Date;

    /**
     * Call duration in seconds
     */
    public duration:number;

    /**
     * Call recording data. Returned if the call is recorded
     */
    public recording:recordinginfo.RecordingInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'sessionId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false,isRequired: false},
            {property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false,isRequired: false},
            {property: 'type', Class: GetExtensionCallLogRecordResponseType, isArray: false,isRequired: false},
            {property: 'direction', Class: GetExtensionCallLogRecordResponseDirection, isArray: false,isRequired: false},
            {property: 'action', Class: GetExtensionCallLogRecordResponseAction, isArray: false,isRequired: false},
            {property: 'result', Class: GetExtensionCallLogRecordResponseResult, isArray: false,isRequired: false},
            {property: 'startTime', Class: Date, isArray: false,isRequired: false},
            {property: 'duration', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetExtensionCallLogRecordResponse';
    }

}

export enum GetExtensionCallLogRecordResponseType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum GetExtensionCallLogRecordResponseDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum GetExtensionCallLogRecordResponseAction {
    Unknown = <any>'Unknown',
    PhoneCall = <any>'Phone Call',
    PhoneLogin = <any>'Phone Login',
    IncomingFax = <any>'Incoming Fax',
    AcceptCall = <any>'Accept Call',
    FindMe = <any>'FindMe',
    FollowMe = <any>'FollowMe',
    OutgoingFax = <any>'Outgoing Fax',
    CallReturn = <any>'Call Return',
    CallingCard = <any>'Calling Card',
    RingDirectly = <any>'Ring Directly',
    RingOutWeb = <any>'RingOut Web',
    VoIPCall = <any>'VoIP Call',
    RingOutPC = <any>'RingOut PC',
    RingMe = <any>'RingMe',
    Transfer = <any>'Transfer',
    '411Info' = <any>'411 Info',
    Emergency = <any>'Emergency',
    'E911Update' = <any>'E911 Update',
    Support = <any>'Support',
    RingOutMobile = <any>'RingOut Mobile'
}

export enum GetExtensionCallLogRecordResponseResult {
    Unknown = <any>'Unknown',
    ResultInProgress = <any>'ResultInProgress',
    Missed = <any>'Missed',
    Callaccepted = <any>'Call accepted',
    Voicemail = <any>'Voicemail',
    Rejected = <any>'Rejected',
    Reply = <any>'Reply',
    Received = <any>'Received',
    ReceiveError = <any>'Receive Error',
    FaxonDemand = <any>'Fax on Demand',
    PartialReceive = <any>'Partial Receive',
    Blocked = <any>'Blocked',
    'Callсonnected' = <any>'Call сonnected',
    NoAnswer = <any>'No Answer',
    Busy = <any>'Busy',
    SendError = <any>'Send Error',
    Sent = <any>'Sent',
    Nofaxmachine = <any>'No fax machine',
    ResultEmpty = <any>'ResultEmpty',
    Account = <any>'Account',
    Suspended = <any>'Suspended',
    CallFailed = <any>'Call Failed',
    CallFailure = <any>'Call Failure',
    InternalError = <any>'Internal Error',
    IPPhoneoffline = <any>'IP Phone offline',
    RestrictedNumber = <any>'Restricted Number',
    WrongNumber = <any>'Wrong Number',
    Stopped = <any>'Stopped',
    Hangup = <any>'Hang up',
    PoorLineQuality = <any>'Poor Line Quality',
    PartiallySent = <any>'Partially Sent',
    InternationalDisabled = <any>'International Disabled',
    InternationalRestriction = <any>'International Restriction',
    Abandoned = <any>'Abandoned',
    Declined = <any>'Declined',
    FaxReceiptError = <any>'Fax Receipt Error',
    FaxSendError = <any>'Fax Send Error'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetExtensionCallLogRecordResponse",
 *     "imports": [
 *         "calllogcallerinfo.CallLogCallerInfo",
 *         "recordinginfo.RecordingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a cal log record",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a call log record",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a call session",
 *             "$name": "sessionId",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/CallLogCallerInfo",
 *             "description": "Caller information",
 *             "$name": "from",
 *             "isRequired": false,
 *             "type": "calllogcallerinfo.CallLogCallerInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/CallLogCallerInfo",
 *             "description": "Callee information",
 *             "$name": "to",
 *             "isRequired": false,
 *             "type": "calllogcallerinfo.CallLogCallerInfo"
 *         },
 *         {
 *             "type": "GetExtensionCallLogRecordResponseType",
 *             "enum": [
 *                 "Voice",
 *                 "Fax"
 *             ],
 *             "description": "Call type",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionCallLogRecordResponseDirection",
 *             "enum": [
 *                 "Inbound",
 *                 "Outbound"
 *             ],
 *             "description": "Call direction",
 *             "$name": "direction",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionCallLogRecordResponseAction",
 *             "enum": [
 *                 "Unknown",
 *                 "Phone Call",
 *                 "Phone Login",
 *                 "Incoming Fax",
 *                 "Accept Call",
 *                 "FindMe",
 *                 "FollowMe",
 *                 "Outgoing Fax",
 *                 "Call Return",
 *                 "Calling Card",
 *                 "Ring Directly",
 *                 "RingOut Web",
 *                 "VoIP Call",
 *                 "RingOut PC",
 *                 "RingMe",
 *                 "Transfer",
 *                 "411 Info",
 *                 "Emergency",
 *                 "E911 Update",
 *                 "Support",
 *                 "RingOut Mobile"
 *             ],
 *             "description": "Action description of the call operation.",
 *             "$name": "action",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionCallLogRecordResponseResult",
 *             "enum": [
 *                 "Unknown",
 *                 "ResultInProgress",
 *                 "Missed",
 *                 "Call accepted",
 *                 "Voicemail",
 *                 "Rejected",
 *                 "Reply",
 *                 "Received",
 *                 "Receive Error",
 *                 "Fax on Demand",
 *                 "Partial Receive",
 *                 "Blocked",
 *                 "Call сonnected",
 *                 "No Answer",
 *                 "Busy",
 *                 "Send Error",
 *                 "Sent",
 *                 "No fax machine",
 *                 "ResultEmpty",
 *                 "Account",
 *                 "Suspended",
 *                 "Call Failed",
 *                 "Call Failure",
 *                 "Internal Error",
 *                 "IP Phone offline",
 *                 "Restricted Number",
 *                 "Wrong Number",
 *                 "Stopped",
 *                 "Hang up",
 *                 "Poor Line Quality",
 *                 "Partially Sent",
 *                 "International Disabled",
 *                 "International Restriction",
 *                 "Abandoned",
 *                 "Declined",
 *                 "Fax Receipt Error",
 *                 "Fax Send Error"
 *             ],
 *             "description": "Status description of the call operation.",
 *             "$name": "result",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "Date",
 *             "description": "Call start time",
 *             "$name": "startTime",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Call duration in seconds",
 *             "$name": "duration",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/RecordingInfo",
 *             "description": "Call recording data. Returned if the call is recorded",
 *             "$name": "recording",
 *             "isRequired": false,
 *             "type": "recordinginfo.RecordingInfo"
 *         }
 *     ]
 * }
 */