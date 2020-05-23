import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-red-500 py-24 text-center text-3xl text-white">
      Welcome! happy coding
    </div>
  </Layout>
);

export default IndexPage;
