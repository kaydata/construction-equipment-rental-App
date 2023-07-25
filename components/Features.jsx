import Link from "next/link";
import { features } from "../data/features";

export function Features() {
  return (
    <section className="mt-10 max-w-screen-xl mx-auto bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="flex flex-col items-center text-center mx-auto max-w-prose gap-y-6 px-6 2xl:px-0">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide">
          Features
        </h2>
        <p className="text-xl leading-9">
          Book any construction equipment today and keep your project on track!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 my-10 px-6 2xl:px-0 mx-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.key}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <Link href="/EquipmentListing"> <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg">Hire Equipment</button> </Link>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-start gap-y-7 border border-gray-300 p-10 rounded-2xl bg-gray-200 text-gray-800">
      <span className="text-neutral-400 stroke-current h-8 w-8">{icon}</span>
      <div>
        <h3 className="font-semibold mb-3">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
