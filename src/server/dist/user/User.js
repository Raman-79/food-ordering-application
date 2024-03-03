"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../lib/db/db"));
const node_crypto_1 = require("node:crypto");
class User {
    static generateHash(salt, password) {
        const hashedPassword = (0, node_crypto_1.createHmac)("sha256", salt)
            .update(password)
            .digest("hex");
        return hashedPassword;
    }
    static createUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = payload;
            const salt = (0, node_crypto_1.randomBytes)(32).toString("hex");
            const hashedPassword = User.generateHash(salt, password);
            try {
                return yield db_1.default.user.create({
                    data: {
                        name,
                        email,
                        salt,
                        password: hashedPassword,
                        profileImageUrl: ""
                    },
                });
            }
            catch (error) {
                // Handle error appropriately
                console.error("Error creating user:", error);
                throw error; // Rethrow the error to be handled upstream
            }
        });
    }
}
exports.default = User;
