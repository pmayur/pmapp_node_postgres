import validator from 'validator';
import { HTTPBadRequestError } from './ErrorService';

class ValidatorService {
    validateEmail(email: string) {
        if (!validator.isEmail(email)) {
            throw new HTTPBadRequestError("Please provide a valid email address");
        }
    }
}
export default new ValidatorService();
