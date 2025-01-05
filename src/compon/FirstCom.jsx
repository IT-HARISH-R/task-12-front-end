import { Link } from 'react-router-dom';

const FirstCom = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl font-semibold text-center">Welcome</h1>
              </div>
            </div>
            <div className="w-full flex justify-start mt-10">
              <p className="text-gray-500 text-sm">
                Already have an account?{' '}
                <Link className="text-blue-500 hover:underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center mt-4">
              <p className="text-gray-500 text-sm">
                Don't have an account?{' '}
                <Link className="text-blue-500 hover:underline" to="/singup">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstCom;
