import model = require('../Model');

export class RingOutStatusInfo extends model.Model {

    /**
     * Status of a call
     */
    public callStatus:RingOutStatusInfoCallStatus;

    /**
     * Status of a calling party
     */
    public callerStatus:RingOutStatusInfoCallerStatus;

    /**
     * Status of a called party
     */
    public calleeStatus:RingOutStatusInfoCalleeStatus;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'callStatus', Class: RingOutStatusInfoCallStatus, isArray: false,isRequired: false},
            {property: 'callerStatus', Class: RingOutStatusInfoCallerStatus, isArray: false,isRequired: false},
            {property: 'calleeStatus', Class: RingOutStatusInfoCalleeStatus, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'RingOutStatusInfo';
    }

}

export enum RingOutStatusInfoCallStatus {
    Invalid = <any>'Invalid',
    Success = <any>'Success',
    InProgress = <any>'InProgress',
    Busy = <any>'Busy',
    NoAnswer = <any>'NoAnswer',
    Rejected = <any>'Rejected',
    GenericError = <any>'GenericError',
    Finished = <any>'Finished',
    InternationalDisabled = <any>'InternationalDisabled',
    DestinationBlocked = <any>'DestinationBlocked',
    NotEnoughFunds = <any>'NotEnoughFunds',
    NoSuchUser = <any>'NoSuchUser'
}

export enum RingOutStatusInfoCallerStatus {
    Invalid = <any>'Invalid',
    Success = <any>'Success',
    InProgress = <any>'InProgress',
    Busy = <any>'Busy',
    NoAnswer = <any>'NoAnswer',
    Rejected = <any>'Rejected',
    GenericError = <any>'GenericError',
    Finished = <any>'Finished',
    InternationalDisabled = <any>'InternationalDisabled',
    DestinationBlocked = <any>'DestinationBlocked',
    NotEnoughFunds = <any>'NotEnoughFunds',
    NoSuchUser = <any>'NoSuchUser'
}

export enum RingOutStatusInfoCalleeStatus {
    Invalid = <any>'Invalid',
    Success = <any>'Success',
    InProgress = <any>'InProgress',
    Busy = <any>'Busy',
    NoAnswer = <any>'NoAnswer',
    Rejected = <any>'Rejected',
    GenericError = <any>'GenericError',
    Finished = <any>'Finished',
    InternationalDisabled = <any>'InternationalDisabled',
    DestinationBlocked = <any>'DestinationBlocked',
    NotEnoughFunds = <any>'NotEnoughFunds',
    NoSuchUser = <any>'NoSuchUser'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "RingOutStatusInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "RingOutStatusInfoCallStatus",
 *             "enum": [
 *                 "Invalid",
 *                 "Success",
 *                 "InProgress",
 *                 "Busy",
 *                 "NoAnswer",
 *                 "Rejected",
 *                 "GenericError",
 *                 "Finished",
 *                 "InternationalDisabled",
 *                 "DestinationBlocked",
 *                 "NotEnoughFunds",
 *                 "NoSuchUser"
 *             ],
 *             "description": "Status of a call",
 *             "$name": "callStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "RingOutStatusInfoCallerStatus",
 *             "enum": [
 *                 "Invalid",
 *                 "Success",
 *                 "InProgress",
 *                 "Busy",
 *                 "NoAnswer",
 *                 "Rejected",
 *                 "GenericError",
 *                 "Finished",
 *                 "InternationalDisabled",
 *                 "DestinationBlocked",
 *                 "NotEnoughFunds",
 *                 "NoSuchUser"
 *             ],
 *             "description": "Status of a calling party",
 *             "$name": "callerStatus",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "RingOutStatusInfoCalleeStatus",
 *             "enum": [
 *                 "Invalid",
 *                 "Success",
 *                 "InProgress",
 *                 "Busy",
 *                 "NoAnswer",
 *                 "Rejected",
 *                 "GenericError",
 *                 "Finished",
 *                 "InternationalDisabled",
 *                 "DestinationBlocked",
 *                 "NotEnoughFunds",
 *                 "NoSuchUser"
 *             ],
 *             "description": "Status of a called party",
 *             "$name": "calleeStatus",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */