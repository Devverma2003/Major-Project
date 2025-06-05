import React from "react";
import { motion } from "framer-motion";
import { FaSuitcase, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PlanTripSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/AboutPage"); // ✅ Update this route if your actual path is different
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Images */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-48 h-72 rounded-t-full overflow-hidden shadow-lg">
            <img
              src="trip1.avif"
              alt="Mountain"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md">
              <img
                src="Trip2.avif"
                alt="Kayak"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md">
              <img
                src="Trip3.avif"
                alt="Friends"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 font-semibold text-xl font-handwriting mb-2">
            Let’s Go Together
          </p>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Plan Your Trip <br />
            <span className="txt">With us</span>
          </h2>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don’t look even slightly.
          </p>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-start gap-4">
              <button className="text-white p-3 rounded-full">
                <FaSuitcase size={20} />
              </button>
              <div>
                <h4 className="text-lg font-semibold">Exclusive Trip</h4>
                <p className="text-sm text-gray-600">
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <button className="text-white p-3 rounded-full">
                <FaUserTie size={20} />
              </button>
              <div>
                <h4 className="text-lg font-semibold">Professional Guide</h4>
                <p className="text-sm text-gray-600">
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-white px-6 py-3 rounded-full font-medium transition"
             onClick={handleClick}
          >
            Learn More →
          </motion.button>
        </motion.div>

        {/* Right Traveler Image */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="guide.png" alt="Traveler" className="w-52" />
        </motion.div>
      </div>
    </section>
  );
};

export default PlanTripSection;
