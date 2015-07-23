import model = require('../Model');

export class AccountStatusInfo extends model.Model {

    /**
     * Reason
     */
    public reason:string;

    /**
     * Comment
     */
    public comment:string;

    /**
     * Lifetime
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