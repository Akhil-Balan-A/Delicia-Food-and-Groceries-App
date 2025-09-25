import '../styles/error.css';   
import { useRouteError,Link,useLocation } from 'react-router-dom'; //used to get the error details


const ErrorPage = ({error}) => {
  const routeError = useRouteError();
  const err = error || routeError;
  console.log(err);
    const {status="Unknown", statusText="Something went wrong",data=""} = err || {};
    const location = useLocation();//get current URL
  return (
    <div className="error-container">
      <h1 className="error-code">{status}</h1>
      <h2 className="error-message">{statusText}</h2>
      <p className="error-description">
        {data} 
      </p>

      {location.pathname !== '/' ? (
         <Link to="/" className="error-home-link">
          ⬅️ Go Back to Home
        </Link>
      ) : (
          <h3>⏳Try again later</h3 >
      )}
      
    </div>
  );
};

export default ErrorPage;
