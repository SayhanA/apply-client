import { FaAnchor, FaHandsHelping } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { AiOutlineFieldTime } from "react-icons/ai";
import Form from "./Form/Form";
const About = () => {
    return (
        <div className=''>
            <div className="w-[1200px] mx-auto my-32 ">
                <div>
                    <div className='flex items-center gap-3 text-xl font-bold'>
                        <div className='h-7 w-7 bg-blue-500'></div>
                        <p className='text-gray-500'> About Us</p>
                        <hr className='border-2 border-blue-500 w-[50px] rounded-full' />
                    </div>
                    <h3 className='text-3xl font-bold py-5 w-10/12'>We provide the best Educational Institutions for you best experience.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis neque natus eaque repudiandae praesentium molestias accusantium. Eaque magnam sapiente, voluptatem.</p>

                    <div className='grid lg:grid-cols-4 gap-5 my-10'>
                        <div className="p-7 pb-10 rounded-xl shadow-xl border">
                            <FaAnchor className="text-5xl text-blue-500" />
                            <h3 className="text-xl font-bold py-3">Secure Online Platform</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aut quia voluptates quas quaerat, temporibus sed delectus repellat et. Ullam debitis maiores natus quas.</p>
                        </div>
                        
                        <div className="p-7 pb-10 rounded-xl shadow-xl border">
                            <FaPeopleRoof className="text-5xl text-blue-500" />
                            <h3 className="text-xl font-bold py-3">Specialize Suggestion</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aut quia voluptates quas quaerat, temporibus sed delectus repellat et. Ullam debitis maiores natus quas.</p>
                        </div>
                        
                        
                        <div className="p-7 pb-10 rounded-xl shadow-xl border">
                            <AiOutlineFieldTime className="text-5xl text-blue-500" />
                            <h3 className="text-xl font-bold py-3">All Time Opening</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aut quia voluptates quas quaerat, temporibus sed delectus repellat et. Ullam debitis maiores natus quas.</p>
                        </div>
                        
                        <div className="p-7 pb-10 rounded-xl shadow-xl border">
                            <FaHandsHelping className="text-5xl text-blue-500" />
                            <h3 className="text-xl font-bold py-3">Help When Needed</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aut quia voluptates quas quaerat, temporibus sed delectus repellat et. Ullam debitis maiores natus quas.</p>
                        </div>
                        
                    </div>
                    
                </div>

                {/* <Form /> */}
                
            </div>
        </div>
    );
};

export default About;