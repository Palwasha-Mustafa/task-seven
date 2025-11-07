const Footer = () => {
  return (


    <>

      <div className="flex items-center py-24 justify-between px-10 bg-black">

        <div className="space-y-9">
          <div>
            <img src="/logo-two.svg" alt="" />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Empowering businesses with innovative digital solutions that redefine possibilities.
          </p>
        </div>

        <div className="bg-linear-to-b from-[#E9EFF8] to-[#123A6E] w-px h-54"></div>

        <div>
          <ul className="font-light text-lg flex flex-col items-start gap-6 text-gray-300">

            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="bg-linear-to-b from-[#E9EFF8] to-[#123A6E] w-px h-54"></div>

        <div className="flex flex-col items-start gap-10 text-gray-300 text-sm">
          <div className="space-y-7">
            <div className="flex items-center gap-4">
              <img src="/phone.svg" alt="" />
              <p className="text-[19px]">0913456788</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/mail.svg" alt="" />
              <p className="text-[19px]">Contact@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="p-px rounded-full bg-linear-to-r from-[#E9EFF8] to-[#123A6E] inline-block cursor-pointer">
              <div className="px-4 py-4 bg-black rounded-full flex items-center justify-center">
                <img
                  src="/in.svg"
                  alt="LinkedIn"
                />
              </div>
            </div>
            <div className="p-px rounded-full bg-linear-to-r from-[#E9EFF8] to-[#123A6E] inline-block cursor-pointer">
              <div className="px-5 py-3.5 bg-black rounded-full flex items-center justify-center">
                <img
                  src="/f.svg"
                  alt="Facebook"
                />
              </div>
            </div>
            <div className="p-px rounded-full bg-linear-to-r from-[#E9EFF8] to-[#123A6E] inline-block cursor-pointer">
              <div className="px-4 py-4 bg-black rounded-full flex items-center justify-center">
                <img
                  src="/insta.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div className="p-px rounded-full bg-linear-to-r from-[#E9EFF8] to-[#123A6E] inline-block cursor-pointer">
              <div className="px-4 py-4 bg-black rounded-full flex items-center justify-center">
                <img
                  src="youtube.svg"
                  alt="YouTube"
                />
              </div>
            </div>
          </div>
        </div>

      </div>


    </>


  );
};




export default Footer;