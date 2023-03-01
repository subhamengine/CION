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
        <div className="container-layout">
          <div className="left-nav">
            <div className="active">
              <img src="https://i.ibb.co/gdN8RVj/Icon-1.png" alt="CN" height={25}/>
              CN</div>
            <div>
            <img src="https://i.ibb.co/VL8Nqnm/Icon-2.png" alt="CLP" height={25}/>
              CLP</div>
            <div>
            <img src="https://i.ibb.co/yBQfSGW/Icon-3.png" alt="CLP-WFTM" height={25}/>
              CLP-WFTM</div>
          </div>
          <div className="container">

            <div className="left">
              <div className="top">
                <div className="first">
                  <div>
                    <p>
                      TVL
                    </p>
                    <p>
                      $485.29K
                    </p>
                  </div>
                  <div>
                    <p>
                      APY
                    </p>
                    <p>
                      82.13%
                    </p>
                  </div>
                  <div>
                    <p>
                      Daily
                    </p>
                    <p>
                      0.1642%
                    </p>
                  </div>
                </div>
                <div className="second">
                  <div>
                    <p>
                      Your deposit
                    </p>
                    <p>
                      $0
                    </p>
                  </div>
                  <div>
                    <p>
                      Last harvest
                    </p>
                    <p>
                      29 minutes ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="mid">
                <h3>
                  Strategy
                </h3>
                <p>
                  MMY is staked to earn FTM, esMMY, and MPs. FTM reward is compounded to more MMY, while esMMY and MPs are staked to acquire more FTM rewards, compounded back for more MMY and MPs. All of this works to boost APR optimally.
                </p>
              </div>
              <div className="bottom">
                <h3 className="cn-logo">
                  <img src="https://i.ibb.co/nDL3YyN/CN-Logo.png" alt="CN-logo" height={25}/>
                  CN
                </h3>
                <p>
                  CN is the utility and governance token of Mummy Finance Spot and Perpetual DEX. Stake MMY to earn esMMY, MPs, and 30% of platform fees in FTM.
                </p>
              </div>
            </div>

            <div className="right">
              <div className="right__top">
                <div className="navigation">
                  <div className="active">Deposit</div>
                  <div>Withdraw</div>
                </div>
                <p>Available: <span>0</span>MMY</p>
                <div className="enter_amt">
                  <p>Enter Amount</p>
                  <div>MAX</div>
                </div>
                <p>Buy CN</p>
                <div className="connect_wallet_button">
                  Connect Wallet
                </div>
              </div>
              <div className="right__bottom">
                <div className="right__bottom__first">
                  <div>
                    <p>Deposit Fee</p>
                    <p>0%</p>
                  </div>
                  <div>
                    <p>
                      Withdraw Fee
                    </p>
                    <p>
                      0.1%
                    </p>
                  </div>
                </div>
                <div className="right__bottom__second">
                  <p>Performance fee</p>
                  <p>4%</p>
                </div>
                <div>
                  Performance fee is already subtracted from the displayed APY.
                </div>
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
