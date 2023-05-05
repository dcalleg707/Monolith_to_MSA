import AppDataSource from "../../data-source";
import { Bicycle } from "../entities/Bicycle.entity";

export const BicycleRepository = AppDataSource.getRepository(Bicycle);