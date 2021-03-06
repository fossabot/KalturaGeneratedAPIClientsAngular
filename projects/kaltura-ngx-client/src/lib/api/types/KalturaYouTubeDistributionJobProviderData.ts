
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaYouTubeDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	thumbAssetFilePath? : string;
	thumbAssetId? : string;
	captionAssetIds? : string;
	sftpDirectory? : string;
	sftpMetadataFilename? : string;
	currentPlaylists? : string;
	newPlaylists? : string;
	submitXml? : string;
	updateXml? : string;
	deleteXml? : string;
	googleClientId? : string;
	googleClientSecret? : string;
	googleTokenData? : string;
	captionsCsvMap? : string;
	submitCsvMap? : string;
	updateCsvMap? : string;
	deleteVideoIds? : string;
}


export class KalturaYouTubeDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	thumbAssetFilePath : string;
	thumbAssetId : string;
	captionAssetIds : string;
	sftpDirectory : string;
	sftpMetadataFilename : string;
	currentPlaylists : string;
	newPlaylists : string;
	submitXml : string;
	updateXml : string;
	deleteXml : string;
	googleClientId : string;
	googleClientSecret : string;
	googleTokenData : string;
	captionsCsvMap : string;
	submitCsvMap : string;
	updateCsvMap : string;
	deleteVideoIds : string;

    constructor(data? : KalturaYouTubeDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYouTubeDistributionJobProviderData' },
				videoAssetFilePath : { type : 's' },
				thumbAssetFilePath : { type : 's' },
				thumbAssetId : { type : 's' },
				captionAssetIds : { type : 's' },
				sftpDirectory : { type : 's' },
				sftpMetadataFilename : { type : 's' },
				currentPlaylists : { type : 's' },
				newPlaylists : { type : 's' },
				submitXml : { type : 's' },
				updateXml : { type : 's' },
				deleteXml : { type : 's' },
				googleClientId : { type : 's' },
				googleClientSecret : { type : 's' },
				googleTokenData : { type : 's' },
				captionsCsvMap : { type : 's' },
				submitCsvMap : { type : 's' },
				updateCsvMap : { type : 's' },
				deleteVideoIds : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaYouTubeDistributionJobProviderData'] = KalturaYouTubeDistributionJobProviderData;