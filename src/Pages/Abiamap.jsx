// src/Abiamap.jsx
export default function Abiamap() {
  const filters = ["Restaurants", "Hotels", "Museums", "Transit", "Pharmacies"];

  return (
    <div className="relative h-screen w-full">
      {/* Google Map Embed */}
      <iframe
        title="Aba Map"
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.330038654096!2d7.370019374148163!3d5.121448794856294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10428b0bbd5d923b%3A0x7d63b9977389c2d6!2sAba%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1715760000000"
      ></iframe>

      {/* Search bar and filter buttons */}
      <div className="absolute top-4 right-4 z-10 space-y-4">
        <input
          type="text"
          placeholder="Search Abia State Maps"
          className="p-2 rounded-lg shadow-md w-64 border 
                   bg-white/90 backdrop-blur-sm  
                   border-gray-300              
                   focus:bg-white              
                   placeholder-gray-500       
outline-none
                   text-gray-800              
                   focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                   transition-all"
        />
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              className="bg-green-500 text-white px-4 py-1 rounded-md 
                       hover:bg-green-600 text-sm shadow-sm
                       transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}