import model = require('../Model');

export class PermissionInfo extends model.Model {

    /**
     * Specifies if a permission is enabled or not
     */
    public enabled:boolean;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'enabled', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'PermissionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}