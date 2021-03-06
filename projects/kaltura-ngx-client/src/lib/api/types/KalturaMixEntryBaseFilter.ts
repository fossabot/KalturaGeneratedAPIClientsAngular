
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayableEntryFilter, KalturaPlayableEntryFilterArgs } from './KalturaPlayableEntryFilter';

export interface KalturaMixEntryBaseFilterArgs  extends KalturaPlayableEntryFilterArgs {
    
}


export class KalturaMixEntryBaseFilter extends KalturaPlayableEntryFilter {

    

    constructor(data? : KalturaMixEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMixEntryBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMixEntryBaseFilter'] = KalturaMixEntryBaseFilter;