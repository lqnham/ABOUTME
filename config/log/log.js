const moment = require('moment');
const path = require('path');
const winston = require('winston')
const dailylog = require('winston-daily-rotate-file')

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const loggingFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

//separate file by date for combined log
const fileRotateTransports = new (winston.transports.DailyRotateFile)({
  filename: 'common/logs/%DATE%_combined.log',
  datePattern: 'DD-MM-YYYY',
  maxSize: '20m',
});

//separate file by date for error log
const fileRotateTransportsError = new (winston.transports.DailyRotateFile)({
  filename: 'common/logs/%DATE%_error.log',
  datePattern: 'DD-MM-YYYY',
  maxSize: '20m',
  level: 'error'
});

//separate file by date for info log
const fileRotateTransportsInfo = new (winston.transports.DailyRotateFile)({
  filename: 'common/logs/%DATE%_info.log',
  datePattern: 'DD-MM-YYYY',
  maxSize: '20m',
  level: 'info'
});

//Create file log
const logger = createLogger({
  defaultMeta: { service: 'user-service' },
  format: combine(
    label({ label: 'logger' }),
    timestamp(),
    loggingFormat
  ),
  transports: [
    new winston.transports.Console(), //log for console
    fileRotateTransports,
    fileRotateTransportsError,
    fileRotateTransportsInfo
  ],
});

module.exports = logger;