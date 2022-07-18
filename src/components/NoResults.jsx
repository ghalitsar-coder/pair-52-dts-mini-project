import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-hero-pattern overflow-hidden h-screen grid place-items-center">
      <div className="rounded-md shadow-md mt-40 text-center ">
        <h1 className="font-semibold text-2xl">404 Not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
