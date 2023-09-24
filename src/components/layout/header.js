import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            align="left"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Exchange rate application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
