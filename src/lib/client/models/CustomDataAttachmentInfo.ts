import model = require('../Model');

export class CustomDataAttachmentInfo extends model.Model {

    /**
     * Link to custom data attachment
     */
    public uri:string;

    /**
     * Type of custom data attachment, see also MIME Types
     */
    public contentType:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'contentType', Class: null /* string */, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'CustomDataAttachmentInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CustomDataAttachmentInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Link to custom data attachment",
 *             "$name": "uri",
 *             "isRequired": true
 *         },
 *         {
 *             "type": "string",
 *             "description": "Type of custom data attachment, see also MIME Types",
 *             "$name": "contentType",
 *             "isRequired": true
 *         }
 *     ]
 * }
 */