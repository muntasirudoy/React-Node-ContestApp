import { Typography } from '@mui/material'
import SortIcon from "@mui/icons-material/Sort";
import React from 'react'

const FilterArea = () => {
  return (
    <div className="filter-area">
    <div className="head">
      <Typography
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {" "}
        <SortIcon fontSize="15" /> Contest
      </Typography>
    </div>
  </div>
  )
}

export default FilterArea