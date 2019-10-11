// tslint:disable-next-line: no-duplicate-imports

import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import { appEvent } from '../../application/event/AppEvent';
import { crossOrigin } from './middlewares/CrossOrigin';
import { bootstrap } from './plugins/Bootstrap';
import * as express from './plugins/Express';
import { routers } from './routers/Routers';


dotenv.config();
// Any initialization goes here
console.log('Any initialization goes here')
bootstrap()
// Give inner layers a chance to do setup
appEvent.emitOnServerStarting()
// Setup express app
const a = express()
const test = mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true });

a.use(morgan('dev'))
a.use(express.json())
a.use(crossOrigin)
// Setup routers
routers.forEach(router => a.use(router))

export const server = a