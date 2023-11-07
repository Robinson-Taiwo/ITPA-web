/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";
// import "./PageLayout.css"

const PageLayout = ({ children }) => {
    return (
        <div className="flex flex-col overflow-hidden w-screen h-screen">
            <Navbar />

            <main className="flex-grow overflow-auto">
                {children}
                <Footer />
            </main>
        </div>
    );
};


export default PageLayout
