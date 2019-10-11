// tslint:disable: export-name no-unsafe-any
import { Request, Response, Router } from "express";
import { UserRepository } from '../../../domain/entities/Store';

export const router = Router()

router.post('/register', async (request: Request, response: Response) => {
    new UserRepository().addNewUser(request, response);
    //const message = Object.assign({}, request.body);  
    // Mail.to = request.body.email;
    // Mail.subject = 'Subject of your email';
    // Mail.message ='<p>Your html here</p>';
    // let result = Mail.sendMail();
    // response.status(200).json({ 'result': result })
})

