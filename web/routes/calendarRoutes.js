const express = require('express');
const router = express.Router();
const axios = require('axios');
const calendarController = require('../controllers/calendarController');
const { ensureAuthenticated } = require('../middleware/authMid'); // 인증 미들웨어 임포트


// GET 라우트: 클라이언트에서 일정 데이터를 가져오기 위해 호출
router.get('/events', calendarController.getCalendarEvents);

// DELETE 라우트: 이벤트 삭제
router.delete('/events/:calendarId', ensureAuthenticated, calendarController.deleteCalendarEvent);

// POST 라우트: 일정 저장
router.post('/', async (req, res) => {
  try {
    // `calendarController.calendar()` 내부에서 응답이 이미 전송되었는지 확인
    const result = await calendarController.calendar(req, res);

    // 만약 `calendarController.calendar()`가 응답을 보냈다면 추가 응답하지 않음
    if (res.headersSent) return;

    res.status(200).json({ message: '이벤트가 성공적으로 저장되었습니다.' });
  } catch (error) {
    if (!res.headersSent) {
      console.error('이벤트 저장 오류:', error);
      res.status(500).json({ error: '이벤트 저장 중 오류가 발생했습니다.' });
    }
  }
});

module.exports = router;
