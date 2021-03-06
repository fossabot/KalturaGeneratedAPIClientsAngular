
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaOrConditionArgs  extends KalturaConditionArgs {
    conditions? : KalturaCondition[];
}


export class KalturaOrCondition extends KalturaCondition {

    conditions : KalturaCondition[];

    constructor(data? : KalturaOrConditionArgs)
    {
        super(data);
        if (typeof this.conditions === 'undefined') this.conditions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOrCondition' },
				conditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaOrCondition'] = KalturaOrCondition;