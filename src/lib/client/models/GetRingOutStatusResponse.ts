import model = require('../Model');
import ringoutstatusinfo = require('./RingOutStatusInfo');

export class GetRingOutStatusResponse extends model.Model {

    /**
     * Internal identifier of a RingOut call
     */
    public id:string;

    /**
     * RingOut status information
     */
    public status:ringoutstatusinfo.RingOutStatusInfo;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'status', Class: ringoutstatusinfo.RingOutStatusInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetRingOutStatusResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}