import model = require('../Model');

export class MakeRingOutCallerInfoRequest extends model.Model {

    /**
     * Phone number of a party. Usually it is a plain number including country and area code like 18661234567. But sometimes it could be returned from database with some formatting applied, for example (866)123-4567. This property is filled in all cases where parties communicate by means of global phone numbers, for example when calling to direct numbers or sending/receiving SMS
     */
    public phoneNumber:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'MakeRingOutCallerInfoRequest';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "MakeRingOutCallerInfoRequest",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Phone number of a party. Usually it is a plain number including country and area code like 18661234567. But sometimes it could be returned from database with some formatting applied, for example (866)123-4567. This property is filled in all cases where parties communicate by means of global phone numbers, for example when calling to direct numbers or sending/receiving SMS",
 *             "$name": "phoneNumber",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */