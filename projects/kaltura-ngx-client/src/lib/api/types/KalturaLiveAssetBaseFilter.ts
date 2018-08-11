
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAssetFilter, KalturaFlavorAssetFilterArgs } from './KalturaFlavorAssetFilter';

export interface KalturaLiveAssetBaseFilterArgs  extends KalturaFlavorAssetFilterArgs {
    
}


export class KalturaLiveAssetBaseFilter extends KalturaFlavorAssetFilter {

    

    constructor(data? : KalturaLiveAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveAssetBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveAssetBaseFilter'] = KalturaLiveAssetBaseFilter;