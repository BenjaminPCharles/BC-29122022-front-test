import { Box } from '@mui/material'
import React from 'react'

import { Header } from './Header'
import { LeftMenu } from './LeftMenu'

const menuWidth = 240

export const Layout: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Box
          component="nav"
          sx={{
            flex: {
              xs: `0 0 56px`,
              lg: `0 0 ${menuWidth}px`,
            },
            overflow: 'auto',
            borderRightColor: (theme) => theme.palette.divider,
            borderRightWidth: 1,
            borderRightStyle: 'solid',
          }}
        >
          <LeftMenu />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: 3,
            backgroundColor: '#fff',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
