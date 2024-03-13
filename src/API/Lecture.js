import axios from "axios";

//교수자 강의 목록 불러오기
export const loadLectures = (departmentId) => {
  const response = axios.get(`/lecture?departmentId=${departmentId}`);
  return response.data;
};

//학과 서버 목록 불러오기
export const loadServers = (departmentId) => {
  const response = axios.get(`/servers/management/list?departmentId=${departmentId}`);
  return response.data;
};

//학생이 수강중인 강의 목록 불러오기
export const loadStudentLectures = () => {
  const response = axios.get(`/lecture/my`);
  return response.data;
};

//강의 이름 불러오기 
export const loadLectureName = (lectureId) => {
  const response = axios.get(`/lecture/detail?id=${lectureId}`);
  return response.data;
};

//해당 강의의 공지사항 목록 불러오기 
export const loadNotices = (lectureId) => {
  const response = axios.get(`/lecture/notice/list?id=${lectureId}`);
  return response.data;
};

//해당 강의에 존재하는 인스턴스 목록 불러오기
export const loadInstances = (lectureId) => {
  const response = axios.get(`/instances/list?lectureId=${lectureId}`);
  return response.data;
};

//수강신청 학생 목록 불러오기
export const loadEnrolmentStudentList = (lectureId) => {
  const response = axios.get(`/lecture/student/register?id=${lectureId}`);
  return response.data;
};

//수강신청 승인
export const approveEnrolment = (lectureId, id) => {
  axios.post(`lecture/student/registration`,{lectureId, id});
};

//수강신청 거절
export const refuseEnrolment = (lectureId, id) => {
  axios.post(`lecture/student/refusal`,{lectureId, id});
};

//강의 생성
export const createLecture = (data) => {
  axios.post("/lecture", data);
};

//공지사항 생성 
export const createNotice = (data) => {
  axios.post('/lecture/notice', data);
};

//공지사항 삭제 
export const deleteNotice = (noticeId) => {
  axios.delete(`/lecture/notice?id=${noticeId}`);
};

//수강신청하기
export const enrolment = (lectureId) => {
  axios.post(`/lecture/student`,{lectureId});
};

