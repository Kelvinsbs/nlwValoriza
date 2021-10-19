import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";


class CreateTagController {
    async handle(request: Request, response:Response){
        // O exemplo abaixo é uma desestruturação, para não precisar fazer de forma manual tipo
        /**
         * const data = request.body
         * data.name
         */
        const { name } = request.body; 
        const createTagService = new CreateTagService();

        const tag = await createTagService.execute(name);

        return response.json(tag);
    }
}

export { CreateTagController }