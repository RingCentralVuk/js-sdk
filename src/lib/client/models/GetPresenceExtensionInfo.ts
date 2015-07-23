import model = require('../Model');

export class GetPresenceExtensionInfo extends model.Model {

    /**
     * Internal identifier of an extension
     */
    public id:string;

    /**
     * Canonical URI of an extension
     */
    public uri:string;

    /**
     * Extension number (usually 3 or 4 digits)
     */
    public extensionNumber:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetPresenceExtensionInfo';
    }

}