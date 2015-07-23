import model = require('../Model');

export class AccountStatusInfo extends model.Model {

    /**
     * Foo
     */
    public reason:string;

    /**
     * Foo
     */
    public comment:string;

    /**
     * Foo
     */
    public lifetime:string;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'reason', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'comment', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lifetime', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'AccountStatusInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "AccountStatusInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "Foo",
 *             "$name": "reason",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Foo",
 *             "$name": "comment",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "string",
 *             "description": "Foo",
 *             "$name": "lifetime",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */