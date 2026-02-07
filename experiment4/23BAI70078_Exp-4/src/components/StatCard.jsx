import { Card, CardContent, Typography, Stack } from "@mui/material";

const StatCard = ({ title, value, unit }) => {
  return (
    <Card
      sx={{
        borderRadius: 6,
        boxShadow: 30,
        px: 2,
        py: 2,
        margin: 2,
        minHeight: 120,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#6fffca" 
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Stack spacing={1.5}>

          {/* Small label */}
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: 2.2,
              color: "black",
              fontWeight: 800
            }}
          >
            {title}
          </Typography>

          {/* Main number */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              lineHeight: 1
            }}
          >
            {value}
          </Typography>

          {/* Unit */}
          <Typography
            variant="body2"
            sx={{
              color: "text.warning",
              fontWeight: 800
            }}
          >
            {unit}
          </Typography>

        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatCard;
