import { User } from "../entities";
import { HTTPForbiddenError } from "../util/ErrorService";
import * as jwt from "jsonwebtoken";

class AuthService {
    async signin(email: string, password: string) {
        const user = await User.findOne({ email, password });
        if (!user) {
            throw new HTTPForbiddenError("Invalid Authentication Credentials");
        } else {
            const accessToken = this.signNewAccessToken(user);
            return { accessToken };
        }
    }

    async signup(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) {
        const user = await User.findOne({ email });
        if (user) {
            throw new HTTPForbiddenError(
                "User already exists with the given email address"
            );
        } else {
            const newUser = new User();
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.email = email;
            newUser.password = password;
            await newUser.save();
            const accessToken = this.signNewAccessToken(newUser);
            return { accessToken };
        }
    }

    signNewAccessToken(user: User) {
        const jwtsecret = process.env.JWTSECRET;
        if (!jwtsecret) {
            throw new Error("JWTSSECRET not present in .env file");
        }
        return jwt.sign(
            {
                userId: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                isAdmin: user.isAdmin,
                email: user.email,
            },
            jwtsecret
        );
    }
}

export default new AuthService();
