import React, { useEffect, useRef, useState } from "react";
import "./peopleFlowChart.scss";
import styles from "./peopleFlowChart.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const PeopleFlowChart = () => {
  const [index, setIndex] = useState();
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [displayData, setDisplayData] = useState();
  const dummy1 = [];
  const dummy2 = [];
  const dummy3 = [];
  const dummy4 = [];
  const count = [
    1, 1, 0, 1, 1, 1, 1, 7, 21, 31, 34, 25, 27, 31, 31, 36, 33, 23, 11, 1, 1, 1,
    1, 1,
  ];

  const count2 = [
    1, 1, 1, 1, 1, 1, 1, 7, 21, 31, 30, 15, 25, 36, 21, 34, 33, 21, 9, 1, 1, 1,
    1, 2,
  ];
  const count3 = [
    5, 3, 0, 5, 4, 8, 9, 7, 49, 50, 59, 55, 50, 51, 51, 39, 39, 51, 13, 10, 2,
    1, 1, 0,
  ];
  const count4 = [
    10, 40, 20, 30, 31, 111, 131, 74, 93, 121, 134, 134, 125, 127, 121, 139,
    130, 124, 63, 16, 15, 10, 10, 8,
  ];

  for (let i = 0; i < 24; i++) {
    const time = i.toString().padStart(2, "0") + ":00";
    dummy1.push({ time: time, count: count[i], range: i });
    dummy2.push({ time: time, count: count2[i], range: i });
    dummy3.push({ time: time, count: count3[i], range: i });
    dummy4.push({ time: time, count: count4[i], range: i });
  }
  const data = [dummy1, dummy2, dummy3, dummy4];
  useEffect(() => {
    setIndex(0);
  }, []);

  const tabsRef = useRef([]);

  useEffect(() => {
    const currentTab = tabsRef.current[index];
    setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
    setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    setDisplayData(data[index]);
  }, [index]);
  return (
    <div className="sectionWrapper">
      <div className="title">People Flow</div>
      <div className="card">
        <div className="cardHeader">
          <div
            className={"tab"}
            onClick={() => {
              setIndex(0);
            }}
            ref={(el) => (tabsRef.current[0] = el)}
          >
            Today
          </div>
          <div
            className={"tab"}
            onClick={() => {
              setIndex(1);
            }}
            ref={(el) => (tabsRef.current[1] = el)}
          >
            Yesterday
          </div>
          <div
            className={"tab"}
            onClick={() => {
              setIndex(2);
            }}
            ref={(el) => (tabsRef.current[2] = el)}
          >
            Last Week
          </div>
          <div
            className={"tab"}
            onClick={() => {
              setIndex(3);
            }}
            ref={(el) => (tabsRef.current[3] = el)}
          >
            Last Month
          </div>
        </div>
        <div
          className="underline"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
        <div className="hline line"></div>
        <div className="graphWrapper">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={displayData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barCategoryGap={1}
            >
              <Tooltip
                labelFormatter={(label) =>
                  label.toString().padStart(2, "0") +
                  ":00" +
                  "-" +
                  (label + 1).toString().padStart(2, "0") +
                  ":00"
                }
                wrapperStyle={{ backgroundColor: "red", borderColor: "green" }}
              />
              {/* The library I used does not support histogram, 
              having two x-axis is sort of a work-around to have 
              tooltip and axis displayed correctly*/}
              <XAxis dataKey="range" hide />
              <XAxis
                dataKey="time"
                scale={"band"}
                xAxisId="values"
                padding={{ right: 0, left: 0 }}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={0} />
              <YAxis
                label={{ value: "Count", angle: -90, position: "insideLeft" }}
              />

              <Legend />
              <Bar dataKey="count" fill={styles["graphColor"]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PeopleFlowChart;
