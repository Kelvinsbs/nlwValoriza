import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
 async execute(name: string){
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if(!name){
        throw new Error("Nome Incorreto!");
    }

    // esse findOne é igual ao um select simples com where pesquisando pelo nome passado
    const tagAlreadyExist = await tagsRepositories.findOne({
        name
    })
    if(tagAlreadyExist){
        throw new Error("Ja existe uma Tag com esse nome.");
    }

    const tag = tagsRepositories.create({
        name
    });
    
    await tagsRepositories.save(tag);

    return tag;
 }
}

export { CreateTagService }