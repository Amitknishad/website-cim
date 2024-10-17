import React from 'react';
import Close from '@mui/icons-material/Close';
import Stack from "@mui/material/Stack";
import { Button, SwipeableDrawer, Grid, TextField, MenuItem, CircularProgress, Card, IconButton, Container, Autocomplete, Box } from '@mui/material';

// import { usePStatuses } from '../../../hooks';

export default function ComponentXYZ(props) {

    // let { callLocations, callPurposeArr } = usePStatuses();
    let callLocations = [];
    let callPurposeArr = [];

    let isOpen = props?.isOpen || false;
    let setIsOpen = props?.setIsOpen || function(){};

    let isAdmin = props?.isAdmin || false;
    
    let filterData = props?.filterData || {};
    let setFilterData = props?.setFilterData || function(){};
    let setTabSelected = props?.setTabSelected || function(){};
    let setDobVisibility = props?.setDobVisibility || function(){};
    let assigneeList = props?.assigneeList || [];
    
    let [ loading, setLoading ] = React.useState(false);
   
    const [ startDate, setStartDate] = React.useState(filterData?.startDate);
    const [ endDate, setEndDate] = React.useState(filterData?.endDate);

    const [ docCategory, setDocCategory ] = React.useState(filterData?.doc_remark);
    const [ docPurpose, setDocPurpose ] = React.useState(filterData?.doc_f1);
    const [ docLocation, setDocLocation] = React.useState(filterData?.doc_location);
    const [ lAssignedTo, setLAssignedTo ] = React.useState( { '_id' : filterData?.doc_f2, 'u_name' : filterData?.doc_f2_name } );
    
    let [ PHONE1, SETPHONE1 ] = React.useState(filterData?.doc_r_org);
    let [ VNAME, SETVNAME ] = React.useState(filterData?.doc_r_name);
    let [ docAddress, setDocAddress ] = React.useState(filterData?.doc_address);

    const toggleDrawer = (state) => setIsOpen(state);

    React.useEffect( ()=> {
        setInitialData();
    }, [] );

    const setInitialData = async() => {
        try {
            if(!filterData || !Object.keys(filterData).length ) return;            
            if(!filterData?.startDate) setStartDate( new Date().toISOString().substring(0,10));
            if(!filterData?.endDate) setEndDate( new Date().toISOString().substring(0,10));
        } catch (error) {
            console.log(`setInitialData => error : ${error}`);
        }
    };

    const handleReset = async() => {
        try {         
            let oneDayBefore = new Date();
            oneDayBefore.setDate(oneDayBefore.getDate() - 1);

            setStartDate(oneDayBefore.toISOString().substring(0,10));
            setEndDate(new Date().toISOString().substring(0,10));
            setDocCategory('');
            setDocPurpose('');
            setDocLocation('');
            setLAssignedTo({});
            SETPHONE1('');                 
            SETVNAME('');     
            setDocAddress('');
        } catch (error) {
            console.log(`handleReset => error : ${error}`);
        }
    };

    const handleSubmit = async() => {
        try {

            let filter_Data = {}; 
            
            if(startDate && startDate?.length > 9 ) filter_Data["startDate"] = startDate;
            if(endDate && endDate?.length > 9 ) filter_Data["endDate"] = endDate;

            if(docCategory && docCategory?.length > 2 ) filter_Data["doc_remark"] = docCategory;
            if(docPurpose && docPurpose?.length > 2 ) filter_Data["doc_f1"] = docPurpose;
            if(docLocation && docLocation?.length > 2 ) filter_Data["doc_location"] = docLocation;

            if( docLocation === "Mobile" && lAssignedTo && lAssignedTo?.doc_f2 && lAssignedTo?.doc_f2?.length > 20 ){
                filter_Data["doc_f2"] = lAssignedTo?._id;;
                filter_Data["doc_f2_name"] = lAssignedTo?.u_name;;
            }

            filter_Data["doc_r_org"] = PHONE1;
            filter_Data["doc_r_name"] = VNAME;
            filter_Data["doc_address"] = docAddress;            

            if(docCategory && docCategory == 'Imp' ) setDobVisibility(true);
            else setDobVisibility(false);            

            if(!Object.keys(filter_Data).length ){
                setIsOpen(false);
                setFilterData(filter_Data);
                return;
            }

            setTabSelected(0);
            setIsOpen(false);
            setFilterData(filter_Data);

            // {"startDate":"2024-09-20","endDate":"2024-09-20","doc_remark":"Imp","doc_location":"HSO Delhi","doc_r_name":"Amit","doc_r_org":"9451241372"}
            // console.log("handleSubmit => filter_Data : "+JSON.stringify(filter_Data));

        } catch (error) {}
    };

    return (<SwipeableDrawer open={isOpen} anchor='bottom' 
            onClose={ ()=> toggleDrawer(false) } 
            onOpen={ ()=> toggleDrawer(true) } >
            <Container disableGutters maxWidth={'md'} >
                <Card square
                    sx={{ px:2, pb:2 }} >
                    <Grid container spacing={2} >

                        <Grid item xs={12} >
                            <Stack direction={'row-reverse'} sx={{pt:1}}  > <IconButton onClick={()=> toggleDrawer(false) } 
                                ><Close /></IconButton> 
                            </Stack>
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth select size='small' label='राज्य'
                                value={docCategory} onChange={ (event) => setDocCategory(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                <MenuItem key={"Imp"} value={"Imp"} > Important </MenuItem>
                                <MenuItem key={"Gen"} value={"Gen"} > General </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth select size='small' label='जिला'
                                value={docCategory} onChange={ (event) => setDocCategory(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                <MenuItem key={"Imp"} value={"Imp"} > Important </MenuItem>
                                <MenuItem key={"Gen"} value={"Gen"} > General </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth select size='small' label='लोकसभा क्षेत्र'
                                value={docCategory} onChange={ (event) => setDocCategory(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                <MenuItem key={"Imp"} value={"Imp"} > Important </MenuItem>
                                <MenuItem key={"Gen"} value={"Gen"} > General </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth select size='small' label='विधानसभा क्षेत्र'
                                value={docCategory} onChange={ (event) => setDocCategory(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                <MenuItem key={"Imp"} value={"Imp"} > Important </MenuItem>
                                <MenuItem key={"Gen"} value={"Gen"} > General </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth select size='small' label='मण्डल क्षेत्र'
                                value={docCategory} onChange={ (event) => setDocCategory(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                <MenuItem key={"Imp"} value={"Imp"} > Important </MenuItem>
                                <MenuItem key={"Gen"} value={"Gen"} > General </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth select size='small' label='शक्ति केंद्र'
                                value={docCategory} onChange={ (event) => setDocCategory(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                <MenuItem key={"Imp"} value={"Imp"} > Important </MenuItem>
                                <MenuItem key={"Gen"} value={"Gen"} > General </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth select size='small' label='बूथ नं. एवं स्थान'
                                value={docCategory} onChange={ (event) => setDocCategory(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                <MenuItem key={"Imp"} value={"Imp"} > Important </MenuItem>
                                <MenuItem key={"Gen"} value={"Gen"} > General </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth label="Seach by HNO" size='small'
                                InputLabelProps={{ shrink:true }} 
                                value={docAddress} onChange={ (event)=> setDocAddress(event?.target?.value) } />
                        </Grid>

                        {/* <Grid item xs={6} >
                            <TextField fullWidth label="Start date" size='small' type='date' placeholder="MM/dd/yyyy"
                                InputLabelProps={{ shrink:true }} dateformate="MM/dd/yyyy"
                                value={startDate} onChange={ (event)=> setStartDate(event?.target?.value) } />
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth label="End date" size='small' type='date' placeholder="MM/dd/yyyy"
                                InputLabelProps={{ shrink:true }} dateformate="MM/dd/yyyy"
                                value={endDate} onChange={ (event)=> setEndDate(event?.target?.value) } />
                        </Grid> */}

                        {/* <Grid item xs={6} >
                            <TextField fullWidth select size='small' label='Call purpose'
                                value={docPurpose} onChange={ (event) => setDocPurpose(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                {
                                    callPurposeArr.map( (rowData) => {
                                        return (<MenuItem key={rowData} value={rowData} > {rowData} </MenuItem>);
                                    }  )
                                }
                            </TextField>
                        </Grid> */}

                        {/* <Grid item xs={6} >                            
                            <TextField fullWidth select size='small' label='Call Location' disabled={!isAdmin}
                                value={docLocation} onChange={ (event) => setDocLocation(event.target.value) } >
                                <MenuItem key={""} value={""} > All </MenuItem>
                                {
                                    callLocations.map( (callLocation) => {
                                        return (<MenuItem key={callLocation} value={callLocation} > {callLocation} </MenuItem>);
                                    }  )
                                }
                            </TextField>
                        </Grid> */}

                        {
                            ( isAdmin && docLocation && docLocation == 'Mobile' ) && (
                                <Grid item xs={12} >
                                    
                                    {/* <TextField select fullWidth label="Assigned to" size='small' disabled={ docLocation !== 'Mobile' } 
                                        InputLabelProps={{ shrink:true }}  /> */}

                                    <Autocomplete blurOnSelect={true} isOptionEqualToValue={ (option,value) => option?.u_name===value?.u_name }
                                        options={assigneeList}  
                                        getOptionLabel={(option) => {
                                            return option?.u_name ? option.u_name : "Anyone"
                                        }}
                                        renderInput={
                                            (params) => <TextField {...params} label="Received to" size='small' />
                                        }           
                                        value={ lAssignedTo }
                                        onChange={ (event, newValue) => setLAssignedTo(newValue)}

                                        filterOptions={(options, state) => {
                                            try{
                                                return options.filter(({ u_name }) => u_name?.toLowerCase()?.includes(state.inputValue?.toLowerCase()))
                                            }catch(err) {
                                                return [];
                                            }
                                        }}
                                    />
                                </Grid>
                            )
                        }                        

                        <Grid item xs={6} >
                            <TextField fullWidth label="Seach by Mobile No" size='small' type='number'
                                InputLabelProps={{ shrink:true }}
                                value={PHONE1} onChange={ (event)=> SETPHONE1(event?.target?.value) } />
                        </Grid>

                        <Grid item xs={6} >
                            <TextField fullWidth label="Seach by Name" size='small'
                                InputLabelProps={{ shrink:true }} 
                                value={VNAME} onChange={ (event)=> SETVNAME(event?.target?.value) } />
                        </Grid>

                        {
                            loading && (<Grid item xs={12} >
                                <Stack alignItems={'center'} sx={{p:4}}  > <CircularProgress /> </Stack>
                            </Grid>)
                        }

                        <Grid item xs={6} >
                            <Button fullWidth variant='outlined' size='large'  onClick={handleReset} >CLEAR</Button>
                        </Grid>

                        <Grid item xs={6} >
                            <Button fullWidth variant='contained' size='large' disabled={loading } onClick={handleSubmit} >SUBMIT</Button>
                        </Grid>

                        <Grid item xs={12} > <Box p={16} /> </Grid>

                    </Grid>
                </Card>
        </Container>
    </SwipeableDrawer>);

}