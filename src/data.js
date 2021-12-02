/* Format and conversion:

Maximum decimal places: 2

fastingGlucose: Glucose (Fasting), mmol/L, 1 mmol/L = 18mg/dL
hbA1c: HBA1C, %
hdl: HDL Cholesterol, mmol/L, 1 mmol/L = 38.67 mg/dL
ldl: LDL Cholesterol, mmol/L, 1 mmol/L = 38.67 mg/dL
tchol: Total Cholesterol, mmol/L, 1 mmol/L = 38.67 mg/dL
trig: Triglycerides, mmol/L, 1 mmol/L = 88.57 mg/dL
*/

import { getSortedValues } from "./shared/util";

export const resultTypes = {
  fastingGlucose: {
    name: "Fasting Glucose, mmol/L (lower is better)",
  },
  hbA1c: {
    name: "HbA1c, % (lower is better)",
    leaderboardSort: getSortedValues,
  },
  ldl: {
    name: "LDL Cholesterol, mmol/L (lower is better)",
    leaderboardSort: getSortedValues,
  },
  hdl: {
    name: "HDL Cholesterol, mmol/L (higher is better)",
    leaderboardSort: (data, resultType, options) =>
      getSortedValues(data, resultType, { ...options, highest: true }),
  },
  tChol: {
    name: "Total Cholesterol, mmol/L (lower is better)",
    leaderboardSort: getSortedValues,
  },
  trig: {
    name: "Triglycerides, mmol/L (lower is better)",
    leaderboardSort: getSortedValues,
  },
};

export const healthData = {
  "Huai Chuan": {
    fastingGlucose: {
      "2017-07-01": 5.5,
      "2021-11-25": 5.2,
    },
    hbA1c: {
      "2017-07-01": 5.8,
    },
    hdl: {
      "2017-07-01": 1.37,
      "2021-11-25": 1.04,
    },
    ldl: {
      "2017-07-01": 3.26,
      "2021-11-25": 3.17,
    },
    tChol: {
      "2017-07-01": 5.69,
      "2021-11-25": 5.58,
    },
    trig: {
      "2017-07-01": 2.34,
      "2021-11-25": 3.01,
    },
  },
  "Huai Kee": {
    fastingGlucose: {
      "2017-08-21": 5.0,
    },
    hbA1c: {
      "2016-04-17": 5.6,
      "2017-08-21": 5.6,
    },
    hdl: {
      "2016-04-17": 1.01,
      "2017-08-21": 1.03,
    },
    ldl: {
      "2016-04-17": 2.8,
      "2017-08-21": 3.39,
    },
    tChol: {
      "2016-04-17": 4.57,
      "2017-08-21": 5.19,
    },
    trig: {
      "2016-04-17": 1.68,
      "2017-08-21": 1.69,
    },
  },
  "Huai Lee": {
    fastingGlucose: {
      "2017-03-01": 5.34,
      "2021-11-23": 5.6,
    },
    hbA1c: {
      "2016-04-17": 6.0,
      "2017-03-01": 5.8,
    },
    hdl: {
      "2016-04-17": 1.33,
      "2017-03-01": 1.58,
      "2021-11-23": 2.1,
    },
    ldl: {
      "2016-04-17": 2.65,
      "2017-03-01": 3.23,
      "2021-11-23": 3.8,
    },
    tChol: {
      "2016-04-17": 4.65,
      "2017-03-01": 5.15,
      "2021-11-23": 6.23,
    },
    trig: {
      "2016-04-17": 1.48,
      "2017-03-01": 0.76,
      "2021-11-23": 0.72,
    },
  },
  "Huay Boon": {
    fastingGlucose: {
      "2021-07-17": 5,
    },
    hbA1c: {},
    hdl: {
      "2021-07-17": 1.99,
    },
    ldl: {
      "2021-07-17": 2.61,
    },
    tChol: {
      "2021-07-17": 4.89,
    },
    trig: {
      "2021-07-17": 0.6,
    },
  },
  "Ah Gong": {
    fastingGlucose: {
      "2021-11-23": 9.8,
    },
    hbA1c: {},
    hdl: {
      "2021-11-23": 0.91,
    },
    ldl: {
      "2021-11-23": 2.35,
    },
    tChol: {
      "2021-11-23": 4.51,
    },
    trig: {
      "2021-11-23": 2.76,
    },
  },
  "Whai Hoon": {
    fastingGlucose: {
      "2021-11-13": 4.3,
    },
    hbA1c: {},
    hdl: {
      "2021-11-13": 2.3,
    },
    ldl: {
      "2021-11-13": 3.24,
    },
    tChol: {
      "2021-11-13": 6.11,
    },
    trig: {
      "2021-11-13": 1.26,
    },
  },
  Nicholas: {
    fastingGlucose: {
      "2021-07-10": 5.2,
    },
    hbA1c: {
      "2021-07-10": 5.2,
    },
    hdl: {
      "2021-07-10": 1.78,
    },
    ldl: {
      "2021-07-10": 2.28,
    },
    tChol: {
      "2021-07-10": 4.29,
    },
    trig: {
      "2021-07-10": 0.5,
    },
  },
  "Koon Hian": {
    fastingGlucose: { "2021-11-26": 4.5 },
    hbA1c: { "2021-11-26": 5.5 },
    hdl: { "2021-11-26": 1.13 },
    ldl: { "2021-11-26": 3.0 },
    tChol: { "2021-11-26": 4.75 },
    trig: { "2021-11-26": 1.37 },
  },
  "Koon Hwee": {
    fastingGlucose: { "2021-11-26": 3.8 },
    hbA1c: { "2021-11-26": 5.6 },
    hdl: { "2021-11-26": 1.44 },
    ldl: { "2021-11-26": 1.47 },
    tChol: { "2021-11-26": 3.32 },
    trig: { "2021-11-26": 0.9 },
  },
};
