import React, {useEffect, useState} from 'react'

const useGetJson = (url) => {
    const [data, setData] = useState(null)

useEffect(() => {
    const getData = async () => {
      // const res = await fetch(url)
      const res = await new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({
                "code": 200,
                "status": 1,
                "message": "OK",
                "data": {
                    "id": 770,
                    "currency_in": "BTC",
                    "currency_out": "EUR",
                    "amount_in": 0.001,
                    "precision_in": 8,
                    "amount_out": 39.24,
                    "precision_out": 2,
                    "created_at": 1613149020,
                    "timeout": 600,
                    "rate": 39238.87,
                    "rate_precision": 2,
                    "rate_type": 2,
                    "address": "tb1qty8fd9drv9g43f4uhuqckslnw8ct5k84j7e04a",
                    "status": 4,
                    "confirmations_need": 3,
                    "confirmations_have": 4871,
                    "can_refund": 1,
                    "rest_amount": 0,
                    "transactions": [
                        {
                            "timestamp": 1613149151,
                            "amount": 0.0005,
                            "settings_id": 3170,
                            "txid": "04d56779d22b8dcf9fe683909f0034f17c6bd4671581931ba676c2bf6f0858db",
                            "confirmations_need": 3,
                            "confirmations_have": 4872,
                            "type": 1,
                            "account_number": "NOTPROVIDED"
                        },
                        {
                            "timestamp": 1613149391,
                            "amount": 0.0035,
                            "settings_id": 3170,
                            "txid": "c1beeecf51e20c7dc260871bb5ef44666208242f68f111275b79c0cdf7dfb744",
                            "confirmations_need": 3,
                            "confirmations_have": 4871,
                            "type": 1,
                            "account_number": "NOTPROVIDED"
                        },
                        {
                            "timestamp": 1613750813,
                            "amount": 0.003,
                            "settings_id": 3170,
                            "txid": "407a74c64dfd7e8eeb52df976b05c87b0e6dc361350af26aee741ed0346a46c6",
                            "confirmations_need": 3,
                            "confirmations_have": 0,
                            "type": 2,
                            "account_number": "tb1qpf88p4efkz9070d37jjs5kvt8ewcvttx3gg9un"
                        }
                    ]
                }
            })
          },2000)
      })

      setData({obj: res.data, status: {value: res.status,msg: res.message}})
  }
  getData();
  },[]);

    return {data:data}
}

export default useGetJson;