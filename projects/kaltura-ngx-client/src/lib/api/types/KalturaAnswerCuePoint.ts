
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaString } from './KalturaString';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaAnswerCuePointArgs  extends KalturaCuePointArgs {
    parentId? : string;
	quizUserEntryId? : string;
	answerKey? : string;
	openAnswer? : string;
	feedback? : string;
}


export class KalturaAnswerCuePoint extends KalturaCuePoint {

    parentId : string;
	quizUserEntryId : string;
	answerKey : string;
	openAnswer : string;
	readonly isCorrect : KalturaNullableBoolean;
	readonly correctAnswerKeys : KalturaString[];
	readonly explanation : string;
	feedback : string;

    constructor(data? : KalturaAnswerCuePointArgs)
    {
        super(data);
        if (typeof this.correctAnswerKeys === 'undefined') this.correctAnswerKeys = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnswerCuePoint' },
				parentId : { type : 's' },
				quizUserEntryId : { type : 's' },
				answerKey : { type : 's' },
				openAnswer : { type : 's' },
				isCorrect : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				correctAnswerKeys : { type : 'a', readOnly : true, subTypeConstructor : KalturaString, subType : 'KalturaString' },
				explanation : { type : 's', readOnly : true },
				feedback : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAnswerCuePoint'] = KalturaAnswerCuePoint;