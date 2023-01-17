import { Notify } from 'quasar';

export const notifySuccess = (message = 'Успешно!', caption = null, timeout = 5000) => {
  Notify.create({
    type: 'positive',
    group: 'success',
    message,
    caption,
    multiLine: true,
    progress: true,
    timeout,
  });
};

export const notifyWarning = (message = 'Внимание!', caption = null) => {
  Notify.create({
    type: 'warning',
    group: 'warning',
    message,
    caption,
    multiLine: true,
    progress: true,
  });
};
export const notifyInfo = (message = 'Информация!', caption = null) => {
  Notify.create({
    type: 'info',
    group: 'info',
    message,
    caption,
    multiLine: true,
    progress: true,
    timeout: 2000,
  });
};

export const notifyErrorSimple = (message = 'Ошибка!', caption = null) => {
  Notify.create({
    type: 'negative',
    group: 'error',
    message,
    caption,
    multiLine: true,
    progress: true,
  });
};

export const showNoAuthorizationError = () => {
  Notify.create({
    type: 'negative',
    group: 'error',
    message: 'Недостаточно прав для выполнения действия',
    caption: 'Необходимо пройти авторизацию',
    multiLine: true,
    progress: true,
  });
};

export const getResponseCaption = (error) => {
  // функция для обработки текста из ошибки
  let caption = 'Ошибка сервера';
  if (error && error.message) caption = error.message;
  if (error.response) {
    const { data } = error.response;
    if (data.errors) {
      [caption] = data.errors;
      if (caption.message) caption = caption.message;
    } else caption = data.message || JSON.stringify(data);
  }
  return caption;
};
