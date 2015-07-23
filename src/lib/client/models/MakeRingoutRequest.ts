import model = require('../Model');
import makeringoutcallerinforequest = require('./MakeRingOutCallerInfoRequest');

export class MakeRingoutRequest extends model.Model {

    /**
     * Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number.
     */
    public from:makeringoutcallerinforequest.MakeRingOutCallerInfoRequest;

    /**
     * Phone number of the called party. This number corresponds to the 2nd leg of the RingOut call.
     */
    public to:makeringoutcallerinforequest.MakeRingOutCallerInfoRequest;

    /**
     * The number which will be displayed to the called party.
     */
    public callerId:makeringoutcallerinforequest.MakeRingOutCallerInfoRequest;

    /**
     * The audio prompt that the calling party hears when the call is connected.
     */
    public playPrompt:MakeRingoutRequestPlayPrompt;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: makeringoutcallerinforequest.MakeRingOutCallerInfoRequest, isArray: false,isRequired: true},
            {property: 'to', Class: makeringoutcallerinforequest.MakeRingOutCallerInfoRequest, isArray: false,isRequired: true},
            {property: 'callerId', Class: makeringoutcallerinforequest.MakeRingOutCallerInfoRequest, isArray: false,isRequired: false},
            {property: 'playPrompt', Class: MakeRingoutRequestPlayPrompt, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'MakeRingoutRequest';
    }

}

export enum MakeRingoutRequestPlayPrompt {
    True = <any>'True',
    False = <any>'False'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "MakeRingoutRequest",
 *     "imports": [
 *         "makeringoutcallerinforequest.MakeRingOutCallerInfoRequest"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/MakeRingOutCallerInfoRequest",
 *             "description": "Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number.",
 *             "$name": "from",
 *             "isRequired": true,
 *             "type": "makeringoutcallerinforequest.MakeRingOutCallerInfoRequest"
 *         },
 *         {
 *             "$ref": "#/definitions/MakeRingOutCallerInfoRequest",
 *             "description": "Phone number of the called party. This number corresponds to the 2nd leg of the RingOut call.",
 *             "$name": "to",
 *             "isRequired": true,
 *             "type": "makeringoutcallerinforequest.MakeRingOutCallerInfoRequest"
 *         },
 *         {
 *             "$ref": "#/definitions/MakeRingOutCallerInfoRequest",
 *             "description": "The number which will be displayed to the called party.",
 *             "$name": "callerId",
 *             "isRequired": false,
 *             "type": "makeringoutcallerinforequest.MakeRingOutCallerInfoRequest"
 *         },
 *         {
 *             "type": "MakeRingoutRequestPlayPrompt",
 *             "enum": [
 *                 "True",
 *                 "False"
 *             ],
 *             "description": "The audio prompt that the calling party hears when the call is connected.",
 *             "$name": "playPrompt",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */