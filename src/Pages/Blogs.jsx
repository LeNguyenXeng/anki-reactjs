import Article from "../components/Article";
import { useEffect, useState } from "react";
import { getPostsWithOffset } from "../service/posts";
import Layout from "../components/Layout";

function Blogs() {
  const [articles, setArticles] = useState([]);
  const [offset, setOffset] = useState(0);
  const [lastArtcile, setLastArtclie] = useState([]);
  const per_page = 9;
  const getPostsWithOffsetApi = async () => {
    const res = await getPostsWithOffset(per_page, offset);
    setArticles([...articles, ...res]);
    setLastArtclie(res);
  };
  const handleSeeMore = () => {
    setOffset(offset + per_page);
  };
  useEffect(() => {
    getPostsWithOffsetApi();
  }, [offset]);

  
  return (
    <Layout>
      <Article data={articles} />
      {lastArtcile.length !== 0 && (
        <div>
          <p onClick={handleSeeMore} className="see-more">
            Xem thêm
          </p>
        </div>
      )}
    </Layout>
  );
}
export default Blogs;
