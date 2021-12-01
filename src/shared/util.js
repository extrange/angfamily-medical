import { parseISO, compareDesc } from "date-fns";

/** Get an extreme value for a `resultType` from `healthData`.
 *
 * `latest`: Whether to only consider the latest result of each person (default: `true`)
 *
 * `highest`: Whether to take the highest value (default: `false`) or the lowest
 *
 * Returns an object `{name, date, value}` or `null` if there were no results for that `resultType`*/
export const getExtremeValue = (
  healthData,
  resultType,
  { latest = true, highest = false } = {}
) => {
  let result = null;

  /* Loop through each person */
  Object.entries(healthData).forEach(([person, results]) => {
    // Filter by resultType
    let selectedResults = Object.entries(results[resultType] ?? {})

      // Convert date strings to Date() objects
      .map(([dateStr, value]) => [parseISO(dateStr), value])

      // Sort in reverse chronological order (latest first)
      .sort((a, b) => compareDesc(a[0], b[0]));

    // If there were no results for this person, don't do anything
    if (!selectedResults.length) return;

    /* If latest=true, just use the latest result to compare.
    Otherwise, find the highest value if highest=true, else the lowest. */
    let resultToCompare = latest
      ? selectedResults[0]
      : selectedResults.reduce((extremeVal, val) =>
          highest
            ? val[1] > extremeVal[1]
              ? val
              : extremeVal
            : val[1] < extremeVal[1]
            ? val
            : extremeVal
        );

    if (!result)
      result = {
        name: person,
        date: resultToCompare[0],
        value: resultToCompare[1],
      };

    if (highest && resultToCompare[1] > result.value) {
      result = {
        name: person,
        date: resultToCompare[0],
        value: resultToCompare[1],
      };
    } else if (!highest && resultToCompare[1] < result.value) {
      result = {
        name: person,
        date: resultToCompare[0],
        value: resultToCompare[1],
      };
    }
  });

  return result;
};
