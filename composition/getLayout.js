import Header from './components/Header';
import Footer from './components/Footer';
import Box from '@mui/material/Box';

export default function (page, type) {
    if (type == "full") {
        return (
            <>
                <Header username="SARVARBEK" />
                {page}
                <Footer />
            </>
        );
    } else if (type == "header_only") {
        return (
            <Box sx={{ display: "flex", height: "100%", flexFlow: "column" }}>
                <Header />
                {page}
            </Box>
        );
    }
}