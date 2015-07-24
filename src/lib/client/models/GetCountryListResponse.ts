import model = require('../Model');
import countryinfo = require('./CountryInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetCountryListResponse extends model.Model {

    /**
     * List of countries with the country data
     */
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

    // CUSTOM METHODS
    // CUSTOM METHODS

}