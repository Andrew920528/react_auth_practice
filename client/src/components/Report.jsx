import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Report = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [building, setBuilding] = useState();
  // sectionWrapper => peopleFlowChart.scss
  return (
    <div className="sectionWrapper">
      <div className="card">
        <h3 className="cardHeader">Event Data</h3>
        <div className="line"></div>
        <div className="reportContent">
          <div className="reportContentRow">
            <ReportField title={"Start date"}>
              <DatePicker
                maxDate={endDate}
                showDaysOutsideCurrentMonth
                onChange={(v) => {
                  console.log(v);
                  setStartDate(v);
                }}
                sx={{
                  ".MuiInputBase-input": {
                    padding: "0.75rem",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      //borderColor: "#c0e193",
                    },
                  },
                }}
              />
            </ReportField>
            <ReportField title={"Start Time"}>
              <TimePicker
                views={["hours", "minutes"]}
                minutesStep={1}
                onChange={(v) => {
                  console.log(v);
                  setStartTime(v);
                }}
                sx={{
                  ".MuiInputBase-input": {
                    padding: "0.75rem",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      //borderColor: "#c0e193",
                    },
                  },
                  "dialog .MuiButton-text": {
                    //color: "#c0e193",
                  },

                  ".MuiButton-selected": {
                    // backgroundColor: "#c0e193",
                    //color: "#c0e193",
                  },
                }}
                maxTime={endTime}
              />
            </ReportField>
          </div>
          <br />
          <ReportField title={"End date"}>
            <DatePicker
              minDate={startDate}
              showDaysOutsideCurrentMonth
              onChange={(v) => {
                setEndDate(v);
              }}
              sx={{
                ".MuiInputBase-input": {
                  padding: "0.75rem",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    // borderColor: "#c0e193",
                  },
                },
              }}
            />
          </ReportField>
        </div>
      </div>
    </div>
  );
};

const ReportField = ({ title, children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="reportField">
        <p>{title}</p>
        {children}
      </div>
    </LocalizationProvider>
  );
};
export default Report;
