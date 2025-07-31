import AlokK from "../assets/AlokK.jpeg";
const Lines = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-3xl md:text-4xl font-light text-gray-800 leading-tight">
          "We harness <span className="font-medium">your data</span>, understand your audience, and <span className="font-medium">use AI</span> to help your brand rise above the noise. The best part? <span className="font-medium">We execute, too.</span>"
        </p>
        <div className="mt-12 flex justify-center items-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={AlokK}
            alt="Founder of ORB AI"
            
          />
          <div className="ml-4 text-left">
            <p className="text-lg font-semibold text-gray-900">Alok</p>
            <p className="text-base font-medium text-gray-500">Designer of KAIRO AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lines;