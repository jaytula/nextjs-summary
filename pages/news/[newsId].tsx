import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const { newsId } = router.query;

  // send a request to the backend APIO
  // to fetch the news item with newsId

  return <h1>The Detail Page: {newsId}</h1>;
};

export default DetailPage;
