import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean; //? serve para informar que o campo é opcional
    password: string; //atualmente ele esta como null entao talvez teria que adicionar a ?
}

class CreateUserService {
    async execute({name, email, admin, password} : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error("E-mail incorreto");
            console.log("E-mail incorreto");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        const passwordHash = await hash(password, 8)

        if(userAlreadyExists){
            throw new Error("Ja existe um usuário com esse email");
        }

        const user = usersRepository.create({
            name,
            email,
            admin,
            password : passwordHash,
        })

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }