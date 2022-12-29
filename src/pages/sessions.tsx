import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { Layout } from '../components/layout/Layout'
import { ApiSessions } from './api/sessions'

const SessionPage: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = useSWR<ApiSessions>('/api/sessions')

  // Function calculates the difference between 2 dates and return string
  const betweenTwoDate = (dateStart: Date, dateEnd: Date): String => {
    const days = Math.floor(
      (new Date(dateEnd).getTime() - new Date(dateStart).getTime()) / 86400000
    )
    const hours = Math.floor(
      ((new Date(dateEnd).getTime() - new Date(dateStart).getTime()) %
        86400000) /
        3600000
    )
    const minutes = Math.floor(
      (((new Date(dateEnd).getTime() - new Date(dateStart).getTime()) %
        86400000) %
        3600000) /
        60000
    )
    const seconds = Math.floor(
      ((new Date(dateEnd).getTime() - new Date(dateStart).getTime()) / 1000) %
        60
    )
    return `
      ${days > 0 ? days + 'j' : ''}
      ${
        hours === 0
          ? ''
          : days > 0 && hours > 0
          ? ', ' + hours + 'h'
          : hours + 'h'
      }
      ${
        minutes === 0
          ? ''
          : hours > 0 && minutes > 0
          ? ', ' + minutes + 'm'
          : minutes + 'm'
      }
      ${
        seconds === 0
          ? ''
          : minutes > 0 && seconds > 0
          ? ', ' + seconds + 's'
          : seconds + 's'
      }
    `
  }

  return (
    <Layout>
      <Paper sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>EVSE</TableCell>
              <TableCell>Date de début</TableCell>
              <TableCell>Date de fin</TableCell>
              <TableCell>Durée</TableCell>
              <TableCell>Prix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.sessions
                .sort((d1, d2) =>
                  d1.dateStart < d2.dateStart
                    ? 1
                    : d1.dateStart > d2.dateStart
                    ? -1
                    : 0
                )
                .map((session) => (
                  <TableRow key={session.id}>
                    <TableCell>{session.id}</TableCell>
                    <TableCell>{session.evse}</TableCell>
                    <TableCell>
                      {session.dateStart
                        ? new Date(session.dateStart).toLocaleString('Fr')
                        : 'N/A'}
                    </TableCell>
                    <TableCell>
                      {session.dateEnd
                        ? new Date(session.dateEnd).toLocaleString('Fr')
                        : 'N/A'}
                    </TableCell>
                    <TableCell>
                      {betweenTwoDate(session.dateStart, session.dateEnd)}
                    </TableCell>
                    <TableCell>{session.price}</TableCell>
                  </TableRow>
                ))
            ) : error ? (
              <TableRow>
                <TableCell colSpan={6}>{error.message}</TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={6}>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Layout>
  )
}

export default SessionPage
