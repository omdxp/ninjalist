export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();
  const paths = json.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const Details = ({ paths }) => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default Details;
