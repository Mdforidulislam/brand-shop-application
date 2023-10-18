import Banner from "../../Components/Banner/Banner";
import Cetatory from "../../Components/Cetagoray/Cetatory";
import Contact from "../../Components/Contact/Contact";
import CustomerReview from "../../Components/CustomarReview/CustomerReview";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Home = () => {
    return (
       <div>
         <div>
            {/* banner section */}
            <Banner></Banner>
            <div className="py-14">
            <div className="text-center space-y-5 mb-6">
                <h1 className="text-3xl font-bold mb-4">Brand Explore Section</h1>
                <p className="text-lg">Explore more brand item its valuable and exceptable item </p>
            </div>
               <Cetatory></Cetatory>
            </div>
            <div >
                <div>
                    
                    <CustomerReview></CustomerReview>
                </div>
            </div>
            <div className="block md:flex gap-4 max-w-screen-xl mx-auto items-center">
                <div className="p-6  space-y-6">
                    <h1 className="text-3xl font-bold">Contact Info</h1>
                    <p className=" my-4 w-3/4">
                    At BD we value your connection and aim to provide you with various means to reach out to us. If you have any questions, inquiries, or feedback, dont hesitate to get in touch. Our team is here to assist you in the best possible way.
                    </p>
                    <p className="text-gray-700 flex items-center gap-4"> <span><AiFillPhone></AiFillPhone></span> Phone Number: 984759287594</p>
                    <p className="text-gray-700 flex items-center gap-4"> <AiOutlineMail></AiOutlineMail> Email: fkajsr@gmail.com</p>
                </div>
                <div className="w-full">
                    <Contact></Contact>
                </div>
            </div>
        </div>
       </div>
      
    );
};

export default Home;