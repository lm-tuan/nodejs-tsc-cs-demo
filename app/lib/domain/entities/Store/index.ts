import { Request, Response } from 'express';
import Mail from '../../../../services/mail';
import UserModelfrom from './model';



export class UserRepository {

    public addNewUser(req: Request, res: Response) {
        let newUser = new UserModelfrom(req.body);
        Mail.to = req.body.email;
        Mail.subject = 'Subject of your email';
        Mail.message = '<p>Your html here</p>';
        let result = Mail.sendMail();
        console.log(result);
        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ userId: user._id, message: 'register suceess' });
        });
    }

    public getUsers(req: Request, res: Response) {
        UserModelfrom.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserByID(req: Request, res: Response) {
        UserModelfrom.findById(req.params.contactId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser(req: Request, res: Response) {
        UserModelfrom.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteUser(req: Request, res: Response) {
        UserModelfrom.remove({ _id: req.params.contactId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }

}