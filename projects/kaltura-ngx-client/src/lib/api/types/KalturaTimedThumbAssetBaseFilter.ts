
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbAssetFilter, KalturaThumbAssetFilterArgs } from './KalturaThumbAssetFilter';

export interface KalturaTimedThumbAssetBaseFilterArgs  extends KalturaThumbAssetFilterArgs {
    
}


export class KalturaTimedThumbAssetBaseFilter extends KalturaThumbAssetFilter {

    

    constructor(data? : KalturaTimedThumbAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimedThumbAssetBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTimedThumbAssetBaseFilter'] = KalturaTimedThumbAssetBaseFilter;