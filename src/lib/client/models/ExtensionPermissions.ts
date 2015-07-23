import model = require('../Model');
import permissioninfo = require('./PermissionInfo');

export class ExtensionPermissions extends model.Model {

    /**
     * Admin permission
     */
    public admin:permissioninfo.PermissionInfo;

    /**
     * International Calling permission
     */
    public internationalCalling:permissioninfo.PermissionInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'admin', Class: permissioninfo.PermissionInfo, isArray: false,isRequired: false},
            {property: 'internationalCalling', Class: permissioninfo.PermissionInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ExtensionPermissions';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionPermissions",
 *     "imports": [
 *         "permissioninfo.PermissionInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/PermissionInfo",
 *             "description": "Admin permission",
 *             "$name": "admin",
 *             "isRequired": false,
 *             "type": "permissioninfo.PermissionInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/PermissionInfo",
 *             "description": "International Calling permission",
 *             "$name": "internationalCalling",
 *             "isRequired": false,
 *             "type": "permissioninfo.PermissionInfo"
 *         }
 *     ]
 * }
 */