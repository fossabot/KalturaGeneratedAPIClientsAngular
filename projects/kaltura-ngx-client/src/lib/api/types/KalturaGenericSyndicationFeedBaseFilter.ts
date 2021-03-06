
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';

export interface KalturaGenericSyndicationFeedBaseFilterArgs  extends KalturaBaseSyndicationFeedFilterArgs {
    
}


export class KalturaGenericSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {

    

    constructor(data? : KalturaGenericSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericSyndicationFeedBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericSyndicationFeedBaseFilter'] = KalturaGenericSyndicationFeedBaseFilter;