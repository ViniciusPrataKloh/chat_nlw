import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRespository } from "../repositories/MessagesRepositories";

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}


class MessageService {
    private messageRepository: Repository<Message>;

    constructor() {
        this.messageRepository = getCustomRepository(MessagesRespository);
    }

    async create({ admin_id, text, user_id }: IMessageCreate) {

        const message = this.messageRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.messageRepository.save(message);

        return message;
    }

    async listMessagesByUser(user_id: string) {

        const listMessages = await this.messageRepository.find({
            where: { user_id },
            relations: ["user"]
        });

        return listMessages;
    }
}

export { MessageService }