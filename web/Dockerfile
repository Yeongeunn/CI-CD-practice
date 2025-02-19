# 1. Node.js 최신 LTS 버전 사용
FROM node:18

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json 복사
COPY package*.json ./

# 4. npm 패키지 설치
RUN npm install

# 5. 모든 코드 복사
COPY . .

# 6. 포트 개방 (Express 기본 포트)
EXPOSE 3000

# 7. 컨테이너 실행 시 데이터 마이그레이션 후 서버 실행
CMD ["sh", "-c", "npx sequelize db:migrate && node server.js"]
