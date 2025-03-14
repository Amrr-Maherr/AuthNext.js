import GoogleLogo from "../../../public/Assets/icons8-google 1.svg";
import AppleLogo from "../../../public/Assets/icons8-apple-logo 1.svg";
export default function LoginForm() {
  return (
    <>
      <form action="">
        <div className="form-title mb-[59px]">
          <h1 className="text-[32px] text-[#000000] mb-[5px]">Welcome back!</h1>
          <p className="text-[16px] text-[#000000]">
            Enter your Credentials to access your account
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[14px] text-[#000000] font-medium">
            Email address
          </label>
          <input
            className="w-full max-w-[404px] h-[32px] rounded-[10px] pl-[10px] text-[10px] font-medium text-[#D9D9D9] border border-[#D9D9D9] focus:outline-0"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col my-[25px]">
          <div className="flex justify-between items-center">
            <label
              htmlFor=""
              className="text-[14px] text-[#000000] font-medium"
            >
              Password
            </label>
            <a href="" className="text-[10px] font-medium text-[#0C2A92]">
              forgot password
            </a>
          </div>
          <input
            className="w-full max-w-[404px] h-[32px] rounded-[10px] pl-[10px] text-[10px] font-medium text-[#D9D9D9] border border-[#D9D9D9] focus:outline-0"
            type="password"
            name=""
            id=""
            placeholder="password"
          />
        </div>
        <div className="flex items-center gap-[6px]">
          <input className="h-[9px] w-[9px]" type="checkbox" name="" id="" />
          <label htmlFor="" className="text-[9px] font-medium">
            Remember for 30 days
          </label>
        </div>
        <div className="w-full mt-[19px] mb-[38px]">
          <button className="block w-full max-w-[404px] h-[32px] rounded-[10px] bg-[#3A5B22] text-[13px] font-bold text-[#ffffff]">
            Login
          </button>
        </div>
        <div className="mb-[89px]">
          <div className="h-[1px] bg-[#3A5B22] relative">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[9px] font-medium">
              Or
            </p>
          </div>
        </div>
        <div className="mb-[22px] flex justify-between">
          <div className="flex items-center justify-center gap-[3px] border border-amber-100 rounded-[10px] px-[20px] py-[4px]">
            <img src={GoogleLogo.src} alt="" className="h-[24px] w-[24px]" />
            <p className="text-[12px] font-bold">Sign in with Google</p>
          </div>
          <div className="flex items-center justify-center gap-[3px] border border-amber-100 rounded-[10px] px-[20px] py-[4px]">
            <img src={AppleLogo.src} alt="" className="h-[24px] w-[24px]" />
            <p className="text-[12px] font-bold">Sign in with Apple</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-[14px] font-medium">
            Don’t have an account?{" "}
            <span className="text-[#0F3DDE]">Sign Up</span>
          </p>
        </div>
      </form>
    </>
  );
}
