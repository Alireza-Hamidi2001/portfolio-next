import About from "./_components/About";
import Certificates from "./_components/Certificates";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

function page() {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </div>
    );
}

export default page;
