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