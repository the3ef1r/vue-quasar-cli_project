import axios from 'axios';
import { notifyErrorSimple } from 'src/services/service-notification';

const apiKey = 'C04B2C70-8B17-AE4E-8957-DF06C47E9AC4';
// let ip = '';

async function getUserIp() {
  return '-1';
  // await axios.get('https://ipinfo.io')
  //   .then((response) => {
  //     ip = '-1';
  //     debugger;
  //     console.log(response.request);
  //   })
  //   .catch((error) => console.log('Ошибка получения ip', error));
}
export async function sendSms(phone) {
  let result = null;
  try {
    const ip = await getUserIp();
    await axios
      .post(`https://sms.ru/code/call?phone=${phone}&ip=${ip}&api_id=${apiKey}`)
      .then((response) => {
        result = response?.code;
      });
  } catch (e) {
    notifyErrorSimple('Ошибка отправки смс', e);
  } return result;
}
