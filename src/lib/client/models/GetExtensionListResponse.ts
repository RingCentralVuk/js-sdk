import model = require('../Model');
import getextensioninforesponse = require('./GetExtensionInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetExtensionListResponse extends model.Model {

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

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetExtensionListResponse",
 *     "imports": [
 *         "getextensioninforesponse.GetExtensionInfoResponse",
 *         "navigationinfo.NavigationInfo",
 *         "paginginfo.PagingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "getextensioninforesponse.GetExtensionInfoResponse[]",
 *             "items": {
 *                 "$ref": "#/definitions/GetExtensionInfoResponse"
 *             },
 *             "$name": "records",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": false,
 *             "type": "navigationinfo.NavigationInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": false,
 *             "type": "paginginfo.PagingInfo"
 *         }
 *     ]
 * }
 */