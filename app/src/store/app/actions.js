import { backendApi } from 'src/api/backend';
import { notifyWarning } from 'src/services/service-notification';

export const init = async ({ commit, dispatch }) => {
  commit('setLoading', true);
  await Promise.all([
    dispatch('exampleFetchData'),
    dispatch('fetchCurrentCity'),
  ]);
  commit('setLoading', false);
};
export const exampleFetchData = async ({ commit }) => {
  try {
    const query = {
      setting: '321',
      value: '123',
    };
    const { data } = await backendApi.post('/test/', query);
    commit('setExampleDataToState', data);
  } catch (error) {
    notifyWarning('', error);
  }
};
export const fetchCurrentCity = async ({ commit }) => {
  try {
    // const { data } = await backendApi.post('/test/', query);
    const data = 'Нижний новгород';
    commit('setCurrentCity', data);
  } catch (error) {
    notifyWarning('', error);
  }
};
