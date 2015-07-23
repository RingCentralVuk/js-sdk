import model = require('../Model');

export class FormattingLocaleInfo extends model.Model {

    /**
     * Internal identifier of a formatting language
     */
    public id:string;

    /**
     * Localization code of a formatting language
     */
    public localeCode:string;

    /**
     * Official name of a formatting language
     */
    public name:string;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'localeCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'FormattingLocaleInfo';
    }

}