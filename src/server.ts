import app from './app'
import config from './config/config'
import { initRateLimiter } from './config/rateLimiter'
import databaseService from './service/databaseService'
import logger from './util/logger'

const server = app.listen(config.PORT)

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
    try {
        // Database Connection
        const connection = await databaseService.connect()

        logger.info('DATABASE_CONNECTION', {
            meta: {
                CONNECTION_NAME: connection.name
            }
        })

        initRateLimiter(connection)

        logger.info(`RATE_LIMITER_INTIATED`)

        logger.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (error) {
        logger.error(`APPLICATION_ERROR`, {
            meta: error
        })

        server.close((err) => {
            if (err) {
                logger.error(`APPLICATION_ERROR`, {
                    meta: error
                })
            }
            process.exit(1)
        })
    }
})()
