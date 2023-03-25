import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'

const ContestCard = ({data}) => {
    console.log(data);
  return (
    <Link to={`/clients/contest/${data._id}`}>
    
    <div className="contest_card">
    <div className="contest_card_title">
      <div className="contest_card_title_left">
        <Typography color={"skyBlue"} fontSize={20} fontWeight={700}>
          {data.contestTitle}
        </Typography>
      </div>
      <div className="contest_card_title_right">
        <Typography color={"skyBlue"} fontSize={18}>{data.entries?.length} Participate</Typography>
        <Typography color={"skyBlue"} fontSize={18}>${data.budget}.0</Typography>
      </div>
    </div>

    <div className="context_card_footer">
      <div className="context_card_footer_left">
        <Typography color={"skyBlue"} fontSize={16}>3 hours ago</Typography>
        <Typography color={"skyBlue"} fontSize={16}> { new Date(data.deadline).date}</Typography>
      </div>
    </div>
  </div>
    
    </Link>
  )
}

export default ContestCard