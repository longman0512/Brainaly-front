/* eslint-disable prefer-const */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import Axios from 'axios';
import cogoToast from 'cogo-toast';

Axios.defaults.baseURL = 'http://127.0.0.1:3001/';

export async function signUp(userInfo) {
  const DATA = await Axios.post('signup', userInfo).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    cogoToast.warn('Signup Failed', { position: 'bottom-right' });
    return res.data;
  }).catch((err) => {
    cogoToast.warn(err, { position: 'bottom-right' });
    console.log(err);
  });
  return DATA;
}

export async function signIn(userInfo) {
  const DATA = await Axios.post('signin', userInfo).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    cogoToast.warn('Signin Failed', { position: 'bottom-right' });
    return res.data;
  }).catch((err) => {
    cogoToast.warn(err, { position: 'bottom-right' });
    console.log(err);
  });
  return DATA;
}

export async function newQuiz(data) {
  const DATA = await Axios.post('newquiz', data).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    cogoToast.warn('Add Failed', { position: 'bottom-right' });
    return res.data;
  }).catch((err) => {
    cogoToast.warn(err, { position: 'bottom-right' });
  });
  return DATA;
}
export async function getQuizById(id) {
  const DATA = await Axios.post('getbyid', id).then((res) => {
    if (res.status === 200) {
      return res.data.data;
    }
    return res.data.data;
  });
  return DATA;
}
export async function getQuizList() {
  const DATA = await Axios.post('getquizlist').then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    return res.data;
  });
  return DATA;
}
export async function updateQuizData(data) {
  const DATA = await Axios.post('updatequiz', data).then((res) => {
    if (res.status === 200) {
      return res.data.data;
    }
    return res.data.data;
  });
  return DATA;
}
export async function imageUpload(file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await Axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}

// =============Collection alalal

export async function newCollection(data) {
  const DATA = await Axios.post('newcollection', data).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    cogoToast.warn('Add Failed', { position: 'bottom-right' });
    return res.data;
  }).catch((err) => {
    cogoToast.warn(err, { position: 'bottom-right' });
  });
  return DATA;
}
export async function getCollectionList() {
  const DATA = await Axios.post('getcollist').then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    return res.data;
  });
  return DATA;
}
export async function getColById(id) {
  const DATA = await Axios.post('getcolbyid', id).then((res) => {
    if (res.status === 200) {
      return res.data.data;
    }
    return res.data.data;
  });
  return DATA;
}
export async function updateColQuiz(data) {
  const DATA = await Axios.post('updatequizlist', data).then((res) => {
    if (res.status === 200) {
      return res.data.data;
    }
    cogoToast.warn('Add Failed', { position: 'bottom-right' });
    return res.data.data;
  });
  return DATA;
}
export async function updateColData(data) {
  const DATA = await Axios.post('updatecol', data).then((res) => {
    if (res.status === 200) {
      return res.data.data;
    }
    cogoToast.warn('Add Failed', { position: 'bottom-right' });
    return res.data.data;
  });
  return DATA;
}
