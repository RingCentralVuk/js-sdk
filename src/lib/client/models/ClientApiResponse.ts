import model = require('../Model');
import clientapplicationinfo = require('./ClientApplicationInfo');
import clientprovisioninginfo = require('./ClientProvisioningInfo');

export class ClientApiResponse extends model.Model {

    /**
     * Client application information
     */
    public client:clientapplicationinfo.ClientApplicationInfo;

    /**
     * Provisioning parameters. Available for the  detected  applications only
     */
    public provisioning:clientprovisioninginfo.ClientProvisioningInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'client', Class: clientapplicationinfo.ClientApplicationInfo, isArray: false,isRequired: true},
            {property: 'provisioning', Class: clientprovisioninginfo.ClientProvisioningInfo, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'ClientApiResponse';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientApiResponse",
 *     "imports": [
 *         "clientapplicationinfo.ClientApplicationInfo",
 *         "clientprovisioninginfo.ClientProvisioningInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/ClientApplicationInfo",
 *             "description": "Client application information",
 *             "$name": "client",
 *             "isRequired": true,
 *             "type": "clientapplicationinfo.ClientApplicationInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ClientProvisioningInfo",
 *             "description": "Provisioning parameters. Available for the  detected  applications only",
 *             "$name": "provisioning",
 *             "isRequired": true,
 *             "type": "clientprovisioninginfo.ClientProvisioningInfo"
 *         }
 *     ]
 * }
 */