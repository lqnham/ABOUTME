const moment = require('moment');
const path = require('path');
const winston = require('winston')
const dailylog = require('winston-daily-rotate-file')

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  defaultMeta: { service: 'user-service' },
  format: combine(
    label({ label: 'logger' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.Console(), //log for console
    new winston.transports.File({ filename: 'config/logs/error.log', level: 'error' }), //log for file
    new winston.transports.File({ filename: 'config/logs/combined.log' }), //log for file
  ],
});

module.exports = logger;