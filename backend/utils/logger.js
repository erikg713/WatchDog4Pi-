const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info', // Set log level based on environment
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'logs/app.log' }) // Log to file
  ],
});

// Example usage
logger.info('Logger initialized');
logger.warn('This is a warning');
logger.error('An error occurred');

module.exports = logger;
