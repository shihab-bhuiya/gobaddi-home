const HeroStayTuned = () => {
  return (
    <div className="flex flex-col gap-4">

      {/* =========================
          STAY TUNED
      ========================== */}

      <div
        className="
          flex
          min-h-[220px]
          flex-1
          flex-col
          justify-center
          rounded-[24px]
          bg-[#C0612B]
          px-5
          py-7
          sm:min-h-[230px]
          lg:min-h-0
        "
      >
        <p
          className="
            text-[40px]
            font-extrabold
            leading-none
            text-[#171717]
            sm:text-[44px]
            lg:text-[48px]
          "
        >
          STAY
        </p>

        <p
          className="
            mt-2
            text-[40px]
            font-extrabold
            leading-none
            text-white
            sm:text-[44px]
            lg:text-[48px]
          "
        >
          Tuned...
        </p>
      </div>

      {/* =========================
          LAUNCH
      ========================== */}

      <div
        className="
          flex
          h-[100px]
          flex-col
          justify-center
          rounded-[24px]
          border
          border-[#C0612B]
          bg-[#FFFDFB]
          px-4
          sm:h-[110px]
        "
      >
        <p className="text-[13px] font-medium text-[#171717] sm:text-[14px]">
          We are near to:
        </p>

        <div className="flex items-center justify-between">
          <p
            className="
              text-[38px]
              font-extrabold
              leading-none
              text-[#C0612B]
              sm:text-[42px]
            "
          >
            Launch
          </p>

          {/* small decorative symbol */}
          <div className="flex flex-col items-center">
            <span className="text-[18px] leading-none text-[#C0612B]">
              ▲
            </span>
            <span className="text-[13px] font-bold text-[#C0612B]">
              !!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStayTuned;