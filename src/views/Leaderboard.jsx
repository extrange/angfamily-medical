import { Typography } from "@mui/material";
import { format } from "date-fns";
import { healthData, resultTypes } from "../data";

export const Leaderboard = () => {
  return Object.entries(resultTypes)
    .filter(([k, v]) => v.showInLeaderboard)
    .map(([k, v]) => {
      const best = v.getBestResult(healthData, k);
      const worst = v.getWorstResult(healthData, k);
      return (
        <div key={k}>
          <Typography variant={"h5"}>{v.name}</Typography>
          <Typography>
            Best result:{" "}
            {`${best.value} by ${best.name} on ${format(
              best.date,
              "d MMM yyyy"
            )}`}
          </Typography>
          <Typography>
            Worst result:{" "}
            {`${worst.value} by ${worst.name} on ${format(
              worst.date,
              "d MMM yyyy"
            )}`}
          </Typography>
        </div>
      );
    });
};
