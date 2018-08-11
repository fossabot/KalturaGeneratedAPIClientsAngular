
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';

export interface KalturaWidevineFlavorParamsOutputArgs  extends KalturaFlavorParamsOutputArgs {
    widevineDistributionStartDate? : number;
	widevineDistributionEndDate? : number;
}


export class KalturaWidevineFlavorParamsOutput extends KalturaFlavorParamsOutput {

    widevineDistributionStartDate : number;
	widevineDistributionEndDate : number;

    constructor(data? : KalturaWidevineFlavorParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorParamsOutput' },
				widevineDistributionStartDate : { type : 'n' },
				widevineDistributionEndDate : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWidevineFlavorParamsOutput'] = KalturaWidevineFlavorParamsOutput;