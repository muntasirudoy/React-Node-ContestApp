import { Autocomplete, FilledInput, FormControl, InputAdornment, InputLabel, TextField,Button } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import React from 'react'
import { contestTags } from '../utils/utils';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AddNewContestForm = ({setContest,contest,handlePostContest}) => {
  return (
    <form>
    <TextField
      label="Contest title"
      type="text"
      id="filled-multiline-static"
      variant="filled"
      style={{ width: "100%", marginTop: "15px" }}
      defaultValue={contest.title}
      onChange={(e) =>
        setContest({ ...contest, title: e.target.value })
      }
    />

    <TextField
      id="outlined-multiline-static"
      label="Contest Details"
      multiline
      variant="filled"
      rows={4}
      style={{ width: "100%", marginTop: "10px" }}
      defaultValue={contest.details}
      onChange={(e) =>
        setContest({ ...contest, details: e.target.value })
      }
    />
    <div className="doubleInput">
      <FormControl
        sx={{ m: 1 }}
        variant="filled"
        style={{ width: "50%", marginTop: "10px" }}
        defaultValue={contest.budget}
        onChange={(e) =>
          setContest({ ...contest, budget: e.target.value })
        }
      >
        <InputLabel htmlFor="filled-adornment-amount">
          Amount
        </InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          startAdornment={
            <InputAdornment position="start">$</InputAdornment>
          }
        />
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DesktopDatePicker
            label="Dadeline"
            onChange={(e) =>
              setContest({ ...contest, deadline: e.target.value })
            }
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
    <div style={{ width: "100%", marginTop: "15px" }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={contestTags}
        getOptionLabel={(option) => option.title}
        defaultValue={[contestTags[1]]}
        onChange={(event, newValue) => {
            setContest({
            ...contest,
            tags: [...newValue],
          });
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Set some tags"
            placeholder="Favorites"
          />
        )}
      />
    </div>
    <Button
      style={{
        marginTop: "20px",
        width: "100%",
        background: "rgb(16, 41, 79)",
      }}
      variant="contained"
      onClick={() => handlePostContest()}
    >
      Post Contest
    </Button>
  </form>
  )
}

export default AddNewContestForm