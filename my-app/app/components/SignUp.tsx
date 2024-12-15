import Image from "next/image";
export default function SignUp() {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-14">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
             SignUp
            </h2>
    
           
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
    
            
              <div>
                <input
                  type="Email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
    
            
              <div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
    
                  <div className="flex items-center">
                  <input type="checkbox"  className="focus:ring-2 focus:ring-[#ff9f0d] h-3 2-3" />
                  <p className="text-sm ml-1">Remember me?</p>
                   </div>
              <button
                type="submit"
                className="w-full bg-[#ff9f0d] text-white py-2 rounded-lg font-medium hover:bg-orange-400 transition duration-300"
              >
                Sign Up
              </button>
              <p className="text-right text-gray-600 text-sm">Forget Password?</p>
            </form>
    
            
            <div className="flex items-center my-6">
              <div className="w-full h-px bg-gray-300"></div>
              <span className="mx-4 text-gray-500">OR</span>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
    
      
            <div className="space-y-2">
              <button className="w-full flex items-center gap-20 border border-gray-300 p-2 rounded-lg hover:bg-gray-100">
                <Image
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                Sign up with Google
              </button>
              <button className="w-full gap-20 flex items-center border scroll-px-4 border-gray-300 p-2 rounded-lg hover:bg-gray-100">
                <Image
                  src="/apple2.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                Sign up with Apple
              </button>
            </div>
    
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#ff9f0d] hover:underline font-medium"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      );
    }
    