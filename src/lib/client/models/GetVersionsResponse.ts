import model = require('../Model');
import versioninfo = require('./VersionInfo');

export class GetVersionsResponse extends model.Model {

    /**
     * Сanonical URI of the API version
     */
    public uri:string;

    /**
     * Full API version information: uri, number, release date
     */
    public apiVersions:versioninfo.VersionInfo[];

    /**
     * Server version
     */
    public serverVersion:string;

    /**
     * Server revision
     */
    public serverRevision:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'apiVersions', Class: versioninfo.VersionInfo, isArray: true,isRequired: false},
            {property: 'serverVersion', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serverRevision', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetVersionsResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}