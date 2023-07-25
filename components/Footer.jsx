import React from 'react'
import { ScrollToTop } from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 2xl:px-0">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="font-bold text-xl mb-2">Mjengo Hire</h2>
            <p className="text-sm">123 Main Street, Anytown, State, Country</p>
            <p className="text-sm">info@company.com | (123) 456-7890</p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#" className="text-sm text-gray-300 hover:text-white mr-4">Terms of Service</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Privacy Policy</a>
          </div>
          <ScrollToTop />
        </div>
        
      </footer>
  )
}

export default Footer