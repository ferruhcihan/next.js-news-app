interface IDOM {
  developer?: any;
}

const DOM = ({ developer }: IDOM) => {
  console.log(developer);
  return (
    <div className="h-screen container m-auto flex flex-col items-center justify-center">
      <h1 className="p-10 text-2xl">Developer of the month</h1>
      <img
        src={developer?.imgUrl}
        className="w-60 h-60 rounded-full object-cover "
      />
      <h1 className="p-10 text-xl">{developer?.name}</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  //   const apiResponse = await fetch("api_url");
  //   const developer = await apiResponse.json();
  const developer = {
    id: 0,
    name: "Best Developer",
    imgUrl:
      "https://media.overstockart.com/optimized/cache/data/product_images/VG3345-1000x1000.jpg",
  };
  return {
    props: {
      developer,
    },
  };
};
export default DOM;
