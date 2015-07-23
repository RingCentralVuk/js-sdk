import model = require('../Model');
import clientprovisioningweburiinfo = require('./ClientProvisioningWebUriInfo');
import clientprovisioninghintsinfo = require('./ClientProvisioningHintsInfo');

export class ClientProvisioningInfo extends model.Model {

    /**
     * Links to the mobile web and Service Web resources
     */
    public webUris:clientprovisioningweburiinfo.ClientProvisioningWebUriInfo;

    /**
     * Informs client application on the required user action
     */
    public hints:clientprovisioninghintsinfo.ClientProvisioningHintsInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'webUris', Class: clientprovisioningweburiinfo.ClientProvisioningWebUriInfo, isArray: false,isRequired: true},
            {property: 'hints', Class: clientprovisioninghintsinfo.ClientProvisioningHintsInfo, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'ClientProvisioningInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientProvisioningInfo",
 *     "imports": [
 *         "clientprovisioningweburiinfo.ClientProvisioningWebUriInfo",
 *         "clientprovisioninghintsinfo.ClientProvisioningHintsInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/ClientProvisioningWebUriInfo",
 *             "description": "Links to the mobile web and Service Web resources",
 *             "$name": "webUris",
 *             "isRequired": true,
 *             "type": "clientprovisioningweburiinfo.ClientProvisioningWebUriInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ClientProvisioningHintsInfo",
 *             "description": "Informs client application on the required user action",
 *             "$name": "hints",
 *             "isRequired": true,
 *             "type": "clientprovisioninghintsinfo.ClientProvisioningHintsInfo"
 *         }
 *     ]
 * }
 */