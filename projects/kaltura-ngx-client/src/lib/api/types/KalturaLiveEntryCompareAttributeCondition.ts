
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveEntryCompareAttribute } from './KalturaLiveEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaLiveEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaLiveEntryCompareAttribute;
}


export class KalturaLiveEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaLiveEntryCompareAttribute;

    constructor(data? : KalturaLiveEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaLiveEntryCompareAttribute, subType : 'KalturaLiveEntryCompareAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveEntryCompareAttributeCondition'] = KalturaLiveEntryCompareAttributeCondition;