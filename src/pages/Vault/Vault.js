import React from "react";
import "./Vault.css";
import { Trans } from "@lingui/macro";
import Footer from "components/Footer/Footer";
import SEO from "components/Common/SEO";
import { getPageTitle } from "lib/legacy";

const Vault = () => {
  return (
    <SEO title={getPageTitle("Vault")}>
      <div className="BuyGMXGLP page-layout">
        <div className="BuyGMXGLP-container default-container">
          <div className="section-title-block">
            <div className="section-title-content">
              <div className="Page-title">
                <div>CN</div>
                <div>CLP</div>
                <div>CLP-WFTM</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SEO>
  );
};

export default Vault;
