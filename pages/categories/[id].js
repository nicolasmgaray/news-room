import Layout from "../../components/Layout";
import moment from "moment";
import NewsContainer from "../../components/NewsContainer";
import { getCategory , getLatest} from "../../api";

const Categories = ({ data }) => {
  return (
    <Layout>
      <NewsContainer data={data}></NewsContainer>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  let data;
  if (id == 0) {
    const today = moment().format("YYYY-MM-DD");   
    data = await getLatest(today);
  }
  else
   data = await getCategory(id);

  return {
    props: { data: data },
  };
};

export default Categories;
