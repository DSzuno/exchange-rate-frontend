import {
  Box,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { SearchOff } from "@mui/icons-material";

export const EmptyListCard = ({ icon, message }) => {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box>
        <CardContent sx={{ textAlign: "center" }}>
          {icon || <SearchOff sx={{ fontSize: 100 }} color="primary" />}
        </CardContent>
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="h5" align="center" color="text.secondary">
            {message || "No search result"}
          </Typography>
        </CardContent>
      </Box>
    </Container>
  );
};
