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

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetCallRecordingResponse",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "number",
 *             "description": "Internal identifier of the call recording",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the call recording binary content",
 *             "$name": "contentUri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Call recording file format. Supported format is audio/x-wav",
 *             "$name": "contentType",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Recorded call duration",
 *             "$name": "duration",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */