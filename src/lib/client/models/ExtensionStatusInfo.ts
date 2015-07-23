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

}

export enum ExtensionStatusInfoReason {
    Voluntarily = <any>'Voluntarily',
    Involuntarily = <any>'Involuntarily'
}

/**
 * Swagger definition JSON used for CodeGen:
 *
 * {
 *     "name": "ExtensionStatusInfo",
 *     "imports": [],
 *     "properties": [
 *         {
 *             "type": "string",
 *             "description": "A free-form user comment, describing the status change reason",
 *             "$name": "comment",
 *             "isRequired": false
 *         },
 *         {
 *             "type": "ExtensionStatusInfoReason",
 *             "enum": [
 *                 "Voluntarily",
 *                 "Involuntarily"
 *             ],
 *             "description": "Type of suspension",
 *             "$name": "reason",
 *             "isRequired": false
 *         }
 *     ]
 * }
 */