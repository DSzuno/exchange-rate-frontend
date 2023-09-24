import { CardContent, Grid, Typography } from "@mui/material";
import moment from "moment";
import { ExchangeRateInfo } from "./exchange-rate-info";

export const ExchangeRateHeader = ({
  baseSymbol,
  lastUpdate,
  updateFrequency,
}) => {
  return (
    <CardContent sx={{ background: "blue", color: "white" }}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <ExchangeRateInfo symbol={baseSymbol} /> | Exchange Rate
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "end" }} xs={5}>
          <Typography sx={{ fontSize: 14 }} align="right">
            Last update {lastUpdate && moment(lastUpdate).fromNow()} next update
            will be at:{" "}
            {moment(lastUpdate).add(updateFrequency, "ms").format("HH:mm")}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};
