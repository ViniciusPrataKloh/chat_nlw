import { getCustomRepository } from "typeorm";
import { UserRespository } from "../repositories/UsersReposiroty";

interface IUserCreate {
    email: string;
}

class UserService {
    async create({ email }: IUserCreate) {
        const userRepository = getCustomRepository(UserRespository);

        const userExists = await userRepository.findOne({ email });

        if (userExists) {
            throw new Error("User already exists!");
        }

        const user = userRepository.create({ email });

        await userRepository.save(user);

        return user;
    }
}

export { UserService }