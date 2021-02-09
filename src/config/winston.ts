import appRoot from 'app-root-path';
import winston from 'winston';
import process from 'process';
 
const { combine, timestamp, label, printf } = winston.format;
 
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
 
const options = {
  // log파일
  file: {
    level: 'info',
    filename: `${appRoot}/logs/winston-test.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: combine(
      label({ label: 'winston-test' }),
      timestamp(),
      myFormat    // log 출력 포맷
    )
  },
  // 개발 시 console에 출력
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: combine(
      label({ label: 'nba_express' }),
      timestamp(),
      myFormat
    )
  },
};
 
const logger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file) // 중요! 위에서 선언한 option으로 로그 파일 관리 모듈 transport
  ],
  exitOnError: false, 
});
 
if (process.env.NODE_ENV !== 'production'){
  logger.add(new winston.transports.Console(options.console)) // 개발 시 console로도 출력
}
 
export default logger;
