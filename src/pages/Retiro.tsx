import * as React from 'react';
import BasicCard from "../components/BasicCard";
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material"; // Grid version 2
const Retiro = () => {
    return (
        <>
               <Typography variant="h3" marginBottom={3} textAlign={"center"}> ASSINE O PLANO PARA AJUDAR NO RETIRO!</Typography>
               <Grid container spacing={3}>
                   <Grid item xs={8} md={6}>
                       <BasicCard title="Patrôcinio de R$10,00" subtitle="É só um coca-cola!" price="10" link={"https://buy.stripe.com/00gaIg7RW2KS1AA8wz"}/>
                   </Grid>
                   <Grid item xs={8} md={6}>
                       <BasicCard title="Patrôcinio de R$25,00" subtitle="Não é nem um X-Salada..." price="25" link={"https://buy.stripe.com/bIY6s0a045X46UU9AE"}/>
                   </Grid>
                   <Grid item xs={8} md={6}>
                       <BasicCard title="Patrôcinio de R$50,00" subtitle="Você gasta mais no Shopping..." price="50" link={"https://buy.stripe.com/8wM6s07RW1GObbaeUZ"}/>
                   </Grid>
                   <Grid item xs={8} md={6}>
                       <BasicCard title="Patrôcinio de R$100,00" subtitle="É um adolescente a mais no retiro!" price="100" fontSizeValue={34} link={"https://buy.stripe.com/cN25nW3BGgBIa766ou"}/>
                   </Grid>
               </Grid>

        </>
    );
}
export default Retiro;