const Banner = () => {
  return (
    <div className="container mt-32">
      <div className="grid lg:grid-cols-[66%,34%] gap-4 pr-[15px] ">
        <div
          className=" h-[200px] md:h-[260px]
            bg-[url(/download1.jpeg)] bg-cover bg-center rounded-xl p-8 md:p-16 "
        >
          <p className="text-topHeadingSecondary text-xl font-medium">
            Sale 20% off all store
          </p>
          <h2 className="text-topHeadingPrimary font-bold sm:text-3xl max-w-[240px]">
            Smartphone BLU G91 Pro 2024
          </h2>
          <a
            className="inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium"
            href="#"
          >
            {" "}
            Shop Now
          </a>
        </div>
        <div className="h-[260px] bg-[url(/download2.jpeg)] bg-right rounded-xl hidden lg:block  "></div>
      </div>
    </div>
  );
};

export default Banner;
