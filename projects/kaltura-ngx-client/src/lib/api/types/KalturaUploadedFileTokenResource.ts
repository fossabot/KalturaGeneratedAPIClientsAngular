
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDataCenterContentResource, KalturaGenericDataCenterContentResourceArgs } from './KalturaGenericDataCenterContentResource';

export interface KalturaUploadedFileTokenResourceArgs  extends KalturaGenericDataCenterContentResourceArgs {
    token? : string;
}


export class KalturaUploadedFileTokenResource extends KalturaGenericDataCenterContentResource {

    token : string;

    constructor(data? : KalturaUploadedFileTokenResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadedFileTokenResource' },
				token : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUploadedFileTokenResource'] = KalturaUploadedFileTokenResource;