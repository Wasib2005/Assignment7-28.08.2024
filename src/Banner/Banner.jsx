const Banner = () => {
  return (
    <>
      <div className="flex justify-center relative mt-14 text-white md:w-[1280px] m-auto">
        <img className="w-[600px] md:w-[1100px]" src="./src/assets/Banner.png" alt="" />
        <div className="absolute bottom-1/4">
          <h1 className="md:w-[800px] m-auto t text-xl md:text-4xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="w-[400px] md:w-[900px] text-sm md:text-base mt-2 md:mt-7 m-auto">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="mt-2 md:mt-4 flex gap-5 md:gap-10 justify-center">
            <button className="btn text-[15px] md:text-xl rounded-3xl btn-success">Explore Now</button>
            <button className="btn text-[15px] md:text-xl rounded-3xl btn-outline">Our Feedback</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
