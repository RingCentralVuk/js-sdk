import model = require('../Model');
import contactaddressinfo = require('./ContactAddressInfo');

export class ContactInfo extends model.Model {

    /**
     * For User extension type only. Extension user first name
     */
    public firstName:string;

    /**
     * For User extension type only. Extension user last name
     */
    public lastName:string;

    /**
     * Extension user company name
     */
    public company:string;

    /**
     * Email of extension user
     */
    public email:string;

    /**
     * Extension user contact phone number
     */
    public businessPhone:string;

    /**
     * Business address of extension user company
     */
    public businessAddress:contactaddressinfo.ContactAddressInfo;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'firstName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lastName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'company', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'email', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessPhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessAddress', Class: contactaddressinfo.ContactAddressInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ContactInfo';
    }

}