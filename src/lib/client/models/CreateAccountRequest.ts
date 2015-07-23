import model = require('../Model');
import operatorinfo = require('./OperatorInfo');
import serviceinforequest = require('./ServiceInfoRequest');

export class CreateAccountRequest extends model.Model {

    /**
     * Main account VoIP phone number, either Local or Toll-Free. Cannot be Fax Only. Obtained via lookup/reserve API
     */
    public mainNumber:string;

    /**
     * Operator extension information
     */
    public operator:operatorinfo.OperatorInfo;

    /**
     * Account service information, brand identifier and service plan
     */
    public serviceInfo:serviceinforequest.ServiceInfoRequest;

    /**
     * The status with which an account is created. The default value is 'Initial'
     */
    public status:CreateAccountRequestStatus;

    /**
     * Partner identifier for this account
     */
    public partnerId:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'mainNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'operator', Class: operatorinfo.OperatorInfo, isArray: false,isRequired: false},
            {property: 'serviceInfo', Class: serviceinforequest.ServiceInfoRequest, isArray: false,isRequired: false},
            {property: 'status', Class: CreateAccountRequestStatus, isArray: false,isRequired: false},
            {property: 'partnerId', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CreateAccountRequest';
    }

}

export enum CreateAccountRequestStatus {
    Initial = <any>'Initial',
    Unconfirmed = <any>'Unconfirmed',
    Confirmed = <any>'Confirmed'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CreateAccountRequest",
 *     "imports": [
 *         "operatorinfo.OperatorInfo",
 *         "serviceinforequest.ServiceInfoRequest"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Main account VoIP phone number, either Local or Toll-Free. Cannot be Fax Only. Obtained via lookup/reserve API",
 *             "$name": "mainNumber",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/OperatorInfo",
 *             "description": "Operator extension information",
 *             "$name": "operator",
 *             "isRequired": false,
 *             "type": "operatorinfo.OperatorInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ServiceInfoRequest",
 *             "description": "Account service information, brand identifier and service plan",
 *             "$name": "serviceInfo",
 *             "isRequired": false,
 *             "type": "serviceinforequest.ServiceInfoRequest"
 *         },
 *         {
 *             "type": "CreateAccountRequestStatus",
 *             "enum": [
 *                 "Initial",
 *                 "Unconfirmed",
 *                 "Confirmed"
 *             ],
 *             "description": "The status with which an account is created. The default value is 'Initial'",
 *             "$name": "status",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Partner identifier for this account",
 *             "$name": "partnerId",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */