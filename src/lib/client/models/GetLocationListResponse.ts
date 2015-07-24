import model = require('../Model');
import locationinfo = require('./LocationInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetLocationListResponse extends model.Model {

    /**
     * List of locations
     */
    public records:locationinfo.LocationInfo[];

    /**
     * Information on navigation
     */
    public navigation:navigationinfo.NavigationInfo;

    /**
     * Information on paging
     */
    public paging:paginginfo.PagingInfo;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: locationinfo.LocationInfo, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetLocationListResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}