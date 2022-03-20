import { useRouter } from "next/router";

interface IFeed {
  articles?: any;
  pageNumber?: any;
}

export const Feed = ({ articles, pageNumber }: IFeed) => {
  const router = useRouter();
  // console.log({ articles, pageNumber });

  return (
    <div>
      <div className="flex flex-col items-center mt-16">
        {articles.map((article: any, index: number) => (
          <div key={index} className="mb-6 pb-6 w-[500px] border-b">
            <h1
              className="text-base text-center cursor-pointer font-bold"
              onClick={() => (window.location.href = article.url)}
            >
              {article.title}
            </h1>
            <p className="text-sm my-4">{article.description}</p>
            {article.urlToImage && <img src={article.urlToImage} />}
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center">
        <button
          disabled={pageNumber === 1}
          className="m-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
        >
          {"⬅"}
        </button>
        <div className="m-6 cursor-pointer text-2xl">{pageNumber}</div>
        <button
          disabled={pageNumber === 5}
          className="m-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (pageNumber < 5) {
              router.push(`/feed/${pageNumber + 1}`);
            }
          }}
        >
          {"➡"}
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext: any) => {
  const pageNumber = pageContext.query.id;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const json = await apiResponse.json();
  const { articles } = json;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
