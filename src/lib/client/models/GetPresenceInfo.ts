import model = require('../Model');
import getpresenceextensioninfo = require('./GetPresenceExtensionInfo');

export class GetPresenceInfo extends model.Model {

    /**
     * Canonical URI of a presence info resource
     */
    public uri:string;

    /**
     * If 'True' enables other extensions to see the extension presence status
     */
    public allowSeeMyPresence:GetPresenceInfoAllowSeeMyPresence;

    /**
     * Extended DnD (Do not Disturb) status. Cannot be set for Department/Announcement/Voicemail (Take Messages Only)/Fax User/Shared Lines Group/Paging Only Group/IVR Menu/Application Extension extensions. The 'DoNotAcceptDepartmentCalls' and 'TakeDepartmentCallsOnly' values are applicable only for extensions - members of a Department; if these values are set for department outsiders, the 400 Bad Request error code is returned. The 'TakeDepartmentCallsOnly' status can be set through the old RingCentral user interface and is available for some migrated accounts only.
     */
    public dndStatus:GetPresenceInfoDndStatus;

    /**
     * Information on extension, for which this presence data is returned
     */
    public extension:getpresenceextensioninfo.GetPresenceExtensionInfo;

    /**
     * Custom status message (as previously published by user)
     */
    public message:string;

    /**
     * If 'True' enables the extension user to pick up a monitored line on hold
     */
    public pickUpCallsOnHold:GetPresenceInfoPickUpCallsOnHold;

    /**
     * Aggregated presence status, calculated from a number of sources
     */
    public presenceStatus:GetPresenceInfoPresenceStatus;

    /**
     * If 'True' enables to ring extension phone, if any user monitored by this extension is ringing
     */
    public ringOnMonitoredCall:GetPresenceInfoRingOnMonitoredCall;

    /**
     * Telephony presence status
     */
    public telephonyStatus:GetPresenceInfoTelephonyStatus;

    /**
     * User-defined presence status (as previously published by the user)
     */
    public userStatus:GetPresenceInfoUserStatus;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'allowSeeMyPresence', Class: GetPresenceInfoAllowSeeMyPresence, isArray: false,isRequired: false},
            {property: 'dndStatus', Class: GetPresenceInfoDndStatus, isArray: false,isRequired: false},
            {property: 'extension', Class: getpresenceextensioninfo.GetPresenceExtensionInfo, isArray: false,isRequired: false},
            {property: 'message', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'pickUpCallsOnHold', Class: GetPresenceInfoPickUpCallsOnHold, isArray: false,isRequired: false},
            {property: 'presenceStatus', Class: GetPresenceInfoPresenceStatus, isArray: false,isRequired: false},
            {property: 'ringOnMonitoredCall', Class: GetPresenceInfoRingOnMonitoredCall, isArray: false,isRequired: false},
            {property: 'telephonyStatus', Class: GetPresenceInfoTelephonyStatus, isArray: false,isRequired: false},
            {property: 'userStatus', Class: GetPresenceInfoUserStatus, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetPresenceInfo';
    }

}

export enum GetPresenceInfoAllowSeeMyPresence {
    True = <any>'True',
    False = <any>'False'
}

export enum GetPresenceInfoDndStatus {
    TakeAllCalls = <any>'TakeAllCalls',
    DoNotAcceptAnyCalls = <any>'DoNotAcceptAnyCalls',
    DoNotAcceptDepartmentCalls = <any>'DoNotAcceptDepartmentCalls',
    TakeDepartmentCallsOnly = <any>'TakeDepartmentCallsOnly'
}

export enum GetPresenceInfoPickUpCallsOnHold {
    True = <any>'True',
    False = <any>'False'
}

export enum GetPresenceInfoPresenceStatus {
    Offline = <any>'Offline',
    Busy = <any>'Busy',
    Available = <any>'Available'
}

export enum GetPresenceInfoRingOnMonitoredCall {
    True = <any>'True',
    False = <any>'False'
}

export enum GetPresenceInfoTelephonyStatus {
    NoCall = <any>'NoCall',
    CallConnected = <any>'CallConnected',
    Ringing = <any>'Ringing',
    OnHold = <any>'OnHold'
}

export enum GetPresenceInfoUserStatus {
    Offline = <any>'Offline',
    Busy = <any>'Busy',
    Available = <any>'Available'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetPresenceInfo",
 *     "imports": [
 *         "getpresenceextensioninfo.GetPresenceExtensionInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a presence info resource",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoAllowSeeMyPresence",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "If 'True' enables other extensions to see the extension presence status",
 *             "$name": "allowSeeMyPresence",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoDndStatus",
 *             "enum": [
 *                 "TakeAllCalls",
 *                 "DoNotAcceptAnyCalls",
 *                 "DoNotAcceptDepartmentCalls",
 *                 "TakeDepartmentCallsOnly"
 *             ],
 *             "description": "Extended DnD (Do not Disturb) status. Cannot be set for Department/Announcement/Voicemail (Take Messages Only)/Fax User/Shared Lines Group/Paging Only Group/IVR Menu/Application Extension extensions. The 'DoNotAcceptDepartmentCalls' and 'TakeDepartmentCallsOnly' values are applicable only for extensions - members of a Department; if these values are set for department outsiders, the 400 Bad Request error code is returned. The 'TakeDepartmentCallsOnly' status can be set through the old RingCentral user interface and is available for some migrated accounts only.",
 *             "$name": "dndStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/GetPresenceExtensionInfo",
 *             "description": "Information on extension, for which this presence data is returned",
 *             "$name": "extension",
 *             "isRequired": false,
 *             "type": "getpresenceextensioninfo.GetPresenceExtensionInfo"
 *         },
 *         {
 *             "type": "string",
 *             "description": "Custom status message (as previously published by user)",
 *             "$name": "message",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoPickUpCallsOnHold",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "If 'True' enables the extension user to pick up a monitored line on hold",
 *             "$name": "pickUpCallsOnHold",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoPresenceStatus",
 *             "enum": [
 *                 "Offline",
 *                 "Busy",
 *                 "Available"
 *             ],
 *             "description": "Aggregated presence status, calculated from a number of sources",
 *             "$name": "presenceStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoRingOnMonitoredCall",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "If 'True' enables to ring extension phone, if any user monitored by this extension is ringing",
 *             "$name": "ringOnMonitoredCall",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoTelephonyStatus",
 *             "enum": [
 *                 "NoCall",
 *                 "CallConnected",
 *                 "Ringing",
 *                 "OnHold"
 *             ],
 *             "description": "Telephony presence status",
 *             "$name": "telephonyStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetPresenceInfoUserStatus",
 *             "enum": [
 *                 "Offline",
 *                 "Busy",
 *                 "Available"
 *             ],
 *             "description": "User-defined presence status (as previously published by the user)",
 *             "$name": "userStatus",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */