import model = require('../Model');
import navigationinfo = require('./NavigationInfo');

export class ExtensionActiveCallsResponse extends model.Model {

    /**
     * Standard collection metadata
     */
    public perPage:navigationinfo.NavigationInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'perPage', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ExtensionActiveCallsResponse';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionActiveCallsResponse",
 *     "imports": [
 *         "navigationinfo.NavigationInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Standard collection metadata",
 *             "$name": "perPage",
 *             "isRequired": false,
 *             "type": "navigationinfo.NavigationInfo"
 *         }
 *     ]
 * }
 */