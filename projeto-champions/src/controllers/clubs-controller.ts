import { Request, Response } from "express";
import * as service from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
  const response = await service.getClubService();
  res.status(response.statusCode).json(response.body);
};
