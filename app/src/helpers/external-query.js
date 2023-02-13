import moment from 'moment';

export const getRequestCount = async () => Number(moment().unix() % 1245) + 2142;
