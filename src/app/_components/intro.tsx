export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-10 mb-16 md:mb-12">
      <div className="flex items-center">
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_mBMy56YKY8Wseh8dQGpDUw3OzkDPTusPyKptW5JBkAuQ=s160-c-k-c0x00ffffff-no-rj" className="w-12 h-12 rounded-full" alt="Logo de Chica Suculentas" />
        <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pl-2">
          Chica Suculentas
        </h1>
      </div>      
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Plantas, Suculentas y Más en{" "}
        <a
          href="https://www.youtube.com/channel/UCxswVwJWrMP5cOANwH9KGDQ"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Youtube
        </a>
      </h4>
    </section>
  );
}
