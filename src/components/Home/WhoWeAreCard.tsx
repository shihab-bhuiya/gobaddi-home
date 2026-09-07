import Image from "next/image";

const WhoWeAreCards = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/wow/bgofwow.png')]
          bg-cover
          bg-bottom
          bg-no-repeat
        "
      />

      {/* Cards */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1140px]
          px-5
          pb-10
          pt-8
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-end
            gap-5
            sm:grid-cols-3
            sm:gap-6
          "
        >
          {/* ================= IMAGE 1 ================= */}
          <div
            className="
              relative
              mx-auto
              h-[230px]
              w-full
              max-w-[300px]
              overflow-hidden
              rounded-[20px]
              sm:mx-0
              sm:h-[250px]
              sm:max-w-none
              sm:-rotate-1
              lg:h-[270px]
            "
          >
            <Image
              src="/wow/image-1.png"
              alt="Farmer with livestock"
              fill
              sizes="(max-width: 640px) 90vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* ================= IMAGE 2 ================= */}
          <div
            className="
              relative
              mx-auto
              h-[250px]
              w-full
              max-w-[300px]
              overflow-hidden
              rounded-[20px]
              sm:mx-0
              sm:h-[280px]
              sm:max-w-none
              lg:h-[295px]
            "
          >
            <Image
              src="/wow/image-2.png"
              alt="Livestock farmer"
              fill
              sizes="(max-width: 640px) 90vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* ================= IMAGE 3 ================= */}
          <div
            className="
              relative
              mx-auto
              h-[230px]
              w-full
              max-w-[300px]
              overflow-hidden
              rounded-[20px]
              sm:mx-0
              sm:h-[250px]
              sm:max-w-none
              sm:rotate-1
              lg:h-[270px]
            "
          >
            <Image
              src="/wow/image-3.png"
              alt="Woman with livestock"
              fill
              sizes="(max-width: 640px) 90vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreCards;