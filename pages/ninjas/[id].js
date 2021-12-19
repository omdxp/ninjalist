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

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: {
      user,
    },
  };
};

const Details = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default Details;
