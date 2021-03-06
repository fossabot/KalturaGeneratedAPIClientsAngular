
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderBaseFilter, KalturaGenericDistributionProviderBaseFilterArgs } from './KalturaGenericDistributionProviderBaseFilter';

export interface KalturaGenericDistributionProviderFilterArgs  extends KalturaGenericDistributionProviderBaseFilterArgs {
    
}


export class KalturaGenericDistributionProviderFilter extends KalturaGenericDistributionProviderBaseFilter {

    

    constructor(data? : KalturaGenericDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericDistributionProviderFilter'] = KalturaGenericDistributionProviderFilter;