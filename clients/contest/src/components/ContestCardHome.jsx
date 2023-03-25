import { Chip, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const ContestCardHome = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/contest/${data._id}`}>
      <div className="contest_card">
        <div className="contest_card_title">
          <div className="contest_card_title_left">
            <Typography color={"skyBlue"}  fontSize={24} fontWeight={700}>
              {data.contestTitle}
            </Typography>
          </div>
          <div className="contest_card_title_right">
            <Typography color={"skyBlue"}  fontSize={20}>{data.entries?.length}{data.entries?.length > 0 ? "+" : ""} Participate</Typography>
            <Typography color={"skyBlue"}  fontSize={20}>Budget : ${data.budget}.0</Typography>
          </div>
        </div>
        <Chip size="small" label="GUARANTED" color="success" />
        <div className="context_card_description">
          <Typography color={"skyBlue"}  fontSize={15}>
          {data.contestDetails}
          </Typography>
        </div>

        <div className="context_card_footer">
          <div className="context_card_footer_left">
            <Typography color={"skyBlue"}  fontSize={16}>{data.createdAt}</Typography>
            <Typography color={"skyBlue"}  fontSize={16}> {data.deadline}</Typography>
          </div>
          <div className="context_card_footer_right">
            <Typography color={"skyBlue"}  fontSize={16}>Posted by : </Typography>
            <Typography color={"skyBlue"}  fontSize={16}> {data.contestCreatorName}</Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContestCardHome;
