
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayableEntryMatchAttribute } from './KalturaPlayableEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaPlayableEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaPlayableEntryMatchAttribute;
}


export class KalturaPlayableEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaPlayableEntryMatchAttribute;

    constructor(data? : KalturaPlayableEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayableEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaPlayableEntryMatchAttribute, subType : 'KalturaPlayableEntryMatchAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayableEntryMatchAttributeCondition'] = KalturaPlayableEntryMatchAttributeCondition;