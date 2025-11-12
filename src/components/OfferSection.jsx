import React from "react";
import { Gift, Users, Trophy } from "lucide-react"; // icons

const offers = [
  {
    id: 1,
    title: "Win 100% Cashback",
    desc: "Play fun challenges & get assured cashback rewards every day.",
    icon: Gift,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 2,
    title: "Refer & Earn",
    desc: "Invite your friends & earn bonus coins whenever they play.",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Play & Win Daily",
    desc: "Join contests daily to win cash prizes and exciting goodies.",
    icon: Trophy,
    color: "bg-blue-100 text-blue-600",
  },
];

const OffersSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Exciting Offers 🎁
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map(({ id, title, desc, icon: Icon, color }) => (
            <div
              key={id}
              className="p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition bg-gradient-to-b from-white to-gray-50"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 ${color}`}
              >
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
