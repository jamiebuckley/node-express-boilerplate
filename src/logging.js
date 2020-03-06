const { format, createLogger, transports } = require('winston');

module.exports = createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp(),
        format.printf(i => `${i.timestamp} | ${i.message}`)
    ),
    transports: [
        new transports.Console(),
    ]
})