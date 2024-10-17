import React from 'react';
// import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TableContainer, Table, TableBody, TableRow, TableCell, Button, Avatar, Typography, Card, CardHeader, IconButton, RadioGroup, FormControlLabel, Radio, TextField, Chip, Dialog, DialogTitle, Toolbar, DialogContent, DialogActions, Autocomplete } from '@mui/material';

import Call from '@mui/icons-material/Call';
import ContactPhone from '@mui/icons-material/ContactPhone';
import { Assignment, Close, House, HowToVote, Info, NoteAlt, People, Person, Place, WhatsApp } from '@mui/icons-material';
import { colorPrimary } from '@/styles/colors';

// import utility from '../../../helpers/utility';
// import colorData from '../../../helpers/colorData';
// import { colorPrimary } from '../../../styles/colors';
// import { engagementService } from '../../../services/api';

export default function ComponentXYZ(props) {

    let rowItem = props?.rowItem || {};
    let callPurposeArr = props?.callPurposeArr || [];
    let assigneeList = props?.assigneeList || [];

    let isAdmin = props?.isAdmin || false;

    let bgColor = ''; //colorData[6]?.background;
    let bgOpacity = 0.1;

    if(rowItem?.doc_status === "List sent to HS" ){
        rowItem['doc_status'] = "SEEN";
        if(rowItem?.doc_hs_remark && rowItem?.doc_hs_remark?.length > 2 ) rowItem['doc_status'] = "GEN";
    }

    // if( rowItem?.doc_hs_remark && (  rowItem?.doc_hs_remark?.toLowerCase()?.includes('varta') || rowItem?.doc_hs_remark?.toLowerCase()?.includes('vaarta') || rowItem?.doc_hs_remark?.trim() == "वार्ता" ) ){
    //     rowItem['doc_status'] = "VARTA";
    // }

    // if( rowItem?.doc_hs_remark && (  rowItem?.doc_hs_remark?.toLowerCase()?.includes('समय') || rowItem?.doc_hs_remark?.toLowerCase()?.includes('samay') ) ){
    //     rowItem['doc_status'] = "समय दे देना";
    // }

    if( rowItem?.doc_hs_remark && (  rowItem?.doc_hs_remark?.toLowerCase()?.includes('कोटा मे') || rowItem?.doc_hs_remark?.toLowerCase()?.includes('कोटा में') ) ){
        rowItem['doc_status'] = "कोटा में मिलें";
    }

    if( rowItem?.doc_hs_remark && (  rowItem?.doc_hs_remark?.toLowerCase()?.trim() == "gen" ) || rowItem?.doc_hs_remark?.toLowerCase()?.trim() == "जनरल " ){
        rowItem['doc_status'] = "GEN";
    }

    function hexToRgb(hex) {
        try {
            let bigint = parseInt(hex, 16);
            let r = (bigint >> 16) & 255;
            let g = (bigint >> 8) & 255;
            let b = bigint & 255;
            return `${r},${g},${b},${bgOpacity}`;
        } catch (error) {
            return `97,97,97, ${bgOpacity}`;
        }
    }

    try {
        let doc_remark = rowItem?.doc_remark;
        if(doc_remark === "Imp" ) bgOpacity = 0.5;
        let doc_f1 = rowItem?.doc_f1;
        if(doc_f1===callPurposeArr[0]) bgColor = colorData[7]?.background; // Tel
        else if(doc_f1===callPurposeArr[1]) bgColor = colorData[5]?.background; // Meet
        else if(doc_f1===callPurposeArr[2]) bgColor = colorData[3]?.background; // Incident
        else if(doc_f1===callPurposeArr[3]) bgColor = colorData[6]?.background; // Others
        bgColor = hexToRgb(bgColor.substring(1));
    } catch (error) {}

    const handleCall = ( rowItem )=> {
        try {
            let { PHONE1 } = rowItem;
            PHONE1 = PHONE1.trim().replace(/\D/g, ''); // Remove everything that is not a digit
            let mobile10 = PHONE1.slice(-10);
            window.open("tel:"+mobile10);
            // window.open("https://api.whatsapp.com/send?phone=91"+element.u_mobile); 9414037200 adminpass4filterpage
        } catch (error) {
            console.log(`fetchAcData => error : ${ error?.message}`);
        }     
    }

    const handleWA = ( rowItem )=> {
        try {
            let { PHONE1 } = rowItem;
            PHONE1 = PHONE1.trim().replace(/\D/g, ''); // Remove everything that is not a digit
            let mobile10 = PHONE1.slice(-10);
            window.open("https://api.whatsapp.com/send?phone=91"+mobile10);
        } catch (error) {
            console.log(`fetchAcData => error : ${ error?.message}`);
        }     
    }

    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################

    let UsingTableComponent = () => {

        let [ expanded, setExpanded ] = React.useState(true);
        let [ rowSelected, setRowSelected ] = React.useState(null);

        let [ docStatus, setDocStatus ] = React.useState(rowItem?.doc_status);
        let [ hsRemark, setHsRemark ] = React.useState(rowItem?.doc_hs_remark);
        let [ lAssignedTo, setLAssignedTo ] = React.useState( { '_id' : rowItem?.doc_f3, 'u_name' : rowItem?.doc_f3_name } );
  
        let tabList = [ "बीजेपी", "कांग्रेस", "अन्य", "पता नहीं" ];

        let handleStatusChange = async(event) => {
            try {
                setDocStatus(event.target.value);
                // let doc_status = event.target.value;
                // let programData = {};
                // programData["_id"] = rowItem?._id;
                // programData["ts_update"] = Math.round( Date.now() / 1000 );
                // programData["doc_status"] = doc_status;                   
                // let apiResponse = await engagementService.updateItem(programData);
            } catch (error) {
                console.log(`handleStatusChange => error : ${error?.message}`);
            }
        }

        let handleAssignToChange = async(newValue) => {
            try {
                let programData = {};
                programData["_id"] = rowItem?._id;
                programData["ts_update"] = Math.round( Date.now() / 1000 );
                if(newValue && newValue?._id && newValue?._id?.length > 20 ) programData["doc_f3"] = newValue?._id;
                else {
                    // programData["doc_f3"] = "";
                    programData["$unset"] = { "doc_f3" : "" }
                }
                setLAssignedTo(newValue);   // {"_id":"627f9df3ab7cd387e453ec8f","u_name":"Sh. Dhiraj Kumar","u_role":"assistant"}
                // console.log(`handleAssignToChange => newValue : ${JSON.stringify(newValue)}`);                
                let apiResponse = await engagementService.updateItem(programData);
                // console.log(`handleAssignToChange => apiResponse : ${JSON.stringify(apiResponse)}`);
            } catch (error) {
                console.log(`handleAssignToChange => error : ${error?.message}`);
            }
        }

        let handleHSRemark = async(rowItem) => {
            try {
                let inputElemID = `hs_remark_${rowItem?._id}`; // hs_remark_66f6d543882c95a5d5c6d6b3
                // console.log(`handleHSRemark => inputElemID : ${inputElemID}`);
                let htmlElem = document.getElementById(`${inputElemID}`);
                // console.log(`handleHSRemark => htmlElem : ${htmlElem}`);
                // console.log(`handleHSRemark => htmlElem?.value : ${htmlElem?.value }`);

                let doc_hs_remark = htmlElem?.value;
                if( rowItem?.doc_hs_remark == doc_hs_remark ) return;

                let programData = {};
                programData["_id"] = rowItem?._id;
                programData["ts_update"] = Math.round( Date.now() / 1000 );
                programData["doc_hs_remark"] = doc_hs_remark;                   
                // console.log(`handleHSRemark => programData : ${JSON.stringify(programData)}`);
                let apiResponse = await engagementService.updateItem(programData);
            } catch (error) {
                console.log(`handleHSRemark => error : ${error?.message}`);
            }
        }

        let handleChipClick = async(rowData) => {
            try {
                setHsRemark(rowData);
                let programData = {};
                programData["_id"] = rowItem?._id;
                programData["ts_update"] = Math.round( Date.now() / 1000 );
                programData["doc_hs_remark"] = rowData;                   
                let apiResponse = await engagementService.updateItem(programData);
            } catch (error) {
                console.log(`handleChipClick => error : ${error?.message}`);
            }
        }

        const AddEditDialog  = () => {

            let [ docDesc1, setDocDesc1 ] = React.useState(""); // doc_desc
            let [ docDesc2, setDocDesc2 ] = React.useState("");

            React.useEffect( () => {
                try {
                    let doc_desc = rowItem?.doc_desc;
                    if(!doc_desc || doc_desc?.length < 5) return;
                    if(doc_desc?.includes("#$")){
                        let parts = doc_desc.split("#$", 2);
                        setDocDesc1(parts[0]?.trim());
                        setDocDesc2(parts[1]?.trim());
                    }else{
                        setDocDesc1(doc_desc);
                    }
                } catch (error) {}                
            }, []);

            let handleSave = async() => {
                try {
                    let doc_desc = "";
                    if(!docDesc1 || docDesc1?.length < 3) doc_desc = " #$ ";
                    else  doc_desc = `${docDesc1} #$ `;

                    if(docDesc2 && docDesc2?.length > 2) doc_desc = `${doc_desc}${docDesc2}`;

                    let programData = {};
                    programData["_id"] = rowItem?._id;
                    programData["ts_update"] = Math.round( Date.now() / 1000 );
                    programData["doc_desc"] = doc_desc;                   
                    
                    let apiResponse = await engagementService.updateItem(programData);
                    setRowSelected(null);
                } catch (error) {
                    console.log(`handleChipClick => error : ${error?.message}`);
                }
            }            

            return( <Dialog open={rowSelected && rowSelected?._id && rowSelected?._id?.length > 20} >
                <DialogTitle sx={{p:1}} >
                    <CardHeader
                        avatar={<IconButton onClick={ ()=> setRowSelected(null) } sx={{p:0}} ><Close /></IconButton>}
                        title={<Typography sx={{pl:1, color: 'grey',
                            fontFamily: rowItem?.doc_input_lang === 'hindi' ? "Kruti Dev" : "",
                            fontSize: rowItem?.doc_input_lang === 'hindi' ? "18px" : "14px"}}>{rowItem?.doc_subject}</Typography>}
                        subheader={<Typography sx={{pl:1, color: 'blue',
                            fontFamily: rowItem?.doc_input_lang === 'hindi' ? "Kruti Dev" : "",
                            fontSize: rowItem?.doc_input_lang === 'hindi' ? "18px" : "14px"}} >{rowItem?.doc_r_name}</Typography>}
                    />
                </DialogTitle>
                <DialogContent sx={{p:0}} >
                    <Card square elevation={0} sx={{px:1, py:0}} >
                        <Stack spacing={4} sx={{pt:1}} >
                            <TextField multiline size='small' minRows={2} label={'Remarks before direction'} placeholder='Remarks before HS direction..!'
                                value={docDesc1} onChange={ (event)=> setDocDesc1(event?.target?.value) }
                            />
                            <TextField multiline size='small' minRows={3} label={'Remarks after direction '} placeholder='Remarks after HS direction..!' 
                                value={docDesc2} onChange={ (event)=> setDocDesc2(event?.target?.value) }
                            />
                        </Stack>
                    </Card>
                </DialogContent>
                <DialogActions sx={{px:2}} >
                    <Button onClick={ ()=> setRowSelected(null) } >Close</Button>
                    <Button variant='contained' onClick={handleSave} >SAVE</Button>
                </DialogActions>
            </Dialog>);
        }

        const DocDescComponent = () => {

            let [ docDesc1, setDocDesc1 ] = React.useState(""); // doc_desc
            let [ docDesc2, setDocDesc2 ] = React.useState("");

            React.useEffect( () => {
                try {
                    let doc_desc = rowItem?.doc_desc;
                    if(!doc_desc || doc_desc?.length < 5) return;
                    if(doc_desc?.includes("#$")){
                        let parts = doc_desc.split("#$", 2);
                        setDocDesc1(parts[0]?.trim());
                        setDocDesc2(parts[1]?.trim());
                    }else{
                        setDocDesc1(doc_desc);
                    }
                } catch (error) {}                
            }, []);
            return(<Stack>
                { docDesc1 && docDesc1?.length > 2 && <Typography 
                    style={{ color: 'blue', 'whiteSpace' : 'pre-line' }}
                    sx={{ pl:1,
                        fontFamily: rowItem?.doc_input_lang === 'hindi' ? "Kruti Dev" : "",
                        fontSize: rowItem?.doc_input_lang === 'hindi' ? "18px" : "14px"
                    }} 
                    >{docDesc1}</Typography> }
                { docDesc2 && docDesc2?.length > 2 && <Typography 
                    style={{ color: 'red', 'whiteSpace' : 'pre-line' }} 
                    sx={{ pl:1,
                        fontFamily: rowItem?.doc_input_lang === 'hindi' ? "Kruti Dev" : "",
                        fontSize: rowItem?.doc_input_lang === 'hindi' ? "18px" : "14px"
                    }}
                >{docDesc2}</Typography> }
            </Stack>)

        }

        return (<TableContainer component={Paper} square elevation={0}
            sx={{ 
                p:1, borderRadius:2, width:"100%", color: 'white', my:0,
                // background :  `rgba(${bgColor})`,
                // background : ( rowItem?.doc_remark && rowItem?.doc_remark == 'Imp' && !expanded ) ? colorPrimary[100] : colorPrimary[0],
                ".MuiTypography-root" : { color: 'black' } ,
                ".MuiButton-root" : { fontSize : "14px" } ,
                ".MuiAvatar-root" : { background : colorPrimary[500], color : 'white' } ,
                "& td": { border: 0 }
            }} >

            { rowSelected && rowSelected?._id && rowSelected?._id?.length && <AddEditDialog /> }
                
            <Table padding='none' size="small">
                <TableBody> 

                    {/* <TableRow>
                        <TableCell colSpan={2} >
                            <Stack direction={'row'} justifyContent={'flex-end'} >
                                <Typography style={{ color: 'blue', fontSize : '10px', fontWeight: 600 }} >{`${dateStr} - ${dayName}`}</Typography>
                            </Stack>
                        </TableCell>     
                    </TableRow> */}

                    <TableRow>
                        <TableCell colSpan={2} >
                            <Stack direction={'row'} style={{paddingTop:"8px"}}  >
                                <Avatar variant='rounded' sx={{ width:18, height:18, mt:'4px' }} ><Person sx={{ width:16, height:16 }} /></Avatar>
                                <Typography sx={{pl:1, color: 'blue',
                                    fontFamily: rowItem?.doc_input_lang === 'hindi' ? "Kruti Dev" : "",
                                    fontSize: rowItem?.doc_input_lang === 'hindi' ? "18px" : "14px",
                                 }} >{`${rowItem?.VNAME}`}</Typography>
                            </Stack>
                        </TableCell>     
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Stack direction={'row'} >
                                <Avatar variant='rounded' sx={{ width:18, height:18, mt:'4px' }} ><People sx={{ width:16, height:16 }} /></Avatar>
                                <Typography sx={{pl:1,
                                    fontFamily: rowItem?.doc_input_lang === 'hindi' ? "Kruti Dev" : "",
                                    fontSize: rowItem?.doc_input_lang === 'hindi' ? "18px" : "14px",
                                }} >{ `${rowItem?.FNAME} - ${rowItem?.RELATION}`}</Typography>
                            </Stack>
                        </TableCell>                        
                        <TableCell><Stack alignItems={'flex-end'}  >
                            <Button fullWidth variant='contained' size='small' color='secondary'
                                disabled={ !rowItem?.PHONE1 || rowItem?.PHONE1?.length < 10 }
                                onClick={ () => handleCall(rowItem) }                                
                                sx={{px:0, width:'60px' }} ><Call sx={{ width : 18, height : 18, mt:'4px' }} />
                            </Button></Stack>
                        </TableCell>
                    </TableRow>

                    <TableRow> 
                        <TableCell>
                            <Stack direction={'row'} sx={{py:"4px"}} >
                                <Avatar variant='rounded' sx={{ width:18, height:18, mt:'4px' }} > <House sx={{ width:16, height:16 }} /> </Avatar>
                                <Typography sx={{pl:1
                                }} >{ `${rowItem?.HNO} - ${rowItem?.AREACOLONY}`}</Typography>
                            </Stack>
                        </TableCell>
                        <TableCell><Stack alignItems={'flex-end'}  >
                            <Button fullWidth variant='contained' size='small' disabled={ !rowItem?.PHONE1 || rowItem?.PHONE1?.length < 10 }
                                onClick={ () => handleWA(rowItem) }                                
                                sx={{px:0, minWidth : "48px", mt:1, width:'64px', background : 'green', border : '1px solid green' }} ><WhatsApp sx={{ width : 18, height : 18 }} />
                            </Button></Stack>
                        </TableCell>
                    </TableRow>

                    <TableRow> 
                        <TableCell>
                            <Stack direction={'row'} sx={{py:"4px"}} >
                                <Avatar variant='rounded' sx={{ width:18, height:18, mt:'4px' }} > <Place sx={{ width:16, height:16 }} /> </Avatar>
                                <Typography sx={{pl:1
                                }} >{ `भाग : ${rowItem?.BHAG}`}</Typography>
                            </Stack>
                        </TableCell>
                        <TableCell><Stack alignItems={'flex-end'}  >
                            <Button fullWidth variant='contained' size='small'
                                onClick={ () => handleWA(rowItem) }                                
                                sx={{px:0, minWidth : "48px", mt:1, width:'64px', background : 'grey'}} ><HowToVote sx={{ width : 18, height : 18 }} />
                            </Button></Stack>
                        </TableCell>
                    </TableRow>

                    {/* <TableRow>
                        <TableCell colSpan={2} >
                            <Stack direction={'row'} >
                                <Avatar variant='rounded' sx={{ width:18, height:18 }} > <ContactPhone sx={{ width:16, height:16 }} /> </Avatar>
                                <Typography sx={{pl:1, fontSize : '14px'}} >{rowItem.PHONE1}</Typography>
                            </Stack>
                        </TableCell>
                    </TableRow>    */}

                    {/* <TableRow>
                        <TableCell >
                            <Stack direction={'row'} sx={{ pt:1 }} >
                                <Avatar variant='rounded' sx={{ width:18, height:18, mt:'4px' }} ><Info sx={{ width:16, height:16 }} /></Avatar>
                                <DocDescComponent rowItem={rowItem} />
                            </Stack>
                        </TableCell>
                        <TableCell><Stack alignItems={'flex-end'}>
                            <Button fullWidth variant='contained' size='small' disabled={ !rowItem?.PHONE1 || rowItem?.PHONE1?.length < 10 }
                                onClick={ () => setRowSelected(rowItem) }                                
                                sx={{px:0, minWidth : "48px", width:'64px', background : 'grey', border : '1px solid grey' }} ><NoteAlt sx={{ width : 18, height : 18 }} />
                            </Button></Stack>
                        </TableCell>
                    </TableRow> */}

                    <TableRow>
                        <TableCell colSpan={2} >
                            <Stack direction={'row-reverse'} >
                                <RadioGroup row value={docStatus}
                                    onChange={ (event) => handleStatusChange(event) } 
                                    sx={{ mt:1,
                                        ".MuiTypography-root" : { fontSize:'12px'},
                                        ".MuiFormControlLabel-root" : { mr:1 },
                                        ".MuiRadio-root" : { pr:'0px' },
                                        ".MuiSvgIcon-root" : { color: colorPrimary[100] }
                                    }} >
                                    {
                                        tabList?.map( (rowData) => <FormControlLabel key={rowData} label={<Typography
                                            style={{ padding:"0 2px", color : (docStatus == rowData) ? colorPrimary[500] : "black" }} >{rowData}</Typography> 
                                        } value={rowData} control={<Radio /> } /> )
                                    }                                
                                </RadioGroup>
                            </Stack>                            
                        </TableCell>     
                    </TableRow>

                    {/* {
                        ( docStatus && moreOptions?.includes(docStatus) ) && <>
                            <TableRow>
                                <TableCell colSpan={2} sx={{ backgroundColor : `white`, borderTopRightRadius: "8px", borderTopLeftRadius : "8px", pt:1 }} >
                                    <Autocomplete blurOnSelect={true} disabled={!isAdmin}
                                        isOptionEqualToValue={ (option,value) => option?.u_name===value?.u_name }
                                        options={assigneeList}  
                                        getOptionLabel={(option) => {
                                            return option?.u_name ? option.u_name : "No One"
                                        }}
                                        renderInput={
                                            (params) => <TextField {...params} label="Assigned to" size='small' />
                                        }           
                                        value={ lAssignedTo }
                                        onChange={ (event, newValue) => handleAssignToChange(newValue) } 

                                        filterOptions={(options, state) => {
                                            try{
                                                return options.filter(({ u_name }) => u_name?.toLowerCase()?.includes(state.inputValue?.toLowerCase()))
                                            }catch(err) {
                                                return [];
                                            }
                                        }}
                                        sx={{ my:1, mx:2, width : '90%'}}
                                    />
                                </TableCell>
                            </TableRow>      
                        </>                        
                    } */}

                    {/* {
                        ( docStatus && moreOptions?.includes(docStatus) ) && < >
                            <TableRow sx={{ background : 'white' }} >
                                <TableCell colSpan={2} >
                                    <TextField multiline size='small' fullWidth label='HS remark' minRows={2} id={`hs_remark_${rowItem?._id}`} disabled={!isAdmin}
                                        value={hsRemark} onChange={ (event) => setHsRemark(event.target.value) }
                                        onBlur={ ()=> handleHSRemark(rowItem) }
                                        sx={{ my:1, mx:2, width : '90%'}} />
                                </TableCell>
                            </TableRow>
                        </>                        
                    } */}

                    {/* {
                        ( isAdmin && docStatus && moreOptions?.includes(docStatus) ) && < >
                            <TableRow >
                                <TableCell colSpan={2} sx={{ backgroundColor : `white`, borderBottomRightRadius: "8px", borderBottomLeftRadius : "8px" }} >
                                    <Box gap={1}
                                        sx={{
                                            display:"flex", flexWrap: 'wrap',
                                            px:2, pb:2, m: 0,
                                            ".MuiChip-root" : { borderRadius:4, pt:'4px', border: "1px solid gray", background : colorPrimary[50] }
                                        }}
                                    >
                                    {
                                        hsRemarks?.map( (rowData) => <Chip key={rowData} variant="outlined" label={rowData} onClick={ ()=> handleChipClick(rowData)} /> )
                                    }                                           
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </>                        
                    } */}

                </TableBody>
            </Table>                        
        </TableContainer>);
    }

    let UsingCardComponent = () => {

        return ( <Card sx={{p:0}} >
            <CardHeader sx={{px:1}}               
                title={ <Stack>
                    <Stack direction={'row'} alignItems={'center'} >
                        <Avatar variant='rounded' sx={{ width:18, height:18 }} ></Avatar>
                        {/* <Typography sx={{pl:1}} >{`${rowItem?.VNAME} ( 25 वर्ष ) `}</Typography> */}
                        <Typography sx={{pl:1}} >{`${rowItem?.VNAME} ¼ ${rowItem?.AGE} o"kZ ½ `}</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} >
                        <Avatar variant='rounded' sx={{ width:18, height:18 }} > <People sx={{ width:16, height:16 }} /> </Avatar>
                        <Typography sx={{pl:1}} >{`${rowItem?.FNAME} `}</Typography>                
                    </Stack> 
                    <Stack direction={'row'} alignItems={'center'}>
                        <Avatar variant='rounded' sx={{ width:18, height:18 }} > <Place sx={{ width:16, height:16 }} /> </Avatar>
                        <Typography sx={{pl:1}} >{`${rowItem?.GRAM}] ${rowItem?.GP}`}</Typography>
                    </Stack>
                </Stack> }
                subheader={ <Stack direction={'row'} justifyContent={'flex-end'} spacing={2} sx={{ pr:2 }} >
                    <IconButton variant='outlined' size='small' onClick={ () => handleCall(rowItem) }  ><Call sx={{ color: colorPrimary['A900'] }} /></IconButton>
                    <IconButton variant='outlined' size='small' onClick={ () => handleWA(rowItem) }  ><WhatsApp sx={{ color: "green" }} /></IconButton>
                    <IconButton variant='outlined' size='small' ><Info sx={{ color: "gray" }} /></IconButton>
                    {/* <Button variant='outlined' size='small' >WHATSAPP</Button>
                    <Button variant='outlined' size='small' >INFO</Button> */}                    
                </Stack> }
                action={<Avatar variant='rounded' 
                sx={{ mr:1,  width : { xs: "20vw", lg: "5vw" } , height: { xs: "20vw", lg: "5vw" } }} ></Avatar>}
            />
        </Card>);
    }

    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################

    return( <Box 
        sx={{ px:1,
            // ".MuiTableCell-root" : { fontSize : "14px", fontFamily : 'Kruti Dev' },
            // ".MuiTypography-root" : { fontSize : "14px", fontFamily : 'Kruti Dev' },
            ".MuiButton-root" : { fontSize : "14px" } ,
            "& td": { border: 0 }
        }} >
        { true ? <UsingTableComponent /> : <UsingCardComponent />  }        
    </Box>)
}