import model = require('../Model');
import contactinfo = require('./ContactInfo');
import departmentinfo = require('./DepartmentInfo');
import extensionpermissions = require('./ExtensionPermissions');
import regionalsettingsinfo = require('./RegionalSettingsInfo');
import extensionservicefeatureinfo = require('./ExtensionServiceFeatureInfo');
import extensionstatusinfo = require('./ExtensionStatusInfo');

export class GetExtensionInfoResponse extends model.Model {

    /**
     * Internal identifier of an extension
     */
    public id:string;

    /**
     * Canonical URI of an extension
     */
    public uri:string;

    /**
     * Contact detailed information
     */
    public contact:contactinfo.ContactInfo;

    /**
     * Information on department extension(s), to which the requested extension belongs. Returned only for user extensions, members of department, requested by single extensionId
     */
    public departments:departmentinfo.DepartmentInfo;

    /**
     * Number of department extension
     */
    public extensionNumber:string;

    /**
     * Extension user name
     */
    public name:string;

    /**
     * For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding accountId/extensionId for each partnerId of a client application. In request URIs partnerIds are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding accountIds and extensionIds. In all request and response bodies these values are reflected via  partnerId  attributes of account and extension
     */
    public partnerId:string;

    /**
     * Extension permissions, corresponding to the Service Web permissions 'Admin' and 'InternationalCalling'
     */
    public permissions:extensionpermissions.ExtensionPermissions;

    /**
     * Extension region data (timezone, home country, language)
     */
    public regionalSettings:regionalsettingsinfo.RegionalSettingsInfo;

    public serviceFeatures:extensionservicefeatureinfo.ExtensionServiceFeatureInfo[];

    /**
     * Specifies extension configuration wizard state (web service setup). The default value is 'NotStarted'
     */
    public setupWizardState:GetExtensionInfoResponseSetupWizardState;

    /**
     * Extension current state
     */
    public status:GetExtensionInfoResponseStatus;

    /**
     * Status information (reason, comment). Returned for 'Disabled' status only
     */
    public statusInfo:extensionstatusinfo.ExtensionStatusInfo;

    /**
     * Extension type
     */
    public type:GetExtensionInfoResponseType;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'contact', Class: contactinfo.ContactInfo, isArray: false,isRequired: false},
            {property: 'departments', Class: departmentinfo.DepartmentInfo, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'partnerId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'permissions', Class: extensionpermissions.ExtensionPermissions, isArray: false,isRequired: false},
            {property: 'regionalSettings', Class: regionalsettingsinfo.RegionalSettingsInfo, isArray: false,isRequired: false},
            {property: 'serviceFeatures', Class: extensionservicefeatureinfo.ExtensionServiceFeatureInfo, isArray: true,isRequired: false},
            {property: 'setupWizardState', Class: GetExtensionInfoResponseSetupWizardState, isArray: false,isRequired: false},
            {property: 'status', Class: GetExtensionInfoResponseStatus, isArray: false,isRequired: false},
            {property: 'statusInfo', Class: extensionstatusinfo.ExtensionStatusInfo, isArray: false,isRequired: false},
            {property: 'type', Class: GetExtensionInfoResponseType, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetExtensionInfoResponse';
    }

}

export enum GetExtensionInfoResponseSetupWizardState {
    NotStarted = <any>'NotStarted',
    Incomplete = <any>'Incomplete',
    Completed = <any>'Completed'
}

export enum GetExtensionInfoResponseStatus {
    Enabled = <any>'Enabled',
    Disabled = <any>'Disabled',
    NotActivated = <any>'NotActivated',
    Unassigned = <any>'Unassigned'
}

export enum GetExtensionInfoResponseType {
    User = <any>'User',
    FaxUser = <any>'Fax User',
    VirtualUser = <any>'VirtualUser',
    DigitalUser = <any>'DigitalUser',
    Department = <any>'Department',
    Announcement = <any>'Announcement',
    Voicemail = <any>'Voicemail',
    SharedLinesGroup = <any>'SharedLinesGroup',
    PagingOnly = <any>'PagingOnly',
    IvrMenu = <any>'IvrMenu',
    ApplicationExtension = <any>'ApplicationExtension'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetExtensionInfoResponse",
 *     "imports": [
 *         "contactinfo.ContactInfo",
 *         "departmentinfo.DepartmentInfo",
 *         "extensionpermissions.ExtensionPermissions",
 *         "regionalsettingsinfo.RegionalSettingsInfo",
 *         "extensionservicefeatureinfo.ExtensionServiceFeatureInfo",
 *         "extensionstatusinfo.ExtensionStatusInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of an extension",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of an extension",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ContactInfo",
 *             "description": "Contact detailed information",
 *             "$name": "contact",
 *             "isRequired": false,
 *             "type": "contactinfo.ContactInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/DepartmentInfo",
 *             "description": "Information on department extension(s), to which the requested extension belongs. Returned only for user extensions, members of department, requested by single extensionId",
 *             "$name": "departments",
 *             "isRequired": false,
 *             "type": "departmentinfo.DepartmentInfo"
 *         },
 *         {
 *             "type": "string",
 *             "description": "Number of department extension",
 *             "$name": "extensionNumber",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Extension user name",
 *             "$name": "name",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding accountId/extensionId for each partnerId of a client application. In request URIs partnerIds are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding accountIds and extensionIds. In all request and response bodies these values are reflected via  partnerId  attributes of account and extension",
 *             "$name": "partnerId",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ExtensionPermissions",
 *             "description": "Extension permissions, corresponding to the Service Web permissions 'Admin' and 'InternationalCalling'",
 *             "$name": "permissions",
 *             "isRequired": false,
 *             "type": "extensionpermissions.ExtensionPermissions"
 *         },
 *         {
 *             "$ref": "#/definitions/RegionalSettingsInfo",
 *             "description": "Extension region data (timezone, home country, language)",
 *             "$name": "regionalSettings",
 *             "isRequired": false,
 *             "type": "regionalsettingsinfo.RegionalSettingsInfo"
 *         },
 *         {
 *             "type": "extensionservicefeatureinfo.ExtensionServiceFeatureInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/ExtensionServiceFeatureInfo"
 *             },
 *             "$name": "serviceFeatures",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionInfoResponseSetupWizardState",
 *             "enum": [
 *                 "NotStarted",
 *                 "Incomplete",
 *                 "Completed"
 *             ],
 *             "description": "Specifies extension configuration wizard state (web service setup). The default value is 'NotStarted'",
 *             "$name": "setupWizardState",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetExtensionInfoResponseStatus",
 *             "enum": [
 *                 "Enabled",
 *                 "Disabled",
 *                 "NotActivated",
 *                 "Unassigned"
 *             ],
 *             "description": "Extension current state",
 *             "$name": "status",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ExtensionStatusInfo",
 *             "description": "Status information (reason, comment). Returned for 'Disabled' status only",
 *             "$name": "statusInfo",
 *             "isRequired": false,
 *             "type": "extensionstatusinfo.ExtensionStatusInfo"
 *         },
 *         {
 *             "type": "GetExtensionInfoResponseType",
 *             "enum": [
 *                 "User",
 *                 "Fax User",
 *                 "VirtualUser",
 *                 "DigitalUser",
 *                 "Department",
 *                 "Announcement",
 *                 "Voicemail",
 *                 "SharedLinesGroup",
 *                 "PagingOnly",
 *                 "IvrMenu",
 *                 "ApplicationExtension"
 *             ],
 *             "description": "Extension type",
 *             "$name": "type",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */