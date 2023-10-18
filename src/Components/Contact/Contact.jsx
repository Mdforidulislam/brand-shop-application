
const Contact = () => {
    return (
        <div>
  <div className="max-w-lg mx-auto p-4 w-full">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form action="#" method="post">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#ff007a] focus:ring-opacity-50" placeholder="Your Name" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#ff007a] focus:ring-opacity-50" placeholder="Your Email" required />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-2">Address</label>
        <input type="text" id="address" name="address" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#ff007a] focus:ring-opacity-50" placeholder="Your Address" required />
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700 text-sm font-semibold mb-2">Comment</label>
        <textarea id="comment" name="comment" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#ff007a] focus:ring-opacity-50" placeholder="Your Comment" required defaultValue={""} />
      </div>
      <button type="submit" className="w-full bg-[#ff007a] text-white py-2 px-4 rounded-lg hover:bg-[#ff0055] transition-all duration-300 ease-in-out">
        Submit
      </button>
    </form>
  </div>
</div>

    );
};

export default Contact;