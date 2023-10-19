

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
            <img src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1c2luZXNzbWFufGVufDB8fDB8fHww" alt="Customer 2" className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-2">John Doe</h3>
            <p className="text-gray-600">Great Product!</p>
          </div>
          <p className="mt-4 text-gray-700">
          I bought this product last month, and it exceeded my expectations. Its a must- impliment this ! 
          </p>
          <div className="mt-4 text-yellow-400">
            ★★★★★
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1618568949779-895d81686151?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer 3" className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-2">e Smith</h3>
            <p className="text-gray-600">Impressive Quality</p>
          </div>
          <p className="mt-4 text-gray-700">
          The quality of this product is outstanding. Ive been using it for a while, and Im very satisfied.
          </p>
          <div className="mt-4 text-yellow-400">
            ★★★★★
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1631131431211-4f768d89087d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer 4" className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-2">David Johnson</h3>
            <p className="text-gray-600">Highly Recommend</p>
          </div>
          <p className="mt-4 text-gray-700">
          Ive recommended this product to all my friends and family. Its reliable and does the job well
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