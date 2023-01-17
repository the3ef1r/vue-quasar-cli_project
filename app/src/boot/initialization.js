import { boot } from 'quasar/wrappers';
import { Loading } from 'quasar';
import { notifyErrorSimple } from 'src/services/service-notification';

export default boot(async ({ store }) => {
  try {
    Loading.show({
      message: 'Подготовка приложения',
      spinnerColor: 'accent',
      backgroundColor: 'white',
      messageColor: 'primary',
    });
    await store.dispatch('app/init');
  } catch (error) {
    notifyErrorSimple('Произошла ошибка про подготовке приложения', error);
  } finally {
    Loading.hide();
  }
});
