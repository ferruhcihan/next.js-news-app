interface IDOM {
  developer?: any;
}

const DOM = ({ developer }: IDOM) => {
  // console.log(developer);

  return (
    <div className="h-full container m-auto flex flex-col items-center">
      <h1 className="p-10 text-4xl font-bold">Developer Of The Month</h1>
      <img
        src={developer?.imgUrl}
        className="w-60 h-60 rounded-full object-cover "
      />
      <h1 className="pt-4 text-xl">{developer?.name}</h1>
      <h3 className="p-2 text-l">{developer?.position}</h3>
      <p className="p-2 text-base w-[500px] text-justify">
        {developer?.description}
      </p>
    </div>
  );
};

export const getServerSideProps = async () => {
  //   const apiResponse = await fetch("api_url");
  //   const developer = await apiResponse.json();

  const developer = {
    id: 0,
    name: "Jason Response",
    position: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nulla at ex tristique vestibulum sed aliquam arcu. Cras nisi metus, interdum eu rutrum eget, faucibus non nisl. Quisque tristique ipsum quis lorem malesuada, a iaculis erat porttitor. Nam ullamcorper vitae tortor id fermentum. Donec erat ante, vehicula vitae quam accumsan, sodales tincidunt nibh.",
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
