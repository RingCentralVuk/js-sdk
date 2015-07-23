import model = require('../Model');

export class GetCallRecordingResponse extends model.Model {

    /**
     * Internal identifier of the call recording
     */
    public id:number;

    /**
     * Link to the call recording binary content
     */
    public contentUri:string;

    /**
     * Call recording file format. Supported format is audio/x-wav
     */
    public contentType:string;

    /**
     * Recorded call duration
     */
    public duration:number;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'contentUri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'contentType', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'duration', Class: null /* number */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetCallRecordingResponse';
    }

}