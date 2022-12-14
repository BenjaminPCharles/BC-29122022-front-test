import { EvStation, Help, History } from '@mui/icons-material'
import { Divider, Hidden, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const LeftMenu: React.FC = () => {
  const router = useRouter()

  return (
    <List sx={{ p: 0 }}>
      <Link href="/" passHref>
        <ListItem component="a" button selected={router.pathname === '/'}>
          <ListItemIcon>
            <EvStation color="primary" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText primary="Stations" />
          </Hidden>
        </ListItem>
      </Link>
      <Link href="/sessions" passHref>
        <ListItem
          component="a"
          button
          selected={router.pathname.startsWith('/sessions')}
        >
          <ListItemIcon>
            <History color="primary" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText primary="Sessions de charge" />
          </Hidden>
        </ListItem>
      </Link>

      <Link href="/help" passHref>
        <ListItem
          component="a"
          button
          selected={router.pathname.indexOf('/help') === 0}
        >
          <ListItemIcon>
            <Help color="primary" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText primary="Aide" />
          </Hidden>
        </ListItem>
      </Link>

      <Divider />

      <ListItem>
        <Typography sx={{ fontSize: 12 }}>
          {process.env.NEXT_PUBLIC_APP_VERSION}
        </Typography>
      </ListItem>
    </List>
  )
}
