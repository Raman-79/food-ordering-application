import prismaClient from "../lib/db/db";
import { createHmac, randomBytes } from 'node:crypto';

interface CreateUserInterface {
    name: string;
    email: string;
    password: string;
}

export interface GetUserTokenPayload {
    email: string;
    password: string;
}

class User {
    private static generateHash(salt: string, password: string) {
        const hashedPassword = createHmac("sha256", salt)
            .update(password)
            .digest("hex");
        return hashedPassword;
    }

    public static async createUser(payload: CreateUserInterface) {
        const { name, email, password } = payload;
        const salt = randomBytes(32).toString("hex");
        const hashedPassword = User.generateHash(salt, password);
        try {
            return await prismaClient.user.create({
                data: {
                    name,
                    email,
                    salt,
                    password:hashedPassword,
                    profileImageUrl:""
                },
            });
        } catch (error) {
            // Handle error appropriately
            console.error("Error creating user:", error);
            throw error; // Rethrow the error to be handled upstream
        }
    }
}

export default User;
