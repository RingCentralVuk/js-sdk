import model = require('../Model');

export class ExtensionStatusInfo extends model.Model {

    /**
     * A free-form user comment, describing the status change reason
     */
    public comment:string;

    /**
     * Type of suspension
     */
    public reason:ExtensionStatusInfoReason;

    protected getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'comment', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reason', Class: ExtensionStatusInfoReason, isArray: false,isRequired: false}
        ];

    }

    public getClassName() {
        return 'ExtensionStatusInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ExtensionStatusInfoReason {
    Voluntarily = <any>'Voluntarily',
    Involuntarily = <any>'Involuntarily'
}