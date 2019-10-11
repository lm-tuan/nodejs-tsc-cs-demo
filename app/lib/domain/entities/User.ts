// tslint:disable: variable-name
// import { ObjectId } from 'mongodb';
// import * as mongoose from 'mongoose';


// export interface IUser extends mongoose.Document {
//   _id: ObjectId;
//   email: string;
//   password: string;

// }

// const UserSchema: mongoose.Schema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },

// });

// // Export the model and return your IUser interface
// const User = mongoose.model<IUser>('Users', UserSchema);

export class User {
  public id: string
  public email: string
  public password: string
  // tslint:disable-next-line: no-any
  constructor(json: any) {
    // console.log(json)
    // this.id = json.id;
    // this.email = json.email;
    // this.password = json.password;

    //console.log('user---------------', json)
    Object.assign(this, json)
  }
}



