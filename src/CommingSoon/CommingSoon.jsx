import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from '../components/variants';
import { TypeAnimation } from 'react-type-animation';
const CommingSoon = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-300 to-purple-400">
            <div className=" min-h-screen flex flex-col justify-center items-center">
            <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-6xl lg:text-9xl font-bold my-5 leading-[1]'>

                            <TypeAnimation sequence={[
                                'Coming',
                                1000,
                                'Soon',
                                1000,
                            ]}
                                speed={50}
                                className='text-[#201658]'
                                wrapper='span'
                                repeat={Infinity}
                            ></TypeAnimation>
                        </motion.div>
                <Link to="/"><button className="btn btn-outline text-lg my-5">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default CommingSoon;