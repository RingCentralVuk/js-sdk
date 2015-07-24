import model = require('../Model');
import getextensioninforesponse = require('./GetExtensionInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetExtensionListResponse extends model.Model {

    /**
     * List of extensions with extension information
     */
    public records:getextensioninforesponse.GetExtensionInfoResponse[];

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
            {property: 'records', Class: getextensioninforesponse.GetExtensionInfoResponse, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetExtensionListResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}