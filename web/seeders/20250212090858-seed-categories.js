'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { categoryId: 100, name: '화장품', shelfLifeDays: null},
      { categoryId: 101, name: '기초 화장품', shelfLifeDays: 365},
      { categoryId: 102, name: '클렌저', shelfLifeDays: 365},
      { categoryId: 103, name: '선크림', shelfLifeDays: 180},
      { categoryId: 104, name: '기초 메이크업', shelfLifeDays: 365},
      { categoryId: 105, name: '아이 메이크업', shelfLifeDays: 180},
      { categoryId: 106, name: '립스틱', shelfLifeDays: 545},
      { categoryId: 107, name: '매니큐어', shelfLifeDays: 365},
      { categoryId: 108, name: '향수', shelfLifeDays: 730},
      { categoryId: 109, name: '틴트', shelfLifeDays: 180},
      { categoryId: 200, name: '의약품 및 건강기능식품', shelfLifeDays: null},
      { categoryId: 300, name: '식품', shelfLifeDays: null},
      { categoryId: 400, name: '기타', shelfLifeDays: null}
    ], {
      ignoreDuplicates: true // 중복 데이터 무시하도록 설정
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
