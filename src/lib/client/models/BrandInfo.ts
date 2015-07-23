import model = require('../Model');
import countryinfo = require('./CountryInfo');

export class BrandInfo extends model.Model {

    /**
     * Internal identifier of a brand
     */
    public id:string;

    /**
     * Brand name, for example  RingCentral UK ,  ClearFax 
     */
    public name:string;

    /**
     * Home country information
     */
    public homeCountry:countryinfo.CountryInfo;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'BrandInfo';
    }

}