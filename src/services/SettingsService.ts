import { getCustomRepository } from "typeorm";
import { SettingsRespository } from "../repositories/SettingsRespository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {
    async create({ chat, username }: ISettingsCreate) {

        const settingRepository = getCustomRepository(SettingsRespository);

        const userExists = await settingRepository.findOne({ username });

        if (userExists) {
            throw new Error("User already exists!");
        }

        const settings = settingRepository.create({
            chat,
            username,
        });

        await settingRepository.save(settings);

        return settings;
    }
}

export { SettingsService };