export default function Hero() {
  return (
    <section className="bg-orange-50 text-center py-40" id="home">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Discover Your Next <br />
          <span className="text-orange-500">Great Read</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Explore thousands of books from bestsellers to hidden gems. 
          Find your perfect story in our carefully curated collection.
        </p>
        
        {/* Browse Books button */}
        <button
          onClick={() =>
            document.getElementById("books").scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
        >
          Browse Books
        </button>
      </div>
    </section>
  );
}
