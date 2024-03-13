import axios from "axios";

//인스턴스 ID 불러오기
export const loadInstanceId = (lectureId) => {
  const response = axios.get(`/instances/id?lectureId=${lectureId}`);
  return response.data;
};

//인스턴스 상세 불러오기
export const loadInstanceDetail = (instanceId) => {
  const response = axios.get(`/instances/detail?instanceId=${instanceId}`);
  return response.data;
};

//인스턴스의 도메인 불러오기
export const loadInstanceDomain = (instanceId) => {
  const response = axios.get(`/instances/domain?instanceId=${instanceId}`);
  return response.data;
};

//인스턴스의 인바운드 규칙 목록 불러오기
export const loadInboundRules = (instanceId) => {
  const response = axios.get(`/instances/inbounds/list?instanceId=${instanceId}`);
  return response.data;
};

//인바운드 규칙 편집 
export const editInboundRules = (reqData) => {
  axios.put(`/instances/inbounds/setting`, reqData);
};

//도메인 변경
export const saveDomain = (instanceId, newDomain) => {
  axios.post(`/instances/domain`,{instanceId, domainName: newDomain});
};

//도메인 삭제
export const deleteDomain = (instanceId, newDomain) => {
  axios.post(`/instances/domain/remove`,{instanceId, domainName: newDomain});
};