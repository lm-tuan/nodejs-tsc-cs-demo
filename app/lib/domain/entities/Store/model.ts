import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: 'Enter a first name'
    },
    password: {
        type: String,
        required: 'Enter a first name'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('Users', UserSchema);
export default UserModel;