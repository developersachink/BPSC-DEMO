import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
const app = express()
const port = process.env.PORT || '8000'
import index from './routes/index.js'

import {AddteacherController} from './controllers/AddteacherController.js';
import connectDB from './db/connectdb.js'
import { adminloginController } from './controllers/adminloginController.js';

const DATABASE_URL =  process.env.DATABASE_URL
//  "mongodb+srv://sachinrajsachinraj613:Developer%407461@cluster0.2fmdtin.mongodb.net/"
// Set Template Engine
app.set('view engine', 'ejs')
//databse connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:true}))
// Middleware for parsing JSON
app.use(bodyParser.json());
app.use(cors());

// Static Files
app.use(express.static('public'))
app.use('/Teacherlist/edit', express.static('public')); 
app.use('/adminlogin/register', express.static('public'));
//for editrteacher and update
// app.use(express.static(join(process.cwd(), 'public')))

//connect database
connectDB(DATABASE_URL)


app.post('/submit-form', AddteacherController.createDoc);
app.post('/register-form', adminloginController.createUserDoc);
// Load Routes
app.use('/', index)



// AJAX endpoint for handling form submissions

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})