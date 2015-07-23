import model = require('../Model');

export class NavigationInfoPage extends model.Model {

    /**
     * Canonical URI
     */
    public uri:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'NavigationInfoPage';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "NavigationInfoPage",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Canonical URI",
 *             "$name": "uri",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */