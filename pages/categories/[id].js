import Layout from "../../components/Layout";
import NewsContainer from "../../components/NewsContainer";
import { getCategory } from "../../api";

const Categories = ({ data }) => {
  console.log(data[0]);
  return (
    <Layout>
      <NewsContainer data={data}></NewsContainer>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  let data = await getCategory(id);

  return {
    props: { data: data },
  };
};

export default Categories;
