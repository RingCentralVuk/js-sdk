import model = require('../Model');
import getmessageinforesponse = require('./GetMessageInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetMessageList extends model.Model {

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

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetMessageList",
 *     "imports": [
 *         "getmessageinforesponse.GetMessageInfoResponse",
 *         "navigationinfo.NavigationInfo",
 *         "paginginfo.PagingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "getmessageinforesponse.GetMessageInfoResponse[]",
 *             "items": {
 *                 "$ref": "#/definitions/GetMessageInfoResponse"
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