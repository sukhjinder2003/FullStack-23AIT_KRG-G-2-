import { useSelector, useDispatch } from "react-redux";
import { fetchLogs } from "../logsSlice";
import { useEffect, useCallback, useMemo } from "react";
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead,
  TableRow, Paper, Button
} from "@mui/material";
import { Skeleton, Stack } from "@mui/material";


const Logs = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.logs);

  // 🔥 MEMOIZED CALCULATION
  const xyz = useMemo(() => {
    console.log("Calculating total carbon...");
    return data.reduce((total, log) => total + log.carbon, 0);
  }, [data]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  const handlefetch = useCallback(() => {
    dispatch(fetchLogs());
  }, [dispatch]);

  if (status === "loading") {
  return (
    <Stack spacing={2} padding={2}>
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
    </Stack>
  );
}
  if (status === "failed") return <p>Error: {error}</p>;

  return (
  <div style={{ padding: "1rem", backgroundColor: "black" }}>
    <h2 style={{color: "white"}}>Daily Logs (Redux)</h2>

    <TableContainer component={Paper} style={{backgroundColor: "#6fffca"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Activity</b></TableCell>
            <TableCell><b>Carbon (kg CO₂)</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.activity}</TableCell>
              <TableCell
                sx={{
                  color: log.carbon > 4 ? "error.main" : "success.main",
                  fontWeight: 600
                }}
              >
                {log.carbon}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Button
      variant="contained"
      color="primary"
      sx={{ mt: 2 }}
      onClick={handlefetch}
    >
      Refresh ↻
    </Button>

    <h3 style={{ marginTop: "15px", color: "white"}}>
      Total Carbon Emission: {xyz} kg CO₂
    </h3>
  </div>
);

};

export default Logs;
