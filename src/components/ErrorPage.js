import { useRouteError,Link,useLocation } from 'react-router-dom'; //used to get the error details


const ErrorPage = ({error}) => {
  const routeError = useRouteError();
  const err = error || routeError;    
  console.log(err);
    const {status="Unknown", statusText="Something went wrong",data=""} = err || {};
    const location = useLocation();//get current URL
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{status}</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 ">{statusText}</h2>
      <p className="text-gray-600 mb-6">
        {data} 
      </p>

      {location.pathname !== '/' ? (
         <Link to="/" className="px-4 py-2 bg-red-500 text-white rounded-3xl hover:bg-red-600 shadow-md transition duration-300 ">
          ⬅️ Go Back to Home
        </Link>
      ) : (
          <h3 className='text-gray-700 text-lg'>⏳Try again later</h3 >
      )}
      
    </div>
  );
};

export default ErrorPage;
