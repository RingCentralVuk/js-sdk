import model = require('../Model');

export class ClientProvisioningHintInfo extends model.Model {

    /**
     * Seconds until expiration date. Returned only if applicable
     */
    public expiresIn:number;

    /**
     * 'False', if the value of expiresIn is greater than 0 (zero), otherwise - 'True'
     */
    public actionRequired:boolean;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'expiresIn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'actionRequired', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ClientProvisioningHintInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientProvisioningHintInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "number",
 *             "description": "Seconds until expiration date. Returned only if applicable",
 *             "$name": "expiresIn",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "boolean",
 *             "description": "'False', if the value of expiresIn is greater than 0 (zero), otherwise - 'True'",
 *             "$name": "actionRequired",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */