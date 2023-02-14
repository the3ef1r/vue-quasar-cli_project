import { notifyErrorSimple } from 'src/services/service-notification';

export async function sendSms(phone) {
  try {
    console.log(phone);
  } catch (e) {
    notifyErrorSimple('Ошибка отправки смс', e);
  }
}
