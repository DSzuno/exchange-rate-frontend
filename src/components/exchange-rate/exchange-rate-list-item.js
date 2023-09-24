import {ListItem, ListItemButton} from "@mui/material";
import {ExchangeRateInfo} from "./exchange-rate-info";


export const ExchangeRateListItem = ({item, onClick}) => {
    const currencySymbol = item[0];
    const currencyRate = item[1]
    return(<ListItem
        disablePadding
        secondaryAction={
            <div>
                {currencyRate}
            </div>
        }
    >
        <ListItemButton onClick={() => onClick(currencySymbol)}>
            <ExchangeRateInfo symbol={currencySymbol} />
        </ListItemButton>
    </ListItem>);
}