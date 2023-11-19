import { useContext } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { DataContext } from "./ContextProvider/ContextProvider";
import Card from "./components/Card";
import Header from "./components/Header";

const Home = () => {
  const { data, loading, setLoading } = useContext(DataContext);
  console.log(data);

  return (
    <div className="mt-10">
     <Header/>
      <div className="grid grid-cols-3 gap-10">
        {loading ? (
          <div className="flex items-center justify-center w-100 h-screen">
            <InfinitySpin />
          </div>
        ) : (
          data?.products?.map((each) => (
            <Link to={`product/${each?.id}`} key={each.id}>
              {" "}
              <Card item={each} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
