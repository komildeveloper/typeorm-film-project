import express, { Application } from 'express'
import swagger from 'swagger-ui-express'
import dotenv from 'dotenv'

import router from './src/routes'
import SwaggerDoc from './swagger.json'

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use('/docs', swagger.serve, swagger.setup(SwaggerDoc))

app.use('/', router)

const PORT = process.env.PORT || 8000

app.listen(PORT, (): void => console.log(PORT))
