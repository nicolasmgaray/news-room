import Layout from "../components/Layout";
import moment from "moment";
import NewsContainer from "../components/NewsContainer";
import { getLatest } from "../api";

const Home = ({ data }) => {
  return (
    <Layout>
      <NewsContainer data={data}></NewsContainer>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const today = moment().format("YYYY-MM-DD"); 
  let data = await getLatest(today);

  return {
    props: { data: data },
  };
};

export default Home;
