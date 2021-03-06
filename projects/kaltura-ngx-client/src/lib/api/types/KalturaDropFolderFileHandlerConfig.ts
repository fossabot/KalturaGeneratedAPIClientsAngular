
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileHandlerType } from './KalturaDropFolderFileHandlerType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDropFolderFileHandlerConfigArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaDropFolderFileHandlerConfig extends KalturaObjectBase {

    readonly handlerType : KalturaDropFolderFileHandlerType;

    constructor(data? : KalturaDropFolderFileHandlerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderFileHandlerConfig' },
				handlerType : { type : 'es', readOnly : true, subTypeConstructor : KalturaDropFolderFileHandlerType, subType : 'KalturaDropFolderFileHandlerType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDropFolderFileHandlerConfig'] = KalturaDropFolderFileHandlerConfig;