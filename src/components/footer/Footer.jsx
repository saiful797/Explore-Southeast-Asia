
const Footer = () => {
    return (
        <footer className="p-5 text-center mt-10 bg-black text-white">
            <div className="footer max-w-6xl grid  place-content-center md:place-content-between	">
                <aside>
                   <img className="w-32 rounded-full mx-auto" src="https://i.postimg.cc/dVdgG99W/181549068-padded-logo.png" alt="Coming Soon...." />
                    <p className="text-base"><a className="text-3xl font-semibold md:font-bold">Explore Southeast Asia</a><br/>Best Tourism Since 1999</p>
                </aside> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-3xl footer-center">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-3xl footer-center">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-3xl footer-center">Legitimate</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;