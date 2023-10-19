

const CustomerReview = () => {
   
    return (
    <div>
  <div className=" py-10">
            <div className="text-center mb-4">
                <h1 className="text-3xl font-bold">Customer Review</h1>
                <p>Read what our valued customers have to say about their experiences.</p>
            </div>
    <div className="container mx-auto flex flex-wrap justify-center">
        
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <img src="customer2.jpg" alt="Customer 2" className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-2">Customer Name 2</h3>
            <p className="text-gray-600">Title/Position</p>
          </div>
          <p className="mt-4 text-gray-700">
            Customer 2s review and comment here. We were impressed with the quality
          </p>
          <div className="mt-4 text-yellow-400">
            ★★★★★
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <img src="customer3.jpg" alt="Customer 3" className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-2">Customer Name 3</h3>
            <p className="text-gray-600">Title/Position</p>
          </div>
          <p className="mt-4 text-gray-700">
            Customer 3s review and comment here. Your team exceeded our expectations.
          </p>
          <div className="mt-4 text-yellow-400">
            ★★★★★
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <img src="customer4.jpg" alt="Customer 4" className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-2">Customer Name 4</h3>
            <p className="text-gray-600">Title/Position</p>
          </div>
          <p className="mt-4 text-gray-700">
            Customer 4s review and comment here. We look forward to future collaborations
          </p>
          <div className="mt-4 text-yellow-400">
            ★★★★☆
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default CustomerReview;