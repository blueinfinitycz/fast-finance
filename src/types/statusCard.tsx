export interface IJson {
  obj: {
    code: number;
    status: number;
    message: string;
    data: {
      id: number;
      currency_in: string;
      currency_out: string;
      amount_in: number;
      amount_out: number;
      precision_in: number;
      precision_out: number;
      created_at: number;
      timeout: number;
      rate: number;
      rate_precision: number;
      rate_type: number;
      address: string;
      status: number;
      confirmations_need: number;
      confirmations_have: number;
      can_refund: number;
      rest_amount: number;
    };
  };
  state: { value: number | undefined; msg: string };
}
