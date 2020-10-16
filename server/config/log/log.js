require('winston-daily-rotate-file')
require('moment-timezone')
require('path')
const moment = require('moment')
const winston = require('winston')
const { createLogger, format } = require('winston')
const { combine, timestamp,  printf } = format

const loggingFormat = printf(({ level, message, timestamp }) => {
  const timeStamp = moment.tz(timestamp, "Asia/Ho_Chi_Minh").format("HH:mm:ss.SSS"); //Format timezone to +7
  return `${timeStamp} ` +`${level}: ${message}`;
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