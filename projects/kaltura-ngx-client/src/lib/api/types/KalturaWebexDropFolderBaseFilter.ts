
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFilter, KalturaDropFolderFilterArgs } from './KalturaDropFolderFilter';

export interface KalturaWebexDropFolderBaseFilterArgs  extends KalturaDropFolderFilterArgs {
    
}


export class KalturaWebexDropFolderBaseFilter extends KalturaDropFolderFilter {

    

    constructor(data? : KalturaWebexDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWebexDropFolderBaseFilter'] = KalturaWebexDropFolderBaseFilter;