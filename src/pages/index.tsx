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
import { ApiEvses } from './api/evses'

const EvsePage: NextPage = () => {
  const { data, error } = useSWR<ApiEvses>('/api/evses')
  return (
    <Layout>
      <Paper sx={{ mt: 3 }}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Nom de code</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Date de dernière charge</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.evses.map((evse) => (
                <TableRow key={evse.codeName}>
                  <TableCell>{evse.codeName}</TableCell>
                  <TableCell>{evse.status}</TableCell>
                  <TableCell>
                    {evse.lastSession
                      ? new Date(evse.lastSession).toLocaleString()
                      : 'N/A'}
                  </TableCell>
                </TableRow>
              ))
            ) : error ? (
              <TableRow>
                <TableCell colSpan={3}>{error.message}</TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={3}>
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

export default EvsePage
