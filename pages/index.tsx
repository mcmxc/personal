import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout.component";

const Home: React.FC = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
};

export default Home;
