import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwiperComponent from "./Swiper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({title,titles,data}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Box className="title-hd">
            <h2>{title}</h2>
            <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
        </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} indicatorColor={"secondary"} aria-label="basic tabs example">
            {titles.map((single_title,index)=>{
              if (data[index].data.length > 0 ){
                return (<Tab className={"tabs_title"} label={single_title} {...a11yProps(index)} />)
              }
            })}
        </Tabs>
      </Box>
        {data?.map((carousel,index) => {
          if (carousel.data.length > 0){
            return(
              <TabPanel value={value} index={index}>
                <SwiperComponent type={carousel?.type} items={carousel?.data} spaceBetween={10} slidePerView={4} />
              </TabPanel>
            )
          }
        })}

    </Box>
  );
}