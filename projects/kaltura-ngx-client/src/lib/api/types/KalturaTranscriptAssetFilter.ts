
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTranscriptAssetBaseFilter, KalturaTranscriptAssetBaseFilterArgs } from './KalturaTranscriptAssetBaseFilter';

export interface KalturaTranscriptAssetFilterArgs  extends KalturaTranscriptAssetBaseFilterArgs {
    
}


export class KalturaTranscriptAssetFilter extends KalturaTranscriptAssetBaseFilter {

    

    constructor(data? : KalturaTranscriptAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTranscriptAssetFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTranscriptAssetFilter'] = KalturaTranscriptAssetFilter;