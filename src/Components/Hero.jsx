const Hero = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/tQ0T4Db/pexels-rdne-6646918.jpg')] bg-no-repeat bg-center bg-cover w-full h-96 flex flex-col items-center justify-center mb-3 relative">
        <div className="absolute inset-0 bg-black opacity-50">
          <div className="lg:w-1/2 lg:mx-auto lg:my-20 md:my-10 my-5 text-center md:mx-5">
            <h1 className="lg:text-5xl md:text-3xl texl-2xl text-white font-extrabold">
              Join Us in Making a Difference
            </h1>
            <p className="text-xl text-white font-bold p-5 m-5">
              Discover the power of giving back and join our community of
              volunteers dedicated to making a positive impact.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Hero;