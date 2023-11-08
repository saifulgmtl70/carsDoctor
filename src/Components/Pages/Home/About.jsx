import person from '../../../../public/about_us/person.jpg';
import parts from '../../../../public/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='lg:w-1/2 lg:relative'>
                    <img src={person} className="w-full h-auto mb-2 lg:h-[400px] lg:w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-full lg:w-1/2 lg:absolute right-0 lg:right-5 top-0 lg:top-2/3 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 mx-auto text-center lg:text-start space-y-4'>
                    <span className='text-red-500 font-bold text-lg leading-loose'>About Us</span>
                    <h1 className="text-5xl font-bold mt-5 mb-7"> We are qualified & of experience in this field </h1>

                    <p className="leading-loose text-slate-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some  form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <p className='leading-loose text-slate-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <button className="btn bg-red-500 hover:bg-red-500 text-white rounded-md">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;