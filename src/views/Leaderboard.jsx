import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { format } from "date-fns";
import { healthData, resultTypes } from "../data";
import { css } from "@emotion/react";
import { useState } from "react";

export const Leaderboard = () => {
  const [showLatestOnly, setShowLatestOnly] = useState(true);

  const resultTables = Object.entries(resultTypes)
    .filter(([, { leaderboardSort }]) => leaderboardSort)
    .map(([resultType, { name: resultTypeName, leaderboardSort }]) => {
      return (
        <div
          key={resultType}
          css={css`
            margin: 40px 0;
          `}
        >
          <Typography variant={"h5"} align={"center"}>
            {resultTypeName}
          </Typography>
          <TableContainer component={Paper}>
            <Table size={"small"}>
              <TableHead>
                <TableRow hover>
                  <TableCell>Rank</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboardSort(healthData, resultType, {
                  latest: showLatestOnly,
                }).map(({ name, date, value }, idx) => (
                  <TableRow
                    hover
                    key={name}
                    css={
                      idx === 0 &&
                      css`
                        .MuiTableCell-body {
                          font-weight: bold;
                        }
                        background-color: darkslategray;
                      `
                    }
                  >
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{value}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{format(date, "yyyy MMM")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    });
  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        `}
      >
        <Typography css={css`padding: 10px`}>Timeframe: </Typography>
        <ToggleButtonGroup
          exclusive
          value={showLatestOnly}
          onChange={(event, val) => setShowLatestOnly(val)}
        >
          <ToggleButton value={true}>Latest Results Only</ToggleButton>
          <ToggleButton value={false}>All Time</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {resultTables}
    </>
  );
};
