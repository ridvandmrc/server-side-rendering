const MainPage = (props: any) => {
  return props.data.map((item: any, index: number) => (
    <div
      key={index}
      style={{
        display: "flex",
        width: "500px",
        justifyContent: "space-around",
      }}
    >
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.surname}</div>
    </div>
  ));
};

export default MainPage;

MainPage.getInitialProps = async () => {
  const data = await (await fetch("http://localhost:3000/api/users")).json();
  return {
    data,
  };
};

/* export const getServerSideProps = async () => {
  const data = await (await fetch("http://localhost:8080/users")).json();
  console.log("data: ", data);
  return {
    props: {
      data,
    },
  };
}; */
