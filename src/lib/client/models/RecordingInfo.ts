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

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "RecordingInfo",
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
 *             "description": "Link to the call recording metadata resource",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "RecordingInfoType",
 *             "enum": [
 *                 "Automatic",
 *                 "OnDemand"
 *             ],
 *             "description": "Indicates recording mode used",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the call recording binary content",
 *             "$name": "contentUri",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */