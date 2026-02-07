import { useMemo } from "react";

export default function useEmissionStats(data) {
  return useMemo(() => {
    console.log("Calculating emissions...");

    let total = 0;
    data.forEach(item => total += item.emission);

    const avg = data.length ? total / data.length : 0;

    return { total, avg };
  }, [data]);
}
