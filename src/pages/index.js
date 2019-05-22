import React from "react";
import Layout from "../components/layout";

import Hero from "../components/Hero";
import RegistrationPage from "../components/Registry";
import Hotel from "../components/Hotel";

const IndexPage = () => (
  <Layout>
    <Hero />
    <RegistrationPage />
    <Hotel />
  </Layout>
)

export default IndexPage
