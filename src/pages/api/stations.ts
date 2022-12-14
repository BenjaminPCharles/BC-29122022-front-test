import type { NextApiRequest, NextApiResponse } from 'next'

export type ApiStations = {
  stations: {
    codeName: string
    status: 'Disponible' | 'En charge' | 'Hors-service'
    lastSession: Date | null
  }[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiStations>
) {
  res.status(200).json({
    stations: [
      {
        codeName: 'NX-NKTF4',
        status: 'Disponible',
        lastSession: new Date('2021-04-07T15:43:10Z'),
      },
      {
        codeName: 'NX-B8FAE',
        status: 'Disponible',
        lastSession: new Date('2021-04-07T12:27:43Z'),
      },
      {
        codeName: 'NX-YN96M',
        status: 'Hors-service',
        lastSession: new Date('2021-04-06T12:41:48Z'),
      },
      {
        codeName: 'NX-JBEB9',
        status: 'En charge',
        lastSession: new Date('2021-04-05T09:10:00Z'),
      },
      { codeName: 'NX-B4BJF', status: 'Disponible', lastSession: null },
      { codeName: 'NX-T6W4T', status: 'Disponible', lastSession: null },
      {
        codeName: 'NX-9LQEX',
        status: 'Disponible',
        lastSession: new Date('2021-04-05T09:10:00Z'),
      },
      {
        codeName: 'NX-3DFN8',
        status: 'En charge',
        lastSession: new Date('2021-04-01T12:10:00Z'),
      },
      {
        codeName: 'NX-AENTF',
        status: 'Disponible',
        lastSession: new Date('2021-04-05T23:59:00Z'),
      },
      {
        codeName: 'NX-9YPXJ',
        status: 'Disponible',
        lastSession: new Date('2021-04-04T12:10:00Z'),
      },
      {
        codeName: 'NX-GE4Y8',
        status: 'Disponible',
        lastSession: new Date('2021-04-03T10:10:00Z'),
      },
      { codeName: 'NX-QHXDL', status: 'Disponible', lastSession: null },
      {
        codeName: 'NX-E99A3',
        status: 'Hors-service',
        lastSession: new Date('2021-04-05T14:10:00Z'),
      },
      {
        codeName: 'NX-MQTKX',
        status: 'Disponible',
        lastSession: new Date('2021-04-05T16:10:00Z'),
      },
      { codeName: 'NX-CMQ4P', status: 'Disponible', lastSession: null },
      {
        codeName: 'NX-8K6RH',
        status: 'Disponible',
        lastSession: new Date('2021-04-06T08:10:00Z'),
      },
      {
        codeName: 'NX-EFNBW',
        status: 'Hors-service',
        lastSession: new Date('2021-04-07T00:10:00Z'),
      },
      { codeName: 'NX-LKNH4', status: 'En charge', lastSession: null },
      { codeName: 'NX-KBM3W', status: 'En charge', lastSession: null },
      {
        codeName: 'NX-MEDYG',
        status: 'Disponible',
        lastSession: new Date('2021-04-05T16:10:00Z'),
      },
    ],
  })
}
