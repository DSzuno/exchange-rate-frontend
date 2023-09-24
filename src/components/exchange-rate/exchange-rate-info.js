import { useEffect, useState } from "react";
import { getCurrencyBySymbol } from "../../utils/world-currency-symbols";
import { ImageNotSupported } from "@mui/icons-material";
import { Grid } from "@mui/material";

export const ExchangeRateInfo = ({ symbol }) => {
  const [symbolInfo, setSymbolInfo] = useState(null);

  useEffect(() => {
    setSymbolInfo(getCurrencyBySymbol(symbol));
  }, [symbol]);
  const generateSymbolInfo = () => {
    return (
      <>
        <img
          src={symbolInfo.Flag}
          width="30px"
          alt={symbolInfo.CountryName}
          style={{ marginRight: "10px" }}
        />
        {symbolInfo.Code} - {symbolInfo.CountryName} - {symbolInfo.Symbol}
      </>
    );
  };

  const generateDefaultSymbol = () => {
    return (
      <Grid container spacing={1.8}>
        <Grid item>
          <ImageNotSupported sx={{ marginLeft: 0.6, fontSize: 20 }} />
        </Grid>
        <Grid item>{symbol}</Grid>
      </Grid>
    );
  };
  return <>{symbolInfo ? generateSymbolInfo() : generateDefaultSymbol()}</>;
};
