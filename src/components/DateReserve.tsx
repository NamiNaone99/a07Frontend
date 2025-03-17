"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";

export default function LocationDateReserve() {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col space-y-4 shadow-lg max-w-md mx-auto">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white text-black w-full"
          disablePast
          label="Select Date"
        />
      </LocalizationProvider>
      <Select
        variant="outlined"
        name="location"
        id="location"
        className="w-full text-black"
        displayEmpty
      >
        <MenuItem value="" disabled>
          Select Location
        </MenuItem>
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
    </div>
  );
}
