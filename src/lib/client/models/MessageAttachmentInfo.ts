import model = require('../Model');

export class MessageAttachmentInfo extends model.Model {

    /**
     * Internal identifier of a message attachment
     */
    public id:string;

    /**
     * Canonical URI of a message attachment
     */
    public uri:string;

    /**
     * Type of message attachment
     */
    public type:MessageAttachmentInfoType;

    /**
     * MIME type for a given attachment, for instance 'audio/wav'
     */
    public contentType:string;

    /**
     * Voicemail only Duration of the voicemail in seconds
     */
    public vmDuration:number;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: MessageAttachmentInfoType, isArray: false,isRequired: false},
            {property: 'contentType', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'vmDuration', Class: null /* number */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'MessageAttachmentInfo';
    }

}

export enum MessageAttachmentInfoType {
    AutoRecording = <any>'AutoRecording',
    AutoTranscription = <any>'AutoTranscription',
    Text = <any>'Text',
    SourceDocument = <any>'SourceDocument',
    RenderedDocument = <any>'RenderedDocument'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "MessageAttachmentInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Internal identifier of a message attachment",
 *             "$name": "id",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Canonical URI of a message attachment",
 *             "$name": "uri",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "MessageAttachmentInfoType",
 *             "enum": [
 *                 "AutoRecording",
 *                 "AutoTranscription",
 *                 "Text",
 *                 "SourceDocument",
 *                 "RenderedDocument"
 *             ],
 *             "description": "Type of message attachment",
 *             "$name": "type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "MIME type for a given attachment, for instance 'audio/wav'",
 *             "$name": "contentType",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "number",
 *             "description": "Voicemail only Duration of the voicemail in seconds",
 *             "$name": "vmDuration",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */