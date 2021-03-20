import { IJson } from '../types/statusCard';

export const getJson = async (url: string) => {
  // const res = await fetch(url)
  // just for testing purpose bellow hardcoded promise
  return new Promise<IJson>((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log('simulate using url thru test promise: ', url);
        resolve({
          obj: {
            code: 200,
            status: 1,
            message: 'ok',
            data: {
              id: 770,
              currency_in: 'BTC',
              currency_out: 'EUR',
              amount_in: 0.001,
              precision_in: 8,
              amount_out: 39.24,
              precision_out: 2,
              created_at: 1613149020,
              timeout: 600,
              rate: 39238.87,
              rate_precision: 2,
              rate_type: 2,
              address: 'tb1qty8fd9drv9g43f4uhuqckslnw8ct5k84j7e04a',
              status: 4,
              confirmations_need: 3,
              confirmations_have: 4871,
              can_refund: 1,
              rest_amount: 0,
            },
          },
          state: { value: 1, msg: 'success' },
        });
      }, 2000);
    } catch (e) {
      reject(e.message);
    }
    // const res =  await response.json();
    // return response;
  });
};
