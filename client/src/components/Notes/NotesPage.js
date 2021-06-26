import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../style/NotesPage.css';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height:'100%'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function NotesPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabLink=[
    {
      tabName:'All',
      index:0
    },
    {
      tabName:'All 1',
      index:1
    },
    {
      tabName:'All 2',
      index:2
    },
    {
      tabName:'All 3',
      index:3
    },
    {
      tabName:'All 4',
      index:4
    },
    {
      tabName:'All 5',
      index:5
    },
    {
      tabName:'All 6',
      index:6
    },
    {
      tabName:'All 7',
      index:7
    },
  ]
  return (
      <div className={classes.root}>

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
      {
        tabLink.map(tab=>(
          <Tab label={tab.tabName}/>
        ))
      }
      </Tabs>
      {
        tabLink.map(tabPanel=>(
          <TabPanel value={value} index={tabPanel.index}>
            {tabPanel.tabName}
          </TabPanel>
        ))
      }
      
    </div>
  );
}