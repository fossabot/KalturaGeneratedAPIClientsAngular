
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDirectoryRestrictionType } from './KalturaDirectoryRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';

export interface KalturaDirectoryRestrictionArgs  extends KalturaBaseRestrictionArgs {
    directoryRestrictionType? : KalturaDirectoryRestrictionType;
}


export class KalturaDirectoryRestriction extends KalturaBaseRestriction {

    directoryRestrictionType : KalturaDirectoryRestrictionType;

    constructor(data? : KalturaDirectoryRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDirectoryRestriction' },
				directoryRestrictionType : { type : 'en', subTypeConstructor : KalturaDirectoryRestrictionType, subType : 'KalturaDirectoryRestrictionType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDirectoryRestriction'] = KalturaDirectoryRestriction;