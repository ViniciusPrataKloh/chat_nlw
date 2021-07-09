import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRespository extends Repository<Setting> {

}

export { SettingsRespository }