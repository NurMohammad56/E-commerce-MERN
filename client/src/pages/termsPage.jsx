import React, { useEffect } from "react";
import Layout from "./../component/layout/layout";
import LegalContents from "../component/features/legalContents";
import FeatureStore from "../store/featureStore";

const TermsPage = () => {
  const { LegalDetailsRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDetailsRequest("terms");
    })();
  }, []);

  return (
    <Layout>
      <LegalContents />
    </Layout>
  );
};

export default TermsPage;
