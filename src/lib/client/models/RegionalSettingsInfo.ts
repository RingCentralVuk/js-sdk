import model = require('../Model');
import countryinfo = require('./CountryInfo');
import timezoneinfo = require('./TimezoneInfo');
import languageinfo = require('./LanguageInfo');
import greetinglanguageinfo = require('./GreetingLanguageInfo');
import formattinglocaleinfo = require('./FormattingLocaleInfo');

export class RegionalSettingsInfo extends model.Model {

    /**
     * Extension country information
     */
    public homeCountry:countryinfo.CountryInfo;

    /**
     * Extension timezone information
     */
    public timezone:timezoneinfo.TimezoneInfo;

    /**
     * User interface language data
     */
    public language:languageinfo.LanguageInfo;

    /**
     * Information on language used for telephony greetings
     */
    public greetingLanguage:greetinglanguageinfo.GreetingLanguageInfo;

    /**
     * Formatting language preferences for numbers, dates and currencies
     */
    public formattingLocale:formattinglocaleinfo.FormattingLocaleInfo;


    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false,isRequired: false},
            {property: 'timezone', Class: timezoneinfo.TimezoneInfo, isArray: false,isRequired: false},
            {property: 'language', Class: languageinfo.LanguageInfo, isArray: false,isRequired: false},
            {property: 'greetingLanguage', Class: greetinglanguageinfo.GreetingLanguageInfo, isArray: false,isRequired: false},
            {property: 'formattingLocale', Class: formattinglocaleinfo.FormattingLocaleInfo, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'RegionalSettingsInfo';
    }

}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "RegionalSettingsInfo",
 *     "imports": [
 *         "countryinfo.CountryInfo",
 *         "timezoneinfo.TimezoneInfo",
 *         "languageinfo.LanguageInfo",
 *         "greetinglanguageinfo.GreetingLanguageInfo",
 *         "formattinglocaleinfo.FormattingLocaleInfo"
 *     ],
 *     "properties": [
 *         {
 *             "$ref": "#/definitions/CountryInfo",
 *             "description": "Extension country information",
 *             "$name": "homeCountry",
 *             "isRequired": false,
 *             "type": "countryinfo.CountryInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/TimezoneInfo",
 *             "description": "Extension timezone information",
 *             "$name": "timezone",
 *             "isRequired": false,
 *             "type": "timezoneinfo.TimezoneInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/LanguageInfo",
 *             "description": "User interface language data",
 *             "$name": "language",
 *             "isRequired": false,
 *             "type": "languageinfo.LanguageInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/GreetingLanguageInfo",
 *             "description": "Information on language used for telephony greetings",
 *             "$name": "greetingLanguage",
 *             "isRequired": false,
 *             "type": "greetinglanguageinfo.GreetingLanguageInfo"
 *         },
 *         {
 *             "$ref": "#/definitions/FormattingLocaleInfo",
 *             "description": "Formatting language preferences for numbers, dates and currencies",
 *             "$name": "formattingLocale",
 *             "isRequired": false,
 *             "type": "formattinglocaleinfo.FormattingLocaleInfo"
 *         }
 *     ]
 * }
 */