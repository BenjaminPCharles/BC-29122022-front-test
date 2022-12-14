import { Paper } from '@mui/material'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { Layout } from '../components/layout/Layout'
import { ApiSessions } from './api/sessions'

const SessionPage: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = useSWR<ApiSessions>('/api/sessions')

  return (
    <Layout>
      <Paper sx={{ mt: 3 }}>{/* Rempli moi ! 😊 */}</Paper>
    </Layout>
  )
}

export default SessionPage
