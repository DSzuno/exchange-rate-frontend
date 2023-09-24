import {CardContent, Divider, Grid, List, TextField, Typography} from "@mui/material";
import {ContentLoader} from "../layout/content-loader";
import {ExchangeRateListItem} from "./exchange-rate-list-item";
import {useState} from "react";
import {EmptyListCard} from "../layout/empty-list-card";
import {ErrorOutline} from "@mui/icons-material";

export const ExchangeRateList = ({baseSymbol, isLoading, rateList, onChangeBaseSymbol, error}) => {
    const [searchText, setSearchText] = useState("");

    const getFilteredList = () => {
        return !searchText ? rateList : rateList.filter(item => item[0].toLowerCase().includes(searchText.toLowerCase()))
    }
    const generateList = () => {
        return(<>
            <List>
                {getFilteredList().map(listItem => <ExchangeRateListItem
                    key={listItem[0]}
                    item={listItem}
                    onClick={onChangeBaseSymbol}
                />)}
            </List>
        </>)
    }

    return(<>
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField
                        id="search"
                        label="Search"
                        variant="filled"
                        size="small"
                        disabled={isLoading}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </Grid>
                <Grid item xs sx={{display: "flex", alignItems: "center", justifyContent: "end"}}>
                    <Typography variant="h6" component="h6" align="right">
                        1 {baseSymbol} =
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        <Divider variant="middle" />
        {isLoading && <ContentLoader />}
        {!isLoading && rateList && getFilteredList().length > 0 && generateList()}
        {!isLoading && error && <EmptyListCard message={error === true ? "Error while try to load data!" : error} icon={<ErrorOutline sx={{fontSize: 100}} color="error" />} />}
        {!isLoading && rateList && getFilteredList().length === 0 && searchText !== "" && <EmptyListCard />}

    </>)
}