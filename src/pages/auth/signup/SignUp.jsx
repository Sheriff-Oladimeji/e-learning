

import googleIcon from '../../../assets/Icons.png'
import appleIcon from '../../../assets/Icons (1).png'
const SignUp = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="p-8 lg:border md:border border-[#E6E7E9] rounded-xl w-[450px] ">
        <div className="flex justify-center py-3"><h1 className="font-semibold text-2xl">Sign Up</h1></div>
        <div className="flex justify-center py-3 gap-4">
          <div className="pt-1"><p className="text-sm text-[#555E6C]">Already have an account?</p></div>
          <div><p className="text-[#055FF0] font-semibold text-lg">Login</p></div>
        </div>
        <div className="flex justify-center gap-5 py-2">
                    <div className="border flex gap-2 items-center border-[#B1B5BB] p-3 rounded-xl">
                        <div>
                            <img src={googleIcon} alt="" />
                        </div>
                        <div><h1 className=" text-lg">Google</h1></div>
                    </div>
                    <div className="border flex gap-2 items-center border-[#B1B5BB] p-3 rounded-xl">
                        <div>
                            <img src={appleIcon} alt="" />
                        </div>
                        <div><h1 className=" text-lg">Apple</h1></div>
                    </div>
                </div>
        <div className="flex justify-center"><p className="text-[#8B919A]">Or sign up with</p></div>
        <div className="p-3">
          <div className="p-3">
            <span className="text-[#555E6C]">Email</span>
            <input type="email" placeholder="Enter your email" className="w-[100%] h-10 p-3 border  border-[1px solid #555E6C] rounded-lg" />
          </div>
          <div className="p-3">
            <span className="text-[#555E6C]">Password</span>
            <input type="password" placeholder="Enter your password" className="w-[100%] h-10 p-3 border border-[1px solid #555E6C] rounded-lg " />
          </div>
          <div className="p-3">
            <span className="text-[#555E6C]">Confirm Password</span>
            <input type="password" placeholder="Enter your password" className="w-[100%] h-10 p-3 border border-[1px solid #555E6C] rounded-lg " />
          </div>
        </div>
        <div className="flex justify-center">
          <button href="SecondForm.html" className="text-[#FFFFFF] bg-[#055FF0] rounded-2xl w-[87%] h-12 font-semibold">Sign Up</button>
        </div>
        <div className="pl-6">
          <p className="text-[#B1B5BB]">By continuing you agree to our <span className="text-[#055FF0]">Terms of Service</span> and <span className="text-[#055FF0]">Private Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp