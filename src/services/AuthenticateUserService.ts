import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        // Verificar email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Senha Incorreto.");
        }

        // verificar senha correta
        const passWordMatch = await compare(password, user.password)

        if(!passWordMatch){
            throw new Error("Email/Senha Incorreto.");
        }

        // gerar token
        const token = sign({
            email:user.email
        }, "649238590355d1c08ff3c5ad5af3d155", {
            subject : user.id,
            expiresIn: "1d"
        })
        
        return token;
    }
}

export { AuthenticateUserService }