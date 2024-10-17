import React from 'react';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TableContainer, Table, TableBody, TableRow, TableCell, Button, Avatar, Typography } from '@mui/material';

import Call from '@mui/icons-material/Call';
import { KeyboardArrowDown, People, Place, WhatsApp } from '@mui/icons-material';

export default function ComponentXYZ(props){

    let router = useRouter();
    let rowItem = props?.rowItem || {};

    // React.useEffect( ()=> {}, [] );

    const handleCall = ( rowItem )=> {
        try {
            let { PHONE1 } = rowItem;
            let mobile10 = PHONE1.slice(-10);
            window.open("tel:"+mobile10);
            // window.open("https://api.whatsapp.com/send?phone=91"+element.u_mobile);
        } catch (error) {
            console.log(`fetchAcData => error : ${ error?.message}`);
        }     
    }

    const handleWA = ( rowItem )=> {
        try {
            let { PHONE1 } = rowItem;
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

    return( <Box sx={{ px:1 }} >
        <TableContainer component={Paper} square elevation={0}
            sx={{ 
                p:1, width:"100%", 
                background : ( !rowItem?.PHONE1 || rowItem?.PHONE1?.length < 10 ) ? "whitesmoke" : "white" , 
                ".MuiTableCell-root" : { fontSize : "14px", fontFamily : 'Kruti Dev' },
                ".MuiTypography-root" : { fontSize : "14px", fontFamily : 'Kruti Dev' },
                ".MuiButton-root" : { fontSize : "14px" } ,
                "& td": { border: 0 }
            }} >
            <Table padding='none' size="small" >
                <TableBody>                    
                    <TableRow >
                        <TableCell>
                            <Stack direction={'row'} alignItems={'center'} >
                                <Avatar variant='rounded' sx={{ width:18, height:18 }} ></Avatar>
                                {/* <Typography sx={{pl:1}} >{`${rowItem?.VNAME} ( 25 वर्ष ) `}</Typography> */}
                                <Typography sx={{pl:1}} >{`${rowItem?.VNAME} ¼ ${rowItem?.AGE} o"kZ ½ `}</Typography>
                            </Stack>
                        </TableCell>
                        <TableCell>
                            <Button fullWidth variant='contained' size='small' disabled={ !rowItem?.PHONE1 || rowItem?.PHONE1?.length < 10 }
                                onClick={ () => handleCall(rowItem) }                                
                                sx={{px:0, minWidth : "48px"}} ><Call sx={{ width : 18, height : 18 }} />
                            </Button>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Stack direction={'row'} alignItems={'center'} sx={{py:"4px"}} >
                                <Avatar variant='rounded' sx={{ width:18, height:18 }} > <People sx={{ width:16, height:16 }} /> </Avatar>
                                <Typography sx={{pl:1}} >{`${rowItem?.FNAME} `}</Typography>
                            </Stack>
                        </TableCell>
                        <TableCell>
                            <Button fullWidth variant='outlined' size='small' disabled={ !rowItem?.PHONE1 || rowItem?.PHONE1?.length < 10 }
                                onClick={ () => handleWA(rowItem) }                                
                                sx={{px:0, minWidth : "48px", mt:1, color : 'green', border : '1px solid green' }} ><WhatsApp sx={{ width : 18, height : 18 }} />
                            </Button>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Stack direction={'row'} alignItems={'center'} sx={{py:"4px"}} >
                                <Avatar variant='rounded' sx={{ width:18, height:18 }} > <Place sx={{ width:16, height:16 }} /> </Avatar>
                                <Typography sx={{pl:1}} >{ rowItem?.ADDRESS ? rowItem?.ADDRESS : '' }</Typography>
                                {/* <Typography sx={{pl:1}} >{`${rowItem?.HNO}, ${rowItem?.AREACOLONY}`}</Typography> */}
                            </Stack>
                        </TableCell>
                        <TableCell>
                            <Button fullWidth variant='outlined' size='small' disabled={ !rowItem?.PHONE1 || rowItem?.PHONE1?.length < 10 }
                                onClick={ () => handleWA(rowItem) }                                
                                sx={{px:0, minWidth : "48px", mt:1 }} ><KeyboardArrowDown sx={{ width : 18, height : 18 }} />
                            </Button>
                        </TableCell>
                    </TableRow>                    
                </TableBody>
            </Table>                        
        </TableContainer>
    </Box>)
}