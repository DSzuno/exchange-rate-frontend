import { Card } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { fetchExchangeRare } from "../../api/exchange-rate.api";
import { ExchangeRateHeader } from "./exchange-rate-header";
import { ExchangeRateList } from "./exchange-rate-list";
import { ExchangeRateConfirmationDialog } from "./exchange-rate-confirmation-dialog";

export const ExchangeRate = () => {
  const updateFrequency = process.env.UPDATE_FREQUNCY || 180000;
  const timerIdRef = useRef(null);
  const [selectedSymbol, setSelectedSymbol] = useState("EUR");
  const [rateList, setRateList] = useState([]);
  const [isListLoading, setIsListLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSymbolToChange, setSelectedSymbolToChange] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSymbol]);

  useEffect(() => {
    const pollingCallback = () => {
      console.log("Polling...");
      loadRates();
    };

    const startPolling = () => {
      timerIdRef.current = setInterval(pollingCallback, updateFrequency);
    };

    const stopPolling = () => {
      clearInterval(timerIdRef.current);
    };

    startPolling();

    return () => {
      stopPolling();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rateList]);

  const loadRates = () => {
    setIsListLoading(true);
    setError(null);
    fetchExchangeRare(selectedSymbol)
      .then((rateList) => {
        setRateList(Object.entries(rateList.rate));
        setIsListLoading(false);
        setLastUpdate(new Date());
      })
      .catch((error) => {
        setIsListLoading(false);
        setError(error?.message || true);
      });
  };

  const handleRateListChangeRequest = (symbol) => {
    setSelectedSymbolToChange(symbol);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedSymbolToChange(null);
  };

  const handleDialogAgree = () => {
    setSelectedSymbol(selectedSymbolToChange);
    handleDialogClose();
  };

  return (
    <Card>
      <ExchangeRateHeader
        baseSymbol={selectedSymbol}
        lastUpdate={lastUpdate}
        updateFrequency={updateFrequency}
      />
      <ExchangeRateList
        baseSymbol={selectedSymbol}
        isLoading={isListLoading}
        rateList={rateList}
        onChangeBaseSymbol={handleRateListChangeRequest}
        error={error}
      />
      <ExchangeRateConfirmationDialog
        isOpen={isDialogOpen}
        symbol={selectedSymbolToChange}
        onAgree={handleDialogAgree}
        onClose={handleDialogClose}
      />
    </Card>
  );
};
