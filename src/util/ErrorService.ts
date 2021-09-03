export default class HTTPError extends Error {
    constructor(public statusCode: number, public message: string) {
        super();
    }
}

export class HTTPBadRequestError extends HTTPError {
    constructor(public message: string = "Bad Request") {
        super(400, message);
    }
}

export class HTTPForbiddenError extends HTTPError {
    constructor(public message: string = "Forbidden") {
        super(403, message);
    }
}

export class HTTPUnauthorizedError extends HTTPError {
    constructor(public message: string = "Unauthorized") {
        super(401, message);
    }
}
