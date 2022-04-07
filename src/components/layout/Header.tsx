import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ border: 'none' }}>
      <Toolbar>
        <Link href="/" passHref>
          <Box sx={{ flexGrow: 1 }}>
            <Image src="/img/logo.png" width={200} height={18} alt="NEXTENEO" />
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
