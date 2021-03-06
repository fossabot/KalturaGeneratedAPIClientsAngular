
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProfile, KalturaDrmProfileArgs } from './KalturaDrmProfile';

export interface KalturaFairplayDrmProfileArgs  extends KalturaDrmProfileArgs {
    publicCertificate? : string;
}


export class KalturaFairplayDrmProfile extends KalturaDrmProfile {

    publicCertificate : string;

    constructor(data? : KalturaFairplayDrmProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFairplayDrmProfile' },
				publicCertificate : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFairplayDrmProfile'] = KalturaFairplayDrmProfile;