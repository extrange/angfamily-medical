import { css } from "@emotion/react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { healthData, resultTypes } from "../data";

/* Register everything Chart.js requires */
Chart.register(ChartDataLabels, ...registerables);

const StyledSelect = styled(Select)`
  width: 200px;
  margin-right: 10px;
`;

export const Home = () => {
  const [person, setPerson] = useState("");
  const [resultType, setResultType] = useState("");

  const persons = Object.keys(healthData).sort((a, b) => a.localeCompare(b));

  const options = {
    interaction: {
      intersect: false,
    },
    plugins: {
      datalabels: {
        backgroundColor: "hotpink",
        borderRadius: 4,
        color: "black",
        font: {
          weight: "bold",
        },
        padding: 2,
        formatter: (val) => val.y,
      },
    },
  };

  const chartsToShow = useMemo(() => {
    if (!person)
      return (
        <Typography align={"center"} sx={{ mt: 4 }}>
          Select a person to view their results
        </Typography>
      );

    if (!resultType) {
      return Object.entries(resultTypes).map(([resultType, { name }]) => (
        <Line
          key={resultType}
          data={{
            datasets: [
              {
                label: name,
                backgroundColor: "hotpink",
                borderColor: "hotpink",
                data: Object.entries(healthData[person][resultType]).map(
                  ([date, result]) => ({ x: date, y: result })
                ),
              },
            ],
          }}
          options={options}
        />
      ));
    } else
      return (
        <Line
          data={{
            datasets: [
              {
                label: resultTypes[resultType].name,
                backgroundColor: "hotpink",
                borderColor: "hotpink",
                data: Object.entries(healthData[person][resultType]).map(
                  ([date, result]) => ({ x: date, y: result })
                ),
              },
            ],
          }}
          options={options}
        />
      );
  }, [person, resultType]);

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        <FormControl>
          <InputLabel>Person</InputLabel>
          <StyledSelect
            autoWidth
            label={"Person"}
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          >
            {persons.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>

        <FormControl>
          <InputLabel shrink>Result Type</InputLabel>
          <StyledSelect
            autoWidth
            displayEmpty
            label={"Result Type"}
            value={resultType}
            notched
            onChange={(e) => setResultType(e.target.value)}
            renderValue={(value) => resultTypes[value]?.name || "Show all"}
          >
            <MenuItem key={"all"} value={""}>
              Show all
            </MenuItem>
            {Object.entries(resultTypes)
              .sort(([, { name: v1 }], [, { name: v2 }]) =>
                v1.localeCompare(v2)
              )
              .map(([k, { name }]) => (
                <MenuItem key={k} value={k}>
                  {name}
                </MenuItem>
              ))}
          </StyledSelect>
        </FormControl>
      </div>
      <div
        style={{
          position: "relative",
          height: "auto",
          width: "90vw",
          maxWidth: "600px",
        }}
      >
        {chartsToShow}
      </div>
    </>
  );
};
