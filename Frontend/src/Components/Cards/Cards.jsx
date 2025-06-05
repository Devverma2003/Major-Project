import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Cards.css'

const cardData = [
  {
    title: 'Wildlife',
    image:
      'https://images.unsplash.com/photo-1596482261333-a273e56bfa76?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8',
    path: '/Categories/Wildlife',
  },
  {
    title: 'Walking',
    image:
      'https://media.istockphoto.com/id/1294276254/photo/a-beautiful-family-walks-together-on-a-tropical-paradise-beach-in-the-maldives.webp?a=1&b=1&s=612x612&w=0&k=20&c=jktlBR5KhuoyF1ovtEFl1_bb4TTn_WVbXCzfuYPILAU=',
    path: '/category/walking',
  },
  {
    title: 'Cruises',
    image:
      'https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3J1aXNlc3xlbnwwfHwwfHx8MA%3D%3D',
    path: '/category/cruises',
  },
  {
    title: 'City',
    image:
      'https://images.unsplash.com/photo-1672970514624-523eedcd76b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl0b3VyfGVufDB8fDB8fHww',
    path: '/category/citytour',
  },
]

const Cards = () => {
  return (
    <div className="w-full my-32 px-6">
      <h2 className="text-gray-600 text-xl italic text-center">Wonderful Places For You</h2>
      <h3 className="text-gray-800 font-bold text-3xl text-center pt-1">Tour Categories</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {cardData.map((card, index) => (
          <Link to={card.path} key={index}>
            <motion.div
              className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="h-40 overflow-hidden rounded-t-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h5 className="text-lg font-semibold text-blue-gray-900">
                  {card.title}
                </h5>
                <p className="text-sm text-gray-600">
                  Explore the best of {card.title.toLowerCase()} tours and destinations.
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cards
