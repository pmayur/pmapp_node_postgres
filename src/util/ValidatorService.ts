import validator from 'validator';
import { COMPLEXITY, STATUS, TYPE } from './Enums';
import { HTTPBadRequestError } from './ErrorService';

class ValidatorService {
    validateStatus(status: string): STATUS {
        switch(status.toLowerCase()) {
            case 'inprogress': return STATUS.INPROGRESS;
            case 'completed': return STATUS.COMPLETED;
            case 'needhelp': return STATUS.NEEDHELP;
            case 'new': return STATUS.NEW;
            default: throw new HTTPBadRequestError("Please provide valid status");

        }
    }
    validateComplexity(complexity: string):COMPLEXITY {
        switch(complexity.toLowerCase()) {
            case 'mid': return COMPLEXITY.MID;
            case 'high': return COMPLEXITY.HIGH;
            case 'low': return COMPLEXITY.LOW;
            default: throw new HTTPBadRequestError("Please provide valid type");

        }
    }
    validateType(type: string): TYPE {
        type = type.toLowerCase();
        switch(type) {
            case 'enhancement': return TYPE.ENHANCEMENT;
            case 'bug': return TYPE.BUG;
            case 'fix': return TYPE.FIX;
            case 'feature': return TYPE.FEATURE;
            case 'qa': return TYPE.QA;
            case 'test': return TYPE.TEST;
            default: throw new HTTPBadRequestError("Please provide valid type");
        }

    }
    validateEmail(email: string) {
        if (!validator.isEmail(email)) {
            throw new HTTPBadRequestError("Please provide a valid email address");
        }
    }
}
export default new ValidatorService();
