export default function Contact() {
  return (
    <div className="mx-auto text-center mt-4">
      <h1 className="font-bold text-2xl">Contact Me</h1>
      <div className="text-gray-700 text-left mx-3.5">
        <label className="block mb-1">Full Name</label>
        <input
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-sm focus:shadow-outline"
          type="text"
        />
      </div>
      <div className="text-gray-700 text-left mx-3.5">
        <label className="block mb-1">Email</label>
        <input
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-sm focus:shadow-outline"
          type="text"
        />
      </div>
      <div className="text-gray-700 text-left mx-3.5">
        <label className="block mb-1">Message</label>
        <textarea className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-sm focus:shadow-outline"></textarea>
      </div>
    </div>
  );
}
