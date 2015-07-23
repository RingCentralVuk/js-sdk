import model = require('../Model');
import getextensioninforesponse = require('./GetExtensionInfoResponse');
import serviceinforesponse = require('./ServiceInfoResponse');
import accountstatusinfo = require('./AccountStatusInfo');

export class GetAccountInfoResponse extends model.Model {

    /**
     * Internal identifier of an account
     */
    public id:string;

    /**
     * Canonical URI of an account
     */
    public uri:string;

    /**
     * Main phone number of the current account
     */
    public mainNumber:string;

    /**
     * Operator's extension information. This extension will receive all calls and messages intended for the operator
     */
    public opeartor:getextensioninforesponse.GetExtensionInfoResponse;

    /**
     * Additional account identifier, developed and applied by the client
     */
    public partnerId:string;

    /**
     * Account service information, including brand, service plan and billing plan
     */
    public serviceInfo:serviceinforesponse.ServiceInfoResponse;

    /**
     * Specifies account configuration wizard state (web service setup). The default value is 'NotStarted'
     */
    public setupWizardState:GetAccountInfoResponseSetupWizardState;

    /**
     * Status of the current account
     */
    public status:GetAccountInfoResponseStatus;

    /**
     * Status information (reason, comment, lifetime). Returned for 'Disabled' status only
     */
    public statusInfo:accountstatusinfo.AccountStatusInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mainNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'opeartor', Class: getextensioninforesponse.GetExtensionInfoResponse, isArray: false,isRequired: false},
            {property: 'partnerId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceInfo', Class: serviceinforesponse.ServiceInfoResponse, isArray: false,isRequired: false},
            {property: 'setupWizardState', Class: GetAccountInfoResponseSetupWizardState, isArray: false,isRequired: false},
            {property: 'status', Class: GetAccountInfoResponseStatus, isArray: false,isRequired: false},
            {property: 'statusInfo', Class: accountstatusinfo.AccountStatusInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetAccountInfoResponse';
    }

}

export enum GetAccountInfoResponseSetupWizardState {
    NotStarted = <any>'NotStarted',
    Incomplete = <any>'Incomplete',
    Completed = <any>'Completed'
}

export enum GetAccountInfoResponseStatus {
    Confirmed = <any>'Confirmed',
    Disabled = <any>'Disabled'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetAccountInfoResponse",
 *     "imports": [
 *         "getextensioninforesponse.GetExtensionInfoResponse",
 *         "serviceinforesponse.ServiceInfoResponse",
 *         "accountstatusinfo.AccountStatusInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of an account",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of an account",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Main phone number of the current account",
 *             "$name": "mainNumber",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/GetExtensionInfoResponse",
 *             "description": "Operator's extension information. This extension will receive all calls and messages intended for the operator",
 *             "$name": "opeartor",
 *             "isRequired": false,
 *             "type": "getextensioninforesponse.GetExtensionInfoResponse"
 *         },
 *         {
 *             "type": "string",
 *             "description": "Additional account identifier, developed and applied by the client",
 *             "$name": "partnerId",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/ServiceInfoResponse",
 *             "description": "Account service information, including brand, service plan and billing plan",
 *             "$name": "serviceInfo",
 *             "isRequired": false,
 *             "type": "serviceinforesponse.ServiceInfoResponse"
 *         },
 *         {
 *             "type": "GetAccountInfoResponseSetupWizardState",
 *             "enum": [
 *                 "NotStarted",
 *                 "Incomplete",
 *                 "Completed"
 *             ],
 *             "description": "Specifies account configuration wizard state (web service setup). The default value is 'NotStarted'",
 *             "$name": "setupWizardState",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "GetAccountInfoResponseStatus",
 *             "enum": [
 *                 "Confirmed",
 *                 "Disabled"
 *             ],
 *             "description": "Status of the current account",
 *             "$name": "status",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/AccountStatusInfo",
 *             "description": "Status information (reason, comment, lifetime). Returned for 'Disabled' status only",
 *             "$name": "statusInfo",
 *             "isRequired": false,
 *             "type": "accountstatusinfo.AccountStatusInfo"
 *         }
 *     ]
 * }
 */