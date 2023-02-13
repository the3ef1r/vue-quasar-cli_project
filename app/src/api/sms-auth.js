// import axios from 'axios';
import { notifyErrorSimple } from 'src/services/service-notification';

export async function sendSms() {
  let result = null;
  try {
    result = true;
    // const ip = await getUserIp();
    // await axios
    //   .post(`https://sms.ru/code/call?phone=${phone}&ip=${ip}&api_id=${apiKey}`)
    //   .then((response) => {
    //     result = response?.code;
    //   });
  } catch (e) {
    notifyErrorSimple('Ошибка отправки смс', e);
  } return result;
}
