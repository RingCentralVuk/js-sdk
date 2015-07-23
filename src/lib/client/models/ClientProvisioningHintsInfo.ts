import model = require('../Model');
import clientprovisioninghintinfo = require('./ClientProvisioningHintInfo');

export class ClientProvisioningHintsInfo extends model.Model {

    /**
     * Trial account expiration. Returned for trial accounts only
     */
    public trialState:clientprovisioninghintinfo.ClientProvisioningHintInfo;

    /**
     * User credentials expiration
     */
    public userCredentialState:clientprovisioninghintinfo.ClientProvisioningHintInfo;

    /**
     * Application version update. Returned only if the client current version is older than the latest version. 'actionRequired': 'true' means the application requires force updating to the latest version
     */
    public appVersionUpgrade:clientprovisioninghintinfo.ClientProvisioningHintInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'trialState', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false,isRequired: false},
            {property: 'userCredentialState', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false,isRequired: false},
            {property: 'appVersionUpgrade', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ClientProvisioningHintsInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ClientProvisioningHintsInfo",
 *     "imports": [
 *         "clientprovisioninghintinfo.ClientProvisioningHintInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/ClientProvisioningHintInfo",
 *             "description": "Trial account expiration. Returned for trial accounts only",
 *             "$name": "trialState",
 *             "isRequired": false,
 *             "type": "clientprovisioninghintinfo.ClientProvisioningHintInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ClientProvisioningHintInfo",
 *             "description": "User credentials expiration",
 *             "$name": "userCredentialState",
 *             "isRequired": false,
 *             "type": "clientprovisioninghintinfo.ClientProvisioningHintInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/ClientProvisioningHintInfo",
 *             "description": "Application version update. Returned only if the client current version is older than the latest version. 'actionRequired': 'true' means the application requires force updating to the latest version",
 *             "$name": "appVersionUpgrade",
 *             "isRequired": false,
 *             "type": "clientprovisioninghintinfo.ClientProvisioningHintInfo"
 *         }
 *     ]
 * }
 */