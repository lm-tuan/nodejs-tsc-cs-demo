import { IUserRepository } from "../../application/repositories/IUserRepository";
import UserModel from "../../domain/entities/Store/model";
import { User } from "../../domain/entities/User";


export default class UserRepository implements IUserRepository {

  public async loadByEmailAndPassword(email: string, password: string): Promise<User> {
    const user: any = await UserModel.find({ email });
    if (email === user[0].email && password === user[0].password) {
      return user[0]
    }
    return undefined
  }

  public async loadById(id: string): Promise<User> {
    const user: any = await UserModel.findById({ id });
    if (id === user._id) {
      return user
    }
    return undefined
  }
}
