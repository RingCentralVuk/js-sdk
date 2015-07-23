import model = require('../Model');

export class CustomDataAttachmentContent extends model.Model {

    /**
     * Type of custom data attachment, see also MIME Types
     */
    public Content-Type:MIME type;

    /**
     * Filename and binary data. Maximum attachment size is limited to 5Mb
     */
    public Content-disposition:;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'Content-Type', Class: MIME type, isArray: false,isRequired: false},
            {property: 'Content-disposition', Class: , isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'CustomDataAttachmentContent';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "CustomDataAttachmentContent",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "MIME type",
 *             "description": "Type of custom data attachment, see also MIME Types",
 *             "$name": "Content-Type",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "",
 *             "description": "Filename and binary data. Maximum attachment size is limited to 5Mb",
 *             "$name": "Content-disposition",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */