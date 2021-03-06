
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMixEntryMatchAttribute } from './KalturaMixEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaMixEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaMixEntryMatchAttribute;
}


export class KalturaMixEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaMixEntryMatchAttribute;

    constructor(data? : KalturaMixEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMixEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaMixEntryMatchAttribute, subType : 'KalturaMixEntryMatchAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMixEntryMatchAttributeCondition'] = KalturaMixEntryMatchAttributeCondition;