import model = require('../Model');
import getmessageinforesponse = require('./GetMessageInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetMessageList extends model.Model {

    /**
     * List of records with message information
     */
    public records:getmessageinforesponse.GetMessageInfoResponse[];

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
            {property: 'records', Class: getmessageinforesponse.GetMessageInfoResponse, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'GetMessageList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}