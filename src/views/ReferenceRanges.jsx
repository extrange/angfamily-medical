import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { css } from "@emotion/react";

export const ReferenceRanges = () => {
  const data = {
    "Total Cholesterol mmol/L (mg/dL)": [
      ["< 5.2 (200)", "Desirable"],
      ["5.2 - 6.1 (200-239)", "Borderline High"],
      [">= 6.2 (240)", "High"],
    ],
    "LDL Cholesterol mmol/L (mg/dL)": [
      ["< 2.6 (100)", "Optimal"],
      ["2.6-3.3 (100-129)", "Desirable"],
      ["3.4- 4.0 (130-159)", "Borderline High"],
      ["4.1- 4.8 (160-189)", "High"],
      ["≥ 4.9 (190)", "Very High"],
    ],
    "HDL Cholesterol mmol/L (mg/dL)": [
      ["< 1.0 (40)", "Low"],
      ["1.0-1.5 (40-59)", "Desirable"],
      ["≥ 1.6 (60)", "Optimal"],
    ],
    "Triglycerides mmol/L (mg/dL)": [
      ["< 1.7 (150)", "Optimal"],
      ["1.7-2.2 (150-199)", "Desirable"],
      ["2.3- 4.4 (200-399)", "High"],
      ["≥ 4.5 (400)", "Very High"],
    ],
    HbA1c: [
      ["< 6.0%", "Low risk of diabetes"],
      ["6.1 - 6.9%", "Moderate risk of diabetes"],
      ["> 7.0%", "High risk of diabetes"],
    ],
    "Fasting Glucose (mmol/L)": [
      ["< 6.1", "Normal"],
      ["6.1 - 6.9", "Prediabetes"],
      ["> 7.0", "Diabetic Range"],
    ],
  };

  return (
    <div
      css={css`
        max-width: 500px;
      `}
    >
      {Object.entries(data).map(([name, categories]) => (
        <TableContainer key={name} component={Paper} sx={{ m: 2 }}>
          <Table size={"small"}>
            <TableHead>
              <TableRow hover>
                <TableCell>{name}</TableCell>
                <TableCell>Classification</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map(([range, classification]) => (
                <TableRow key={range} hover>
                  <TableCell>{range}</TableCell>
                  <TableCell>{classification}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
      <Typography>
        References:{" "}
        <a
          href={
            "https://www.moh.gov.sg/docs/librariesprovider4/guidelines/moh-lipids-cpg---booklet.pdf"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          Lipids,
        </a>{" "}
        <a
          href={
            "https://www.moh.gov.sg/docs/librariesprovider5/licensing-terms-and-conditions/moh-cir-no-08_2019_6mar19_screening.pdf"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          HbA1c
        </a>
      </Typography>
    </div>
  );
};
