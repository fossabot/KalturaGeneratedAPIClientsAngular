
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItemFilter, KalturaPermissionItemFilterArgs } from './KalturaPermissionItemFilter';

export interface KalturaApiParameterPermissionItemBaseFilterArgs  extends KalturaPermissionItemFilterArgs {
    
}


export class KalturaApiParameterPermissionItemBaseFilter extends KalturaPermissionItemFilter {

    

    constructor(data? : KalturaApiParameterPermissionItemBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiParameterPermissionItemBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaApiParameterPermissionItemBaseFilter'] = KalturaApiParameterPermissionItemBaseFilter;