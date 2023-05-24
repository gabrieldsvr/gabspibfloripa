import './App.css'
import MainRoutes from "./routes/MainRoutes";
import {Header} from "./components/Header";
import {Container} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif'
        ].join(','),
    }
});

function App() {

    return (
        <>
            <ThemeProvider theme={theme}>

            <Header/>
            <Container maxWidth="sm" >
                <MainRoutes/>
            </Container>
            </ThemeProvider>
        </>
    )
}

export default App;