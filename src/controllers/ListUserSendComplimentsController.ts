import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";



class ListUserSendComplimentsController {
    async handle(request: Request, response: Response){

        const { user_id } = request;

        const listUserSendComplimentsServices = new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsServices.execute(
            user_id
        );

        return response.json(compliments);
    }
}

export { ListUserSendComplimentsController }