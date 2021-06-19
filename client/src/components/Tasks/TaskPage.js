import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SeeTask from '../Tasks/SeeTasks';
import '../../style/TaskPage.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
    tab:{
        color:'gray',
        fontSize:'15px',
        fontWeight:'600',
        fontFamily:'Montserrat'
    }
});

export default function TaskPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="All Task" {...a11yProps(0)} />
          <Tab className={classes.tab} label="To Do" {...a11yProps(1)} />
          <Tab className={classes.tab} label="In Progress" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Done" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="tabPanelClass">
      
        <SeeTask/>

      </TabPanel>
      <TabPanel value={value} index={1}>
        To Do
      </TabPanel>
      <TabPanel value={value} index={2}>
        In Progress
      </TabPanel>
      <TabPanel value={value} index={3}>
        Done
      </TabPanel>
    </div>
  );
}