import Header from './components/Header';
import Footer from './components/Footer';

export default function (page, type) {
    if (type == "full") {
        return (
            <>
                <Header username="SARVARBEK" />
                {page}
                <Footer />
            </>
        );
    }
}