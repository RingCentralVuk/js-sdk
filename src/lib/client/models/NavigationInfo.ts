import model = require('../Model');
import navigationinfopage = require('./NavigationInfoPage');

export class NavigationInfo extends model.Model {

    /**
     * Canonical URI for the first page of the list
     */
    public firstPage:navigationinfopage.NavigationInfoPage;

    /**
     * Canonical URI for the next page of the list
     */
    public nextPage:navigationinfopage.NavigationInfoPage;

    /**
     * Canonical URI for the previous page of the list
     */
    public previousPage:navigationinfopage.NavigationInfoPage;

    /**
     * Canonical URI for the last page of the list
     */
    public lastPage:navigationinfopage.NavigationInfoPage;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'firstPage', Class: navigationinfopage.NavigationInfoPage, isArray: false,isRequired: false},
            {property: 'nextPage', Class: navigationinfopage.NavigationInfoPage, isArray: false,isRequired: false},
            {property: 'previousPage', Class: navigationinfopage.NavigationInfoPage, isArray: false,isRequired: false},
            {property: 'lastPage', Class: navigationinfopage.NavigationInfoPage, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'NavigationInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "NavigationInfo",
 *     "imports": [
 *         "navigationinfopage.NavigationInfoPage"
 *     ],
 *     "properties": [
 *         {
 *             "type": "navigationinfopage.NavigationInfoPage",
 *             "description": "Canonical URI for the first page of the list",
 *             "$name": "firstPage",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "navigationinfopage.NavigationInfoPage",
 *             "description": "Canonical URI for the next page of the list",
 *             "$name": "nextPage",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "navigationinfopage.NavigationInfoPage",
 *             "description": "Canonical URI for the previous page of the list",
 *             "$name": "previousPage",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "navigationinfopage.NavigationInfoPage",
 *             "description": "Canonical URI for the last page of the list",
 *             "$name": "lastPage",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */