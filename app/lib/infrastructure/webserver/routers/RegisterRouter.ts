// tslint:disable: export-name no-unsafe-any
import { Request, Response, Router } from "express";
import { UserRepository } from '../../../domain/entities/Store';

export const router = Router()

router.post('/register', async (request: Request, response: Response) => {
    new UserRepository().addNewUser(request, response);
})

