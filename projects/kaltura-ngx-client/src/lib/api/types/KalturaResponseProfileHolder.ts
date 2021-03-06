
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseResponseProfile, KalturaBaseResponseProfileArgs } from './KalturaBaseResponseProfile';

export interface KalturaResponseProfileHolderArgs  extends KalturaBaseResponseProfileArgs {
    id? : number;
	systemName? : string;
}


export class KalturaResponseProfileHolder extends KalturaBaseResponseProfile {

    id : number;
	systemName : string;

    constructor(data? : KalturaResponseProfileHolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResponseProfileHolder' },
				id : { type : 'n' },
				systemName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaResponseProfileHolder'] = KalturaResponseProfileHolder;