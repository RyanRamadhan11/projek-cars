import Navbar from '../components/Navbar';
import MulaiSewa from '../components/MulaiSewa';
import Ourservices from '../components/OurServices';
import Whyus from '../components/Whyus';
import Testimonial from '../components/Testimonial';
import About from '../components/About';
import Faq from '../components/Faq';
import Footer from '../components/Footer';


function Home() {
    return (
        <>
            <Navbar />
            <MulaiSewa />

            <main>
                <Ourservices />
                <Whyus />
                <Testimonial />
                <About />
                <Faq />
            </main>
            <Footer />
        </>
    );
}

export default Home;
