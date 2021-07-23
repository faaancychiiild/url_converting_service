import axios from 'axios';
const addUrl = '/post/service/url';
const addUser = '/post/service/addNewUser';
const getUserHistory = '/post/service/app/history';
const deleteReq = 'post/service/delallaPPhisToRy';

const postUrl = (passedObj) => {
  return axios.post(addUrl, passedObj).then(res => res.data);
}
const getUrl = (passedUrl) => {
  return axios.get(passedUrl).then(res => res.data);
}
const getHistory = (passedObj) => {
  return axios.post(getUserHistory, passedObj).then(res => res.data);
}
const getUserIp = () => {
  return axios.get('http://api.ipify.org/?format=json').then(res => res.data.ip);
}
const postUser = (passedObj) => {
  return axios.post(addUser, passedObj).then(res => res.data);
}
const clearHistory = (passedObj) => {
  return axios.post(deleteReq, passedObj).then(res => res.data);
}

//Export all the functionality
const reqService = { postUrl, getUrl, getUserIp, postUser, getHistory, clearHistory };
export default reqService;
