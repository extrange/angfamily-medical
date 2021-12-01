import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { format } from "date-fns";
import { healthData, resultTypes } from "../data";
import { css } from "@emotion/react";

export const Leaderboard = () => {
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
                {leaderboardSort(healthData, resultType).map(
                  ({ name, date, value }, idx) => (
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
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    });
  return resultTables;
};
