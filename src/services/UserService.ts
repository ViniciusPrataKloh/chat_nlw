import { getCustomRepository, Repository } from "typeorm";
import { UserRespository } from "../repositories/UsersReposiroty";
import { User } from "../entities/User";

interface IUserCreate {
    email: string;
}

class UserService {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getCustomRepository(UserRespository);
    }

    async create({ email }: IUserCreate) {

        const userExists = await this.userRepository.findOne({ email });

        if (userExists) {
            throw new Error("User already exists!");
        }

        const user = this.userRepository.create({ email });

        await this.userRepository.save(user);

        return user;
    }
}

export { UserService }