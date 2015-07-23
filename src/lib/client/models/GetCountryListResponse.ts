import model = require('../Model');
import countryinfo = require('./CountryInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetCountryListResponse extends model.Model {

    public records:countryinfo.CountryInfo[];

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
            {property: 'records', Class: countryinfo.CountryInfo, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    public getClassName() {
        return 'GetCountryListResponse';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "GetCountryListResponse",
 *     "imports": [
 *         "countryinfo.CountryInfo",
 *         "navigationinfo.NavigationInfo",
 *         "paginginfo.PagingInfo"
 *     ],
 *     "properties": [
 *         {
 *             "type": "countryinfo.CountryInfo[]",
 *             "items": {
 *                 "$ref": "#/definitions/CountryInfo"
 *             },
 *             "$name": "records",
 *             "isRequired": false
 *         },
 *         {
 *             "$ref": "#/definitions/NavigationInfo",
 *             "description": "Information on navigation",
 *             "$name": "navigation",
 *             "isRequired": true,
 *             "type": "navigationinfo.NavigationInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/PagingInfo",
 *             "description": "Information on paging",
 *             "$name": "paging",
 *             "isRequired": true,
 *             "type": "paginginfo.PagingInfo"
 *         }
 *     ]
 * }
 */