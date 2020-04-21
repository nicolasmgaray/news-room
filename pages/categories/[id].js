import Layout from "../../components/Layout";
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
  if (id == 0) 
    data = await getLatest("2020-04-19");  
  else
   data = await getCategory(id);

  return {
    props: { data: data },
  };
};

export default Categories;
