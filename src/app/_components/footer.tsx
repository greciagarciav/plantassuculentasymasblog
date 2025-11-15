import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div className="flex items-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_mBMy56YKY8Wseh8dQGpDUw3OzkDPTusPyKptW5JBkAuQ=s160-c-k-c0x00ffffff-no-rj" className="w-12 h-12 rounded-full" alt="Logo de Chica Suculentas" />
            <h1 className="text-3xl font-bold tracking-tighter leading-tight md:pl-2">
              Chica Suculentas
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
                href="https://www.youtube.com/channel/UCxswVwJWrMP5cOANwH9KGDQ"
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                YOUTUBE
              </a>
              {/* <a
                href="https://www.instagram.com/chicasuculentas/"
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                INSTAGRAM
              </a> */}
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
              <a
                  href="https://www.pinterest.com/chicasuculentas/"
                  className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                 PINTEREST
              </a>
              <a
                href="https://www.tiktok.com/@chicasuculentas"
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                TIKTOK
              </a>
            </div>
          </div>
          
        </div>
        <div className="flex flex-row justify-center py-8">
              <a
                  href="/contactar"
                  className="mx-3 font-bold hover:underline"
                >
                 CONTACTAR
              </a>
              <a
                href="/aviso-legal"
                className="mx-3 font-bold hover:underline"
              >
                AVISO LEGAL
              </a>
              <a
                  href="/copyright"
                  className="mx-3 font-bold hover:underline"
                >
                 COPYRIGHT
              </a>
              <a
                href="/politica-de-privacidad"
                className="mx-3 font-bold hover:underline"
              >
                  POLÍTICA DE PRIVACIDAD
              </a>
          </div>
        <div className="py-10 flex flex-col items-center border-t border-gray-200">
          <h3 className="text-1xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0">
          © 2025 Chica Suculentas - Plantas, suculentas y más. Todos los derechos reservados.
          </h3>
          <h3 className="py-2 text-1xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0">
          Diseño y desarrollo web por greciagarciav
          </h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
