import AppDataSource from "../../data-source";
import { Bicycle } from "../entities/Bicycle";

export const BicycleRepository = AppDataSource.getRepository(Bicycle);