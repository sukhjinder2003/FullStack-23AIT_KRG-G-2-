import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#0f172a" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EcoTrack Dashboard
        </Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
        <Button color="inherit" component={Link} to="/logs">Logs</Button>
        <Button color="inherit" component={Link} to="/performance">Performance</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
