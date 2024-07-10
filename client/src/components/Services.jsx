import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  const navigate = useNavigate();
  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  const getServices = async () => {
    const result = await axios.get(`http://localhost:4000/top3services`);
    console.log(result.data.data);
    setServices(result.data.data);
  };

  useEffect(() => {
    getServices();
  }, []);

  let filteredServices = services;

  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto px-4">
        {/* <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-4 lg:mt-8 mb-4 lg:mb-8 lg:mx-auto lg:w-3/4"> */}
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-8 ">
          บริการยอดฮิตของเรา
        </h2>
        <div className="p-4 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 md:px-20 md:py-16">
          {filteredServices.map((service) => (
            <ServiceCard key={service.service_id} service={service} />
          ))}
        </div>
        <div className="text-center mt-6 lg:mt-8">
          <button
            onClick={() => handleMenuItemClick("/servicelist")}
            className="px-4 lg:px-6 py-2 bg-blue-500 text-white rounded"
          >
            ดูบริการทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
