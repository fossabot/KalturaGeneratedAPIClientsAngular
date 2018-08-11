
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamAdminEntryCompareAttribute } from './KalturaLiveStreamAdminEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaLiveStreamAdminEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaLiveStreamAdminEntryCompareAttribute;
}


export class KalturaLiveStreamAdminEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaLiveStreamAdminEntryCompareAttribute;

    constructor(data? : KalturaLiveStreamAdminEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamAdminEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaLiveStreamAdminEntryCompareAttribute, subType : 'KalturaLiveStreamAdminEntryCompareAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamAdminEntryCompareAttributeCondition'] = KalturaLiveStreamAdminEntryCompareAttributeCondition;