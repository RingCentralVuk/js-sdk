import model = require('../Model');
import calllogcallerinfo = require('./CallLogCallerInfo');
import recordinginfo = require('./RecordingInfo');

export class CallLogRecordLegInfo extends model.Model {

    /**
     * Call start time
     */
    public startTime:Date;

    /**
     * Call duration in seconds
     */
    public duration:number;

    /**
     * Call type
     */
    public type:CallLogRecordLegInfoType;

    /**
     * Call direction
     */
    public direction:CallLogRecordLegInfoDirection;

    /**
     * Action description of the call operation.
     */
    public action:CallLogRecordLegInfoAction;

    /**
     * Status description of the call operation.
     */
    public result:CallLogRecordLegInfoResult;

    /**
     * Caller information
     */
    public from:calllogcallerinfo.CallLogCallerInfo;

    /**
     * Callee information
     */
    public to:calllogcallerinfo.CallLogCallerInfo;

    /**
     * Call transport
     */
    public transport:CallLogRecordLegInfoTransport;

    /**
     * Message attachment
     */
    public message:any;

    /**
     * Call recording data. Returned if the call is recorded
     */
    public recording:recordinginfo.RecordingInfo;

    /**
     * Information on costs
     */
    public billing:CallLogRecordLegInfoBilling;

    /**
     * Leg type
     */
    public legType:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'startTime', Class: Date, isArray: false,isRequired: false},
            {property: 'duration', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'type', Class: CallLogRecordLegInfoType, isArray: false,isRequired: false},
            {property: 'direction', Class: CallLogRecordLegInfoDirection, isArray: false,isRequired: false},
            {property: 'action', Class: CallLogRecordLegInfoAction, isArray: false,isRequired: false},
            {property: 'result', Class: CallLogRecordLegInfoResult, isArray: false,isRequired: false},
            {property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false,isRequired: false},
            {property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false,isRequired: false},
            {property: 'transport', Class: CallLogRecordLegInfoTransport, isArray: false,isRequired: false},
            {property: 'message', Class: null /* any */, isArray: false,isRequired: false},
            {property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false,isRequired: false},
            {property: 'billing', Class: CallLogRecordLegInfoBilling, isArray: false,isRequired: false},
            {property: 'legType', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CallLogRecordLegInfo';
    }

}

export enum CallLogRecordLegInfoType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum CallLogRecordLegInfoDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum CallLogRecordLegInfoAction {
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

export enum CallLogRecordLegInfoResult {
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

export enum CallLogRecordLegInfoTransport {
    PSTN = <any>'PSTN',
    VoIP = <any>'VoIP'
}

export enum CallLogRecordLegInfoBilling {
    costIncluded = <any>'costIncluded',
    costPurchased = <any>'costPurchased'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CallLogRecordLegInfo",
 *     "imports": [
 *         "calllogcallerinfo.CallLogCallerInfo",
 *         "recordinginfo.RecordingInfo"
 *     ],
 *     "properties": [
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
 *             "type": "CallLogRecordLegInfoType",
 *             "enum": [
 *                 "Voice",
 *                 "Fax"
 *             ],
 *             "description": "Call type",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoDirection",
 *             "enum": [
 *                 "Inbound",
 *                 "Outbound"
 *             ],
 *             "description": "Call direction",
 *             "$name": "direction",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoAction",
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
 *             "type": "CallLogRecordLegInfoResult",
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
 *             "type": "CallLogRecordLegInfoTransport",
 *             "enum": [
 *                 "PSTN",
 *                 "VoIP"
 *             ],
 *             "description": "Call transport",
 *             "$name": "transport",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "any",
 *             "description": "Message attachment",
 *             "$name": "message",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/RecordingInfo",
 *             "description": "Call recording data. Returned if the call is recorded",
 *             "$name": "recording",
 *             "isRequired": false,
 *             "type": "recordinginfo.RecordingInfo"
 *         },
 *         {
 *             "type": "CallLogRecordLegInfoBilling",
 *             "enum": [
 *                 "costIncluded",
 *                 "costPurchased"
 *             ],
 *             "description": "Information on costs",
 *             "$name": "billing",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Leg type",
 *             "$name": "legType",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */