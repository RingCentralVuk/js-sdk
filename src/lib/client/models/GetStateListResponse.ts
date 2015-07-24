import model = require('../Model');
import getstateinforesponse = require('./GetStateInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetStateListResponse extends model.Model {

    /**
     * List of states
     */
    public records:getstateinforesponse.GetStateInfoResponse[];

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
            {property: 'records', Class: getstateinforesponse.GetStateInfoResponse, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetStateListResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}