import Link from "next/link";
import { Icons } from "./Icons";

export function Hero() {
  return (
    <section className="relative bg-black">
      <img
        src="https://images.unsplash.com/photo-1649829809465-d358fce60ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="hero img"
        role="presentation"
        fetchpriority="high"
        className="absolute z-0 inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative flex flex-col px-6 2xl:px-0 max-w-screen-xl mx-auto z-10">
        <div className="flex flex-col gap-y-8 z-20 w-full mt-20">
          <h1 className="text-4xl leading-[1.4] lg:text-5xl font-semibold lg:max-w-4xl lg:leading-[1.175] text-white">
            Your One-Stop Destination for Construction Equipment Rentals
          </h1>
          <p className="text-xl leading-9 lg:max-w-2xl text-white">
            Welcome to the Home of construction equipment. Explore our catalogue to hire for your desired period and at friendly prices
          </p>
          <Link href="/EquipmentListing" className="group mt-3 font-semibold w-full flex items-center justify-center md:w-56 bg-purple text-black px-2 py-[10px] rounded-md text-lg border hover:bg-transparent hover:text-white hover:border-white transition-all duration-150">
              Hire Construction Equipment
          </Link>
        </div>
        <div className="mt-10 mb-10 ">
          <p className="text-xl underline font-semibold mb-8 text-center lg:text-center text-white">
            Why Hire Construction Equipment?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <h2 className="font-bold text-xl text-white text-center mt-4">Reduce Costs</h2>
              <p className="text-white">By hiring equipment, you can avoid the large upfront costs of purchasing, as well as ongoing expenses for storage and maintenance.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h2 className="font-bold text-xl text-white text-center mt-4">Access Latest Technology</h2>
              <p className="text-white">Hiring allows you to use the latest technology and high-quality equipment, which might be too expensive to buy for every project.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h2 className="font-bold text-xl text-white text-center mt-4">Flexibility</h2>
              <p className="text-white">Hiring provides the flexibility to get the right equipment for each project, rather than being limited to the equipment you own.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
