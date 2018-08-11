
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSshImportJobData, KalturaSshImportJobDataArgs } from './KalturaSshImportJobData';

export interface KalturaDropFolderImportJobDataArgs  extends KalturaSshImportJobDataArgs {
    dropFolderFileId? : number;
}


export class KalturaDropFolderImportJobData extends KalturaSshImportJobData {

    dropFolderFileId : number;

    constructor(data? : KalturaDropFolderImportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderImportJobData' },
				dropFolderFileId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDropFolderImportJobData'] = KalturaDropFolderImportJobData;