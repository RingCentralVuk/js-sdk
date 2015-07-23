import model = require('../Model');
import calllogrecord = require('./CallLogRecord');
import paginginfo = require('./PagingInfo');
import navigationinfo = require('./NavigationInfo');

export class AccountActiveCallsResponse extends model.Model {

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
        return 'AccountActiveCallsResponse';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "AccountActiveCallsResponse",
 *     "imports": [
 *         "calllogrecord.CallLogRecord",
 *         "paginginfo.PagingInfo",
 *         "navigationinfo.NavigationInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "calllogrecord.CallLogRecord[]",
 *             "items": {
 *                 "$ref": "#/definitions/CallLogRecord"
 *             },
 *             "$name": "records",
 *             "isRequired": true
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": true,
 *             "type": "paginginfo.PagingInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": true,
 *             "type": "navigationinfo.NavigationInfo"
 *         }
 *     ]
 * }
 */