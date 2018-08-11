
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAppTokenBaseFilter, KalturaAppTokenBaseFilterArgs } from './KalturaAppTokenBaseFilter';

export interface KalturaAppTokenFilterArgs  extends KalturaAppTokenBaseFilterArgs {
    
}


export class KalturaAppTokenFilter extends KalturaAppTokenBaseFilter {

    

    constructor(data? : KalturaAppTokenFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAppTokenFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAppTokenFilter'] = KalturaAppTokenFilter;