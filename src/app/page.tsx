

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  <div className="relative mx-auto grid max-w-6xl grid-cols-12 grid-rows-6 gap-4">
  
  {/* Heading */}
  <div className="col-span-7 row-span-3 rounded-[24px] border border-orange-500 p-8">
    <h1>Where Livestock Meets Intelligence.</h1>
  </div>

  {/* Cow */}
  <div className="col-span-5 row-span-3 overflow-hidden rounded-[24px]">
    <img
      src="/images/cow.png"
      alt="Cow"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Stay */}
  <div className="col-span-3 row-span-2 rounded-[24px] bg-orange-600 p-6">
    STAY
    <br />
    Tuned...
  </div>

  {/* Phone */}
  <div className="col-span-3 row-span-3 rounded-[24px] bg-orange-600">
    Phone
  </div>

  {/* Description */}
  <div className="col-span-6 row-span-3 rounded-[24px] border border-orange-500 p-6">
    AI-powered digital platform...
  </div>

  {/* Middle circle */}
  <div className="absolute left-1/2 top-[55%] z-20 -translate-x-1/2 -translate-y-1/2">
    <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-[3px] border-orange-600 bg-white">
      <img
        src="/images/logo.png"
        alt="Logo"
        className="w-28"
      />
    </div>
  </div>

</div>
      </main>
    </div>
  );
}
