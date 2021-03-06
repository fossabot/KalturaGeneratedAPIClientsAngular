
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAsset, KalturaFlavorAssetArgs } from './KalturaFlavorAsset';

export interface KalturaLiveAssetArgs  extends KalturaFlavorAssetArgs {
    multicastIP? : string;
	multicastPort? : number;
}


export class KalturaLiveAsset extends KalturaFlavorAsset {

    multicastIP : string;
	multicastPort : number;

    constructor(data? : KalturaLiveAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveAsset' },
				multicastIP : { type : 's' },
				multicastPort : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveAsset'] = KalturaLiveAsset;