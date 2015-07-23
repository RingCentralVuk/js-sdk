import model = require('../Model');
import locationinfo = require('./LocationInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetLocationListResponse extends model.Model {

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

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetLocationListResponse",
 *     "imports": [
 *         "locationinfo.LocationInfo",
 *         "navigationinfo.NavigationInfo",
 *         "paginginfo.PagingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "locationinfo.LocationInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/LocationInfo"
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