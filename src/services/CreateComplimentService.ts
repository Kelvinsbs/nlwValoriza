import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";



interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({tag_id, user_receiver, user_sender, message}: IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositores = getCustomRepository(UsersRepositories);

        const usersReceiverExists = await usersRepositores.findOne(user_receiver) // por padrao, o findOne sempre usa o id, entao nesse caso, só mandar o user_receiver é o suficiente

        if(user_sender === user_receiver){
            throw new Error("Usuário Recebedor Incorreto");
        }

        if(!usersReceiverExists){
            throw new Error("Usuário Recebedor Não existe.");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }