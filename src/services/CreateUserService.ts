import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean; //? serve para informar que o campo é opcional
}

class CreateUserService {
    async execute({name, email, admin} : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error("E-mail incorreto");
            console.log("E-mail incorreto");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if(userAlreadyExists){
            throw new Error("Ja existe um usuário com esse email");
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }