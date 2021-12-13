import { css } from "@emotion/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { Trend } from "./views/Trend";
import { Leaderboard } from "./views/Leaderboard";
import { ReferenceRanges } from "./views/ReferenceRanges";
/* Which view to show, first here will be the default*/
const views = {
  LEADERBOARD: {
    label: "Leaderboard",
    jsx: Leaderboard,
  },
  HOME: {
    label: "Trend",
    jsx: Trend,
  },
  REFERENCE_RANGES: {
    label: "Reference Ranges",
    jsx: ReferenceRanges,
  },
};

export const App = () => {
  const [currentView, setCurrentView] = useState(Object.keys(views)[0]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin: 0 auto;
        max-width: 1000px;
      `}
    >
      <Typography variant={"h4"} sx={{ mb: 2 }} align={"center"}>
        Ang Family Health Viewer
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentView}
          onChange={(event, val) => setCurrentView(val)}
          aria-label="basic tabs example"
        >
          {Object.entries(views).map(([key, view]) => (
            <Tab key={key} label={view.label} value={key} />
          ))}
        </Tabs>
      </Box>
      <div
        css={css`
          padding: 15px 10px;
        `}
      >
        {React.createElement(views[currentView].jsx)}
      </div>
    </div>
  );
};
