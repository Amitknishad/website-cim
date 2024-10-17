"use client";
import React from 'react';
import { AppBar, Box, Button, Card, Checkbox, Container, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Stack, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import { ExitToApp, FilterAlt, KeyboardDoubleArrowRight } from '@mui/icons-material';

import { colorPrimary } from '../../styles/colors';
import { useFetchWrapper } from '../../hooks/useFetchWrapper';
import { useFirebaseAuthState } from '../../lib/useFirebaseAuthState';

import RowItemComponent from './RowItemComponent';
import FilterComponent from './FilterComponent';

export default function ComponentXYZ(props) {  

  const { fireLogout } = useFirebaseAuthState();
  const fetchWrapper = useFetchWrapper();

  let isAdmin = false;
  let callPurposeArr  = [];

  let [ pageData, setPageData ] = React.useState([]);
  let [ filterData, setFilterData ] = React.useState({ 
      "doc_type" : "CallLog",
      // "startDate" : isAdmin ? oneDayBefore.toISOString().substring(0,10) : null,
      "endDate" :  new Date().toISOString().substring(0,10),
      "doc_location" : isAdmin ? null : "Mobile"
  });

  const [ assigneeList, setAssigneeList ] = React.useState([]);
  const [ docPurpose, setDocPurpose ] = React.useState("");
  const [ tabSelected, setTabSelected ] = React.useState(1);

  // let [ isAddMode, setIsAddMode ] = React.useState(false);

  let [ dobVisibility, setDobVisibility ] = React.useState(true);
  let [ filterVisibility, setFilterVisibility ] = React.useState(false);
  let [ pageSize, setPageSize ] = React.useState(100);

  let tabList = [
    { label : "सभी", value : "" },
    { label : "नये", value : "NEW" },
    { label : "देख लिया", value : "SEEN" },
    { label : "निर्देशित", value : "DIRECTED" }     
  ];

  React.useEffect( ()=> {
    fetchPageData();          
  }, [dobVisibility]);

  const fetchPageData = async() => {
    try {
      setPageData([]);
      setPageSize(100);
      let apiRes = await fetchWrapper.post( `/api/withsecret?path=voters&mobile=${dobVisibility}` , { } );
      if(apiRes && apiRes?.response && Array.isArray(apiRes?.response) && apiRes?.response?.length > 0 ) setPageData(apiRes?.response);
    } catch (error) {
      console.log(`fetchPageData => error : ${ error?.message}`);
    }
  }
  
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################

  let useRowItemComponent = React.useMemo( ()=> {
    
    if(!pageData || !pageData?.length ) return ( <Stack alignItems={'center'} sx={{py:16}} > 
      <Typography 
        sx={{ whiteSpace:'pre-line', textAlign: 'center', fontSize: "16px", fontWeight: 600 }} >कोई डेटा नहीं मिला...{"\n"}कृपया अन्य फ़िल्टर विकल्प आज़माएँ।</Typography>
    </Stack>);

    return ( <Stack spacing={1} sx={{pt:1}} >
      {
        pageData?.map((rowItem, INDEX)=> {
          let dateStr = null; // utility.getDateStrFromTs2(rowItem.doc_start_time, false);
          let dayName = null; // utility.getDayName(rowItem.doc_start_time, true);
          // rowItem['AGE'] = (rowItem?.DYEAR && rowItem?.DYEAR?.length > 3 && !isNaN(rowItem?.DYEAR)) ? ( fullYear - parseInt(rowItem?.DYEAR) ) : "00";                    
          if(INDEX>pageSize) return <></>
          return ( <Box key={rowItem?.AREA_ID} sx={{ position : 'relative', pt:2 }} >
              <RowItemComponent key={rowItem?._id} rowItem={rowItem} callPurposeArr={callPurposeArr} assigneeList={assigneeList} isAdmin={isAdmin} />
              <Box sx={{ minWidth:"60px", textAlign:'center', position: 'absolute', top:"4px", left:"8px", py:'4px', px:1, color: "black", background : colorPrimary[100], borderRadius:0, fontSize: '12px', fontWeight: 600 }} >
                  {`वोटर क्रं : ${ rowItem?.VOTERID}`}
              </Box>
              <Box sx={{ minWidth:"60px", textAlign:'center', position: 'absolute', top:"4px", right:"8px", py:'4px', px:1, color: "white", background : colorPrimary[500], borderRadius:0, fontSize: '12px', fontWeight: 600 }} >
                  {`${ rowItem?.MAINCAST ? rowItem?.MAINCAST : "पता नहीं"}`}
              </Box>
          </Box> );
        } )
      }
    </Stack>);        

  }, [pageData, pageSize]);

  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################

  return (<Container disableGutters maxWidth={'md'} 
      sx={{ 
        ".MuiSvgIcon-root" : { color: colorPrimary[0] },
        ".MuiInput-input" : { color: 'white', fontSize : '14px' },
        ".MuiInputLabel-root" : { color: 'yellow', fontSize : '14px' },
        '& .MuiInput-underline:before': { display: 'none' }, 
        '& .MuiInput-underline:after': { display: 'none' },               
        "& .MuiInput-root" : { mt:1 }
      }}
    >   

      <Stack direction={'row'} justifyContent={'space-between'} spacing={2} sx={{pl:2, pr:1,background: colorPrimary[500]}} >
        <TextField select size='small' variant='standard' label="जाति" value={"-"} disabled
          sx={{ minWidth: '90px' }}>
          <MenuItem value="-" label="-" >सभी</MenuItem>
        </TextField>
        <FormControlLabel control={<Checkbox checked={dobVisibility} 
          onChange={ (event)=> setDobVisibility(event?.target.checked) } /> } 
          label={<Typography sx={{ fontSize:'14px', color:'white' }} >मोबाइल वाले </Typography>} />
        
        <Button endIcon={<FilterAlt sx={{ color:'white' }} />} disabled
          onClick={ ()=> setFilterVisibility(true) }
          sx={{ color:'white' }} >फ़िल्टर</Button>

      </Stack>  

      <Card square elevation={0} sx={{p:0,m:0, position: 'sticky', top:47, zIndex:1}} >
        <Tabs variant='scrollable' value={0} textColor="inherit" indicatorColor='primary'
          sx={{px:1, background: colorPrimary[100], color: 'black',width: "100%" }} >
          <Tab label="सभी" />
          <Tab label="बीजेपी" />
          <Tab label="कांग्रेस" />
          <Tab label="अन्य" />
          <Tab label="पता नहीं" />
        </Tabs>
      </Card>

      { useRowItemComponent }

      { ( pageData && pageData?.length > 0 && pageSize < pageData?.length ) && <Stack sx={{p:4}} >
        <Button size='large' variant='contained' endIcon={ <KeyboardDoubleArrowRight /> }
          onClick={ ()=> setPageSize(pageData.length) }
        >और देखें </Button>
      </Stack> }
      
      {/* <Stack spacing={0} sx={{ minHeight : '94vh', alignContent: 'center', 
        background: `linear-gradient(180deg, ${colorPrimary[0]}, ${colorPrimary[500]} )`
      }} >
        <Grid container justifyContent={'center'} spacing={0} >          
          {
            Array.from(Array(10), (e, i) => {
              return <Grid item xs={11.5} ><RowItemComponent /></Grid>
            })
          }
        </Grid>
      </Stack>  */}

      { filterVisibility && <FilterComponent isOpen={filterVisibility} setIsOpen={setFilterVisibility} isAdmin={isAdmin}
          filterData={filterData} setFilterData={setFilterData} assigneeList={assigneeList}
          setTabSelected={setTabSelected} setDobVisibility={setDobVisibility} /> }

  </Container>);

}