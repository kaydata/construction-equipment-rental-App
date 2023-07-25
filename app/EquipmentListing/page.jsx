"use client"
import { useState } from 'react';
import data from '../../data/equipment'
const EquipmentListing = () => {
    const [equipmentData] = useState(data);
  return (
    <div className="container mx-auto py-10 px-5">
            <h1 className="text-4xl font-bold mb-5">Equipment Listing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {equipmentData?.map((equipment) => (
                    <div key={equipment.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                        <img src={equipment.imageURL} alt={equipment.name} className="w-full h-64 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-lg">{equipment.name}</h2>
                            <p className="text-gray-700">{equipment.description}</p>
                            <p className="text-green-500">${equipment.rentalPricePerDay} per day</p>
                            <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
    </div>

  )
}

export default EquipmentListing