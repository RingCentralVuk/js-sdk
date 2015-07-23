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