import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=16`
      );

      if (response.data.length === 0) {
        setHasMore(false);
        return;
      }

      setUserData((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const fetchMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Infinite Scroll Gallery
      </h1>

      <InfiniteScroll
        dataLength={userData.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={
          <h2 className="text-center text-xl py-6">
            Loading...
          </h2>
        }
        endMessage={
          <h2 className="text-center text-xl py-6">
            🎉 No More Images
          </h2>
        }
      >
        <div className="flex flex-wrap justify-center gap-6">
          {userData.map((elem) => (
            <Card key={elem.id} elem={elem} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;