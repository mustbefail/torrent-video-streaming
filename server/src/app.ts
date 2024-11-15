import express, {Application} from 'express'
import bodyParser from 'body-parser'
import videoRoutes from './routes/videoRoutes'
import {connectDB} from './utils/dbConnect'

const app: Application = express()

app.use(bodyParser.json())

app.use('/api/videos', videoRoutes)

connectDB()

export default app
