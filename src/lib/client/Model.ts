/// <reference path="../../typings/externals.d.ts" />

import context = require('../core/Context');

export class Model {

    context:context.Context;

    constructor(context:context.Context, data?:any) {

        this.context = context;

        data = data || {};

        this.getPropertyMappings().forEach((mapping)=> {

            var Class = mapping.Class,
                prop = mapping.property;

            if (!data.hasOwnProperty(prop)) {
                if (mapping.isRequired) console.warn('Required property "' + prop + '" not defined');
                return;
            }

            var processProperty = (dataPart)=> {

                if (!Class || typeof Class !== 'function') { // primitives & enums

                    return dataPart;

                } else {

                    return new Class(this.context, dataPart);

                }

            };

            if (mapping.isArray) {

                this[prop] = data[prop].map(processProperty);

            } else {

                this[prop] = processProperty(data[prop]);

            }

        });

    }

    protected getPropertyMappings():ModelPropertyMapping[] {
        return [];
    }

    public getClassName() {
        return 'Model';
    }

}

export interface ModelPropertyMapping {
    property:string;
    Class?: typeof Model|any;
    isArray: boolean;
    isRequired: boolean;
}

export function $get(context:context.Context, data?:any):Model {
    return new Model(data);
}
