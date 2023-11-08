import { FaGoogle, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-800 text-white">
            <aside>
                <img src="/footer_logo.png" alt=""/>
                <h4 className="text-white text-2xl mb-2">Car Doctor</h4>
                <p className='text-slate-300 text-lg leading-normal'>Edwin Diaz is a software and web technologies <br />  engineer , a life coach trainer who is also a serial .</p>

                <div className='flex items-center gap-6 mt-4'>
                    <p className='p-3 rounded-full bg-slate-600'> <FaGoogle></FaGoogle> </p>
                    <p className='p-3 rounded-full bg-slate-600'> <FaTwitter></FaTwitter> </p>
                    <p className='p-3 rounded-full bg-slate-600'> <FaInstagram></FaInstagram> </p>
                    <p className='p-3 rounded-full bg-slate-600'> <FaLinkedinIn></FaLinkedinIn> </p>
                </div>
            </aside> 

            <nav className=' space-y-3'>
                <header className=" text-white mb-5 text-2xl">About</header> 
                <a className="link link-hover text-lg">Home</a> 
                <a className="link link-hover text-lg">Services</a> 
                <a className="link link-hover text-lg">Contact</a> 
            </nav> 

            <nav className=' space-y-3'>
                <header className="text-white mb-5 text-2xl">Company</header> 
                <a className="link link-hover text-lg">Why Car Doctor</a> 
                <a className="link link-hover text-lg">About</a> 
            </nav> 

            <nav className=' space-y-3'>
                <header className="text-white mb-5 text-2xl">Support</header> 
                <a className="link link-hover text-lg">Support Center</a> 
                <a className="link link-hover text-lg">FeedBack</a> 
                <a className="link link-hover text-lg">Accesbility</a>
            </nav>

        </footer>
    );
};

export default Footer;