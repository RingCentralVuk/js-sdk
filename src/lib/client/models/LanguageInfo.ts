import model = require('../Model');

export class LanguageInfo extends model.Model {

    /**
     * Internal identifier of a language
     */
    public id:string;

    /**
     * Canonical URI of a language
     */
    public uri:string;

    /**
     * Indicates whether a language is available as greeting language
     */
    public greeting:boolean;

    /**
     * Indicates whether a language is available as formatting locale
     */
    public formattingLocale:boolean;

    /**
     * Localization code of a language
     */
    public localeCode:string;

    /**
     * Official name of a language
     */
    public name:string;

    /**
     * Indicates whether a language is available as UI language
     */
    public ui:boolean;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'greeting', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'formattingLocale', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'localeCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'ui', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'LanguageInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}