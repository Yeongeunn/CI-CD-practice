//환경변수 사용하는 코드 써야함!!
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, 
  process.env.DATABASE_USERNAME, 
  process.env.DATABASE_PASSWORD, 
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT || 'mysql',
    logging: false,
    pool: {
      max: 5,  // 최대 5개의 연결 유지
      min: 0,
      acquire: 30000,  // 30초 동안 연결 시도
      idle: 10000,  // 10초 동안 사용 안 하면 연결 해제
    },
    timezone: '+09:00',  // 한국 시간 적용
  }
);

module.exports = sequelize;
