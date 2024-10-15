"use client";
import { Box, TextField, MenuItem, Select, FormControl, InputLabel, IconButton, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { CalendarToday } from '@mui/icons-material';
import { useState } from 'react';

export default function FilterBar() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap: 2,
                padding: '3rem 0',
                backgroundColor: '#F9F8F6',
            }}
        >
            {/* Dropdown */}
            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
                <InputLabel>All Options</InputLabel>
                <Select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    label="All Options"
                    sx={{
                        borderRadius: '10px',
                        borderColor: '#E59A76',
                        color: '#E59A76',
                        textAlign:"center",
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#E59A76',
                        },
                    }}
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                </Select>
            </FormControl>

            {/* Date Range Picker - Single Input */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                    value={dateRange}
                    onChange={(newValue) => setDateRange(newValue)}
                    renderInput={(startProps, endProps) => (
                        <TextField
                            {...startProps}
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <CalendarToday sx={{ color: '#E59A76' }} />
                                    </IconButton>
                                ),
                            }}
                            placeholder={`${startProps.inputProps.value} - ${endProps.inputProps.value}`}
                            sx={{
                                width: 220,
                                borderRadius: '50px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#E59A76',
                                        borderRadius: '50px',
                                    },
                                    color: '#E59A76',
                                },
                            }}
                        />
                    )}
                />
            </LocalizationProvider>

            {/* Search Input */}
            <TextField
                variant="outlined"
                placeholder="Search Blog & Articles"
                sx={{
                    borderRadius: '50px',
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#E59A76',
                            borderRadius: '50px',
                        },
                        color: '#E59A76',
                    },
                }}
            />

            {/* Apply and Cancel buttons */}
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#E59A76',
                    color: 'white',
                    borderRadius: '50px',
                    marginLeft: '16px',
                }}
            >
                Apply
            </Button>
            <Button
                variant="text"
                sx={{
                    color: '#E59A76',
                    marginLeft: '8px',
                }}
            >
                Cancel
            </Button>
        </Box>
    );
}
