import express, { Application } from 'express'
import swagger from 'swagger-ui-express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import router from './src/routes'
import SwaggerDoc from './swagger.json'

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use('/docs', swagger.serve, swagger.setup(SwaggerDoc))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/', router)

const PORT = process.env.PORT || 8000

app.listen(PORT, (): void => console.log(PORT))
