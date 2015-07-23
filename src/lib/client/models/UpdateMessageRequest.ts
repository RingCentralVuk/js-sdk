import model = require('../Model');

export class UpdateMessageRequest extends model.Model {

    /**
     * Read status of a message to be changed. Multiple values are accepted
     */
    public readStatus:UpdateMessageRequestReadStatus;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'readStatus', Class: UpdateMessageRequestReadStatus, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'UpdateMessageRequest';
    }

}

export enum UpdateMessageRequestReadStatus {
    Read = <any>'Read',
    Unread = <any>'Unread'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "UpdateMessageRequest",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "UpdateMessageRequestReadStatus",
 *             "enum": [
 *                 "Read",
 *                 "Unread"
 *             ],
 *             "description": "Read status of a message to be changed. Multiple values are accepted",
 *             "$name": "readStatus",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */