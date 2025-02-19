const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Session extends Model {}

Session.init({
  sid: {
    type: DataTypes.STRING(36), // 세션 ID
    primaryKey: true,
    allowNull: false,
  },
  expires: {
    type: DataTypes.DATE, // 세션 만료 시간
    allowNull: true,
  },
  data: {
    type: DataTypes.TEXT, // 세션 데이터
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE, // 생성 시간
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE, // 업데이트 시간
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Session', // 클래스 이름
  tableName: 'sessions', // 데이터베이스 테이블 이름
  timestamps: true, // createdAt과 updatedAt을 자동 관리
});

module.exports = Session;