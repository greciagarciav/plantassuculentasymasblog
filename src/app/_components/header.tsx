import Link from "next/link";

const Header = () => {
  return (
    
    <div className="mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <div className="flex items-center">
          <img src="https://yt3.googleusercontent.com/ytc/AIdro_mBMy56YKY8Wseh8dQGpDUw3OzkDPTusPyKptW5JBkAuQ=s160-c-k-c0x00ffffff-no-rj" className="w-12 h-12 rounded-full" alt="Logo de Chica Suculentas" />
          <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pl-2 underline">
            Chica Suculentas
          </h1>
        </div> 
      </Link>
    </div>
  );
};

export default Header;
