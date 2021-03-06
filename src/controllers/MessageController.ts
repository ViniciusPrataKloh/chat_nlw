import { Request, Response } from "express";
import { MessageService } from "../services/MessagesService";

class MessagesController {
    async create(request: Request, response: Response) {
        const { admin_id, text, user_id } = request.body;

        const messageService = new MessageService();

        const message = await messageService.create({
            admin_id,
            text,
            user_id
        });

        return response.json(message);
    }

    async getUserMessages(request: Request, response: Response) {
        const { id } = request.params;

        const messageService = new MessageService();

        const listMessages = await messageService.listMessagesByUser(id);

        return response.json(listMessages);
    }
}

export { MessagesController }