import model = require('../Model');
import calllogrecord = require('./CallLogRecord');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class ExtensionActiveCallsResponse extends model.Model {

    /**
     * List of call log records
     */
    public records:calllogrecord.CallLogRecord[];

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
            {property: 'records', Class: calllogrecord.CallLogRecord, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ExtensionActiveCallsResponse';
    }

}