
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParamsFilter, KalturaAssetParamsFilterArgs } from './KalturaAssetParamsFilter';

export interface KalturaFlavorParamsBaseFilterArgs  extends KalturaAssetParamsFilterArgs {
    formatEqual? : KalturaContainerFormat;
}


export class KalturaFlavorParamsBaseFilter extends KalturaAssetParamsFilter {

    formatEqual : KalturaContainerFormat;

    constructor(data? : KalturaFlavorParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorParamsBaseFilter' },
				formatEqual : { type : 'es', subTypeConstructor : KalturaContainerFormat, subType : 'KalturaContainerFormat' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFlavorParamsBaseFilter'] = KalturaFlavorParamsBaseFilter;