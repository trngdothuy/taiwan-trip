'use client'

import { useState } from "react";
import { itinerary }  from "../data/ItineraryData";

export default function ItineraryCard() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {itinerary.map(day => (
        <div key={day.day} className="border rounded-lg shadow-lg overflow-hidden">
          {/* Header của ngày, click để mở/thu gọn */}
          <div
            className="bg-blue-200 px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-blue-300 transition-colors"
            onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
          >
            <h3 className="text-2xl font-bold">Ngày {day.day} ({day.date}) - {day.city}</h3>
            <span className="text-xl">{openDay === day.day ? "▲" : "▼"}</span>
          </div>

          {/* Nội dung các địa điểm */}
          {openDay === day.day && (
            <div className="p-4 grid md:grid-cols-3 gap-6">
              {day.locations.map((loc) => (
                <div
                  key={loc.name}
                  className="border rounded-lg shadow hover:scale-105 transition-transform duration-200 overflow-hidden"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-bold text-lg mb-1">{loc.name}</h4>
                    <p className="text-sm mb-2 whitespace-pre-line">{loc.description}</p>
                    <p className="text-xs text-gray-500 mb-2">{loc.time}</p>
                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Xem bản đồ
                    </a>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                    {/* <Map
                        locations={day.locations.map((loc) => ({
                        name: loc.name,
                        lat: loc.lat,
                        lng: loc.lng,
                        mapLink: loc.mapLink,
                        }))}
                    /> */}
                    </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
