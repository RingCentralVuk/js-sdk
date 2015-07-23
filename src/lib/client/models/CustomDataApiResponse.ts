import model = require('../Model');
import customdataattachmentinfo = require('./CustomDataAttachmentInfo');

export class CustomDataApiResponse extends model.Model {

    /**
     * Custom data access key
     */
    public id:string;

    /**
     * Link to the custom data
     */
    public uri:string;

    /**
     * Description of custom data
     */
    public value:string;

    /**
     * Time of the last change in custom data
     */
    public lastModifiedTime:string;

    /**
     * Attachment data: link and type
     */
    public attachment:customdataattachmentinfo.CustomDataAttachmentInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'value', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lastModifiedTime', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'attachment', Class: customdataattachmentinfo.CustomDataAttachmentInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CustomDataApiResponse';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CustomDataApiResponse",
 *     "imports": [
 *         "customdataattachmentinfo.CustomDataAttachmentInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Custom data access key",
 *             "$name": "id",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "string",
 *             "description": "Link to the custom data",
 *             "$name": "uri",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "string",
 *             "description": "Description of custom data",
 *             "$name": "value",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Time of the last change in custom data",
 *             "$name": "lastModifiedTime",
 *             "isRequired": true
 *         },
 *         {
 *             "$ref": "#/definitions/CustomDataAttachmentInfo",
 *             "description": "Attachment data: link and type",
 *             "$name": "attachment",
 *             "isRequired": false,
 *             "type": "customdataattachmentinfo.CustomDataAttachmentInfo"
 *         }
 *     ]
 * }
 */