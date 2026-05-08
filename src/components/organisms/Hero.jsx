export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-canvas pt-20 md:pt-32 pb-20 flex flex-col justify-center">
      <img
        src="/images/hero_empathoai.png"
        alt=""
        width="1920"
        height="1080"
        className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.2]"
      />
      <div className="absolute inset-0 bg-canvas/40" />

      <div className="relative z-10 container-empatho">
        <div className="max-w-full lg:max-w-7xl">
          <div className="flex flex-col items-start gap-2">
            <h1 className="flex flex-col -gap-1 md:gap-0">
              <span className="display-campaign text-text-primary">YOUR BUSINESS</span>
              <span className="display-campaign text-text-primary">IS <span className="bg-highlight">NOT</span> STUCK.</span>
              <span className="display-campaign text-text-primary">YOUR SYSTEM IS.</span>
            </h1>

            <div className="mt-8 flex flex-col items-start gap-1">
              <p className="hero-lead flex flex-col items-start gap-1">
                <span className="bg-highlight-inline w-fit">More customers.</span>
                <span className="bg-highlight-inline w-fit">More cash flow.</span>
                <span className="bg-highlight-inline w-fit">Less chaos.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


