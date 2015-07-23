import model = require('../Model');
import calllogrecord = require('./CallLogRecord');
import paginginfo = require('./PagingInfo');
import navigationinfo = require('./NavigationInfo');

export class ExtensionCallLogResponse extends model.Model {

    /**
     * List of call log records
     */
    public records:calllogrecord.CallLogRecord[];

    /**
     * Information on paging
     */
    public paging:paginginfo.PagingInfo;

    /**
     * Information on navigation
     */
    public navigation:navigationinfo.NavigationInfo;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: calllogrecord.CallLogRecord, isArray: true,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'ExtensionCallLogResponse';
    }

}