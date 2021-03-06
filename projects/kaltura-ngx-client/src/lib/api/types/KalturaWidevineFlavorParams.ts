
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';

export interface KalturaWidevineFlavorParamsArgs  extends KalturaFlavorParamsArgs {
    
}


export class KalturaWidevineFlavorParams extends KalturaFlavorParams {

    

    constructor(data? : KalturaWidevineFlavorParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorParams' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWidevineFlavorParams'] = KalturaWidevineFlavorParams;