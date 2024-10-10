import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../enums/apiUrl";
import { ENDPOINTS } from "../enums/endpoints";
import Swal from "sweetalert2";
import { CircleLoader } from "react-spinners";
import FagIcon from "../components/FagIcon";
import BackToHome from "../components/BackToHome";
const Faq = () => {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [open, setOpen] = useState();

  useEffect(() => {
    const getAllFaqs = async () => {
      try {
        const response = await axios.get(`${BaseUrl}${ENDPOINTS.FAQ_ENDPOINT}`);
        console.log(response.data);
        setFaqs(response.data.data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllFaqs();
  }, []);
  const navigate = useNavigate();
  if (errors) {
    Swal.fire({ icon: "error", text: errors });
  }
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className={loading ? "overflow-hidden" : ""}>


      {loading && (
        <div className="absolute  w-screen h-screen top-0 left-0 backdrop-blur-sm  flex justify-center items-center">
          <CircleLoader className="" color="#1385c2" size={150} />
        </div>
      )}

      {/*Faq page Header */}
      <div className="h-[50vh] bg-[#010101] text-white p-16 max-md:p-2 flex flex-col gap-6 justify-center">
 <BackToHome/>

        <div className="space-y-3 max-w-[50%] max-md:max-w-full">
          <h1 className="text-2xl font-bold">Faq's</h1>
          <p className="text-sm font font-semibold ">
            Here you'll find answers to the most common questions about our
            games, community, and services. Whether you're a new player or a
            seasoned gamer, we've got the info you need to enhance your gaming
            experience. Let's dive into the world of gaming and get you back to
            playing in no time !
          </p>
        </div>
      </div>
      <div className="p-16 max-md:p-2 max-md:py-10 space-y-4 max-md:text-sm">
        {faqs &&
          faqs.map((faq, index) => (
            <Accordion open={open === index} icon={<FagIcon id={index} open={open} />} key={faq._id} >
              <AccordionHeader onClick={() => handleOpen(index)} className="border border-blue-700 p-2 rounded-lg font-semibold text-blue-700 max-md:text-sm ">
               Q. {faq.question}
              </AccordionHeader>
              <AccordionBody className="max-md:text-[12px]" >{faq.answer}</AccordionBody>
            </Accordion>
          ))}
      </div>
    </div>
  );
};

export default Faq;
