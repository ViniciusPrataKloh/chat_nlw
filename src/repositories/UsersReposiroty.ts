import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UserRespository extends Repository<User>{

}

export { UserRespository }