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
    console.log(res);
    return res.data;
  }).catch((err) => {
    cogoToast.warn(err, { position: 'bottom-right' });
    console.log(err);
  });
  return DATA;
}
