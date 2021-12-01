import { parseISO, compareDesc } from "date-fns";

/** Gets sorted rankings for the highest/lowest `resultType` from `healthData`.
 *
 * `latest`: Whether to only consider the latest result of each person (default: `true`),
 * or all results ever taken by that person
 *
 * `highest`: Whether to take the highest value (default: `false`) or the lowest
 * for each person
 *
 * Returns an array of `{name, date, value}` sorted high to low if `highest=true`, else
 * low to high.*/
export const getSortedValues = (
  healthData,
  resultType,
  { latest = true, highest = false } = {}
) => {
  let results = [];

  /* Loop through each person */
  Object.entries(healthData).forEach(([person, _results]) => {
    // Filter by resultType
    let relevantResults = Object.entries(_results[resultType] ?? {})

      // Convert date strings to Date() objects
      .map(([dateStr, value]) => [parseISO(dateStr), value])

      // Sort in reverse chronological order (latest first)
      .sort((a, b) => compareDesc(a[0], b[0]));

    // If there were no results of resultType for this person, skip this person
    if (!relevantResults.length) return;

    /* If latest=true, just use the latest result to compare.
    Otherwise, find the highest value if highest=true, else the lowest. */
    let resultToAdd = latest
      ? relevantResults[0]
      : relevantResults.reduce((extremeVal, val) =>
          highest
            ? val[1] >= extremeVal[1]
              ? val
              : extremeVal
            : val[1] <= extremeVal[1]
            ? val
            : extremeVal
        );

    results.push({
      name: person,
      date: resultToAdd[0],
      value: resultToAdd[1],
    });
  });

  //Sort high to low if `highest=true`
  results.sort(({value: v1}, {value: v2}) => highest ? v2 - v1 : v1 - v2)

  return results;
};
