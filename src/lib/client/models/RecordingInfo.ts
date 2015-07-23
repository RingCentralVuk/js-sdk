import model = require('../Model');

export class RecordingInfo extends model.Model {

    /**
     * Internal identifier of the call recording
     */
    public id:number;

    /**
     * Link to the call recording metadata resource
     */
    public uri:string;

    /**
     * Indicates recording mode used
     */
    public type:RecordingInfoType;

    /**
     * Link to the call recording binary content
     */
    public contentUri:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: RecordingInfoType, isArray: false,isRequired: false},
            {property: 'contentUri', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'RecordingInfo';
    }

}

export enum RecordingInfoType {
    Automatic = <any>'Automatic',
    OnDemand = <any>'OnDemand'
}