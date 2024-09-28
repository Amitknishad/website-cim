import { AppBar, Tabs, Tab, Toolbar } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

const HeaderTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="navigation tabs"
          indicatorColor="none"
          sx={{
            '& .MuiTab-root': { textTransform: 'none', fontWeight: 600 },
            '& .Mui-selected': {
              backgroundColor: '#FF6600',
              color: '#FFFFFF',
            },
          }}
        >
          <Tab label="Press" component={Link} href="/" />
          <Tab label="Articles" component={Link} href="/articles" />
          <Tab label="Blog" component={Link} href="/blog" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderTab;
