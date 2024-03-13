import React from 'react';
import { motion } from 'framer-motion';
import CharityTrackerImage1 from '/Users/shivrastogi/Desktop/Charity /background3.jpg'; // Import your images
import CharityTrackerImage2 from '/Users/shivrastogi/Desktop/Charity /charity_tracker_image_2.jpg';
import BlockchainImage from '/Users/shivrastogi/Desktop/Charity /CharityTrackerImage.jpg';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 py-12">
      <div className="container mx-auto px-4 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">About us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={CharityTrackerImage1}
              alt="Charity Tracker 1"
              className="w-full rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg mb-6"
            >
              Charity Impact Tracker is dedicated to bringing transparency and accountability to charitable giving. Our platform utilizes blockchain technology to ensure that every donation makes a real impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg mb-6"
            >
              With Charity Impact Tracker, donors can track their contributions in real-time and see exactly how their donations are being used to support charitable projects worldwide. We believe in empowering donors with the information they need to make a difference.
            </motion.p>
          </motion.div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg"
              >
                Our platform integrates advanced security measures powered by blockchain technology, ensuring the integrity and transparency of every transaction. Donors can have full confidence that their contributions are securely recorded and used for their intended purposes.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={BlockchainImage}
                alt="Blockchain Technology"
                className="w-full rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Join us in our mission</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg"
          >
            Charity Impact Tracker is committed to making a positive impact in the world by providing transparency, accountability, and security in charitable giving. Join us in our mission to create a world where every donation counts.
          </motion.p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Charity Impact Tracker?</h2>
          <ul className="list-disc list-inside text-lg">
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Transparency and Accountability
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Real-Time Tracking
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Empowering Donors
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Advanced Security Measures
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Global Impact
            </motion.li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-lg"
          >
            Meet our passionate team dedicated to revolutionizing charitable giving and making a difference in the world.
          </motion.p>
          {/* Add team member cards or images here */}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-lg"
          >
            Ready to make an impact? Join Charity Impact Tracker today and be a part of the change.
          </motion.p>
          {/* Add call-to-action button */}
        </div>
      </div>
    </div>
  );
};

export default About;
