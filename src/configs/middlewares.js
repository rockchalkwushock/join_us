import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'

const isDev = process.env.NODE_ENV === 'development'

export default app => {
  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())
  app.use(cors())
  app.use(methodOverride())
  if (isDev) {
    app.use(morgan('dev'))
  }
}
