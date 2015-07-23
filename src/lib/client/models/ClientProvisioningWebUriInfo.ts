import model = require('../Model');

export class ClientProvisioningWebUriInfo extends model.Model {

    /**
     * Link to web page with the application description. Returned if the application needs to be updated, together with the appVersionUpgrade hint
     */
    public appDownload:string;

    /**
     * Link to the application distributive package. Returned if the application needs to be updated, together with the appVersionUpgrade hint
     */
    public appDownloadFile:string;

    /**
     * Link to express setup page (mobile application)
     */
    public expressSetupMobile:string;

    /**
     * Link to the RC Meetings application distributive package
     */
    public meetingsAppDownload:string;

    /**
     * Link to billing page (mobile application)
     */
    public mobileWebBilling:string;

    /**
     * Link to call handling page (mobile application)
     */
    public mobileWebCallHandling:string;

    /**
     * Link to international calling page (mobile application)
     */
    public mobileWebInternationalCalling:string;

    /**
     * Link to notifications page (mobile application)
     */
    public mobileWebNotifications:string;

    /**
     * Link to phone system settings page (mobile application)
     */
    public mobileWebPhoneSystem:string;

    /**
     * Link to reports page (mobile application)
     */
    public mobileWebReporting:string;

    /**
     * Link to reset password page (mobile application)
     */
    public mobileWebResetPassword:string;

    /**
     * Link to  Tell A Friend  page (mobile application)
     */
    public mobileWebTellAFriend:string;

    /**
     * Link to upgrade trial account (mobile application)
     */
    public mobileWebTrialUpgrade:string;

    /**
     * Link to user settings page (mobile application)
     */
    public mobileWebUserSettings:string;

    /**
     * Link to billing page (web application)
     */
    public serviceWebBilling:string;

    /**
     * Link to home page (web application)
     */
    public serviceWebHome:string;

    /**
     * Link to phone system settings page (web application)
     */
    public serviceWebPhoneSystem:string;

    /**
     * Link to reset password page (web application)
     */
    public serviceWebResetPassword:string;

    /**
     * Link to  Tell A Friend  page (web application)
     */
    public serviceWebTellAFriend:string;

    /**
     * Link to user settings page (web application)
     */
    public serviceWebUserSettings:string;

    /**
     * Link to sign up page (web application)
     */
    public signUp:string;

    /**
     * Link to support page (web application)
     */
    public support:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'appDownload', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'appDownloadFile', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'expressSetupMobile', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'meetingsAppDownload', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebBilling', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebCallHandling', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebInternationalCalling', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebNotifications', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebPhoneSystem', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebReporting', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebResetPassword', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebTellAFriend', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebTrialUpgrade', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobileWebUserSettings', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceWebBilling', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceWebHome', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceWebPhoneSystem', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceWebResetPassword', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceWebTellAFriend', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceWebUserSettings', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'signUp', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'support', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ClientProvisioningWebUriInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientProvisioningWebUriInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Link to web page with the application description. Returned if the application needs to be updated, together with the appVersionUpgrade hint",
 *             "$name": "appDownload",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the application distributive package. Returned if the application needs to be updated, together with the appVersionUpgrade hint",
 *             "$name": "appDownloadFile",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to express setup page (mobile application)",
 *             "$name": "expressSetupMobile",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the RC Meetings application distributive package",
 *             "$name": "meetingsAppDownload",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to billing page (mobile application)",
 *             "$name": "mobileWebBilling",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to call handling page (mobile application)",
 *             "$name": "mobileWebCallHandling",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to international calling page (mobile application)",
 *             "$name": "mobileWebInternationalCalling",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to notifications page (mobile application)",
 *             "$name": "mobileWebNotifications",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to phone system settings page (mobile application)",
 *             "$name": "mobileWebPhoneSystem",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to reports page (mobile application)",
 *             "$name": "mobileWebReporting",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to reset password page (mobile application)",
 *             "$name": "mobileWebResetPassword",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to  Tell A Friend  page (mobile application)",
 *             "$name": "mobileWebTellAFriend",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to upgrade trial account (mobile application)",
 *             "$name": "mobileWebTrialUpgrade",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to user settings page (mobile application)",
 *             "$name": "mobileWebUserSettings",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to billing page (web application)",
 *             "$name": "serviceWebBilling",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to home page (web application)",
 *             "$name": "serviceWebHome",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to phone system settings page (web application)",
 *             "$name": "serviceWebPhoneSystem",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to reset password page (web application)",
 *             "$name": "serviceWebResetPassword",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to  Tell A Friend  page (web application)",
 *             "$name": "serviceWebTellAFriend",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to user settings page (web application)",
 *             "$name": "serviceWebUserSettings",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to sign up page (web application)",
 *             "$name": "signUp",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to support page (web application)",
 *             "$name": "support",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */