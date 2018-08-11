
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetroPcsDistributionProviderBaseFilter, KalturaMetroPcsDistributionProviderBaseFilterArgs } from './KalturaMetroPcsDistributionProviderBaseFilter';

export interface KalturaMetroPcsDistributionProviderFilterArgs  extends KalturaMetroPcsDistributionProviderBaseFilterArgs {
    
}


export class KalturaMetroPcsDistributionProviderFilter extends KalturaMetroPcsDistributionProviderBaseFilter {

    

    constructor(data? : KalturaMetroPcsDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetroPcsDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMetroPcsDistributionProviderFilter'] = KalturaMetroPcsDistributionProviderFilter;