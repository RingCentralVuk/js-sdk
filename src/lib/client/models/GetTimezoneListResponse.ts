import model = require('../Model');
import gettimezoneinforesponse = require('./GetTimezoneInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetTimezoneListResponse extends model.Model {

    /**
     * List of timezones
     */
    public records:gettimezoneinforesponse.GetTimezoneInfoResponse[];

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
            {property: 'records', Class: gettimezoneinforesponse.GetTimezoneInfoResponse, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetTimezoneListResponse';
    }

}