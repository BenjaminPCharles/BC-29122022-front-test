import type { NextApiRequest, NextApiResponse } from 'next'

export type ApiSessions = {
  sessions: {
    id: number
    evse: string
    dateStart: Date
    dateEnd: Date
    price: number
  }[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiSessions>
) {
  res.status(200).json({
    sessions: [
      {
        id: 1,
        evse: 'NX-NKTF4',
        dateStart: new Date('2021-04-07T15:43:10Z'),
        dateEnd: new Date('2021-04-07T17:43:10Z'),
        price: 0.5,
      },
      {
        id: 2,
        evse: 'NX-B8FAE',
        dateStart: new Date('2021-04-07T12:27:43Z'),
        dateEnd: new Date('2021-04-07T20:00:43Z'),
        price: 10.42,
      },
      {
        id: 3,
        evse: 'NX-YN96M',
        dateStart: new Date('2021-04-06T12:41:48Z'),
        dateEnd: new Date('2021-04-07T00:05:48Z'),
        price: 3,
      },
      {
        id: 4,
        evse: 'NX-JBEB9',
        dateStart: new Date('2021-04-05T09:10:00Z'),
        dateEnd: new Date('2021-04-05T10:55:00Z'),
        price: 7.5,
      },
      {
        id: 5,
        evse: 'NX-B4BJF',
        dateStart: new Date('2021-04-05T09:10:00Z'),
        dateEnd: new Date('2021-04-05T09:11:12Z'),
        price: 0.01,
      },
      {
        id: 6,
        evse: 'NX-T6W4T',
        dateStart: new Date('2021-04-05T09:10:00Z'),
        dateEnd: new Date('2021-04-05T09:50:00Z'),
        price: 0.75,
      },
      {
        id: 8,
        evse: 'NX-9LQEX',
        dateStart: new Date('2021-04-05T09:10:00Z'),
        dateEnd: new Date('2021-04-05T09:10:01Z'),
        price: 7.99,
      },
      {
        id: 9,
        evse: 'NX-3DFN8',
        dateStart: new Date('2021-04-01T12:10:00Z'),
        dateEnd: new Date('2021-04-01T14:41:00Z'),
        price: 15.24,
      },
      {
        id: 10,
        evse: 'NX-AENTF',
        dateStart: new Date('2021-04-05T23:59:00Z'),
        dateEnd: new Date('2021-04-07T01:35:42Z'),
        price: 14.97,
      },
      {
        id: 11,
        evse: 'NX-9YPXJ',
        dateStart: new Date('2021-04-04T12:10:00Z'),
        dateEnd: new Date('2021-04-04T13:32:12Z'),
        price: 9.41,
      },
      {
        id: 12,
        evse: 'NX-GE4Y8',
        dateStart: new Date('2021-04-03T10:10:00Z'),
        dateEnd: new Date('2021-04-03T17:09:11Z'),
        price: 10.9,
      },
      {
        id: 13,
        evse: 'NX-QHXDL',
        dateStart: new Date('2021-04-05T09:10:00Z'),
        dateEnd: new Date('2021-04-05T13:13:03Z'),
        price: 1.99,
      },
      {
        id: 14,
        evse: 'NX-E99A3',
        dateStart: new Date('2021-04-05T14:10:00Z'),
        dateEnd: new Date('2021-04-05T17:59:59Z'),
        price: 7.94,
      },
      {
        id: 15,
        evse: 'NX-MQTKX',
        dateStart: new Date('2021-04-05T16:10:00Z'),
        dateEnd: new Date('2021-04-05T17:13:54Z'),
        price: 8.41,
      },
      {
        id: 16,
        evse: 'NX-CMQ4P',
        dateStart: new Date('2021-04-05T09:10:00Z'),
        dateEnd: new Date('2021-04-05T09:19:20Z'),
        price: 4.99,
      },
      {
        id: 17,
        evse: 'NX-8K6RH',
        dateStart: new Date('2021-04-06T08:10:00Z'),
        dateEnd: new Date('2021-04-06T08:20:20Z'),
        price: 7.59,
      },
      {
        id: 18,
        evse: 'NX-EFNBW',
        dateStart: new Date('2021-04-07T00:10:00Z'),
        dateEnd: new Date('2021-04-07T23:10:00Z'),
        price: 9.14,
      },
      {
        id: 19,
        evse: 'NX-LKNH4',
        dateStart: new Date('2021-04-05T09:10:00Z'),
        dateEnd: new Date('2021-04-05T10:09:55Z'),
        price: 4.1,
      },
      {
        id: 20,
        evse: 'NX-KBM3W',
        dateStart: new Date('2021-04-05T09:10:00Z'),
        dateEnd: new Date('2021-04-05T09:10:43Z'),
        price: 6.24,
      },
      {
        id: 21,
        evse: 'NX-MEDYG',
        dateStart: new Date('2021-04-05T16:10:00Z'),
        dateEnd: new Date('2021-04-05T16:11:22Z'),
        price: 0.5,
      },
    ],
  })
}
