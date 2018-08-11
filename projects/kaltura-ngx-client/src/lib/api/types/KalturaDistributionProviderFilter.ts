
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderBaseFilter, KalturaDistributionProviderBaseFilterArgs } from './KalturaDistributionProviderBaseFilter';

export interface KalturaDistributionProviderFilterArgs  extends KalturaDistributionProviderBaseFilterArgs {
    
}


export class KalturaDistributionProviderFilter extends KalturaDistributionProviderBaseFilter {

    

    constructor(data? : KalturaDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionProviderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionProviderFilter'] = KalturaDistributionProviderFilter;