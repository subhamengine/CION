import { useState } from "react";
import "./StakeNft.css";
import Footer from "components/Footer/Footer";
import ConnectWalletButton from "../../components/Common/ConnectWalletButton";
import connectWalletImg from "img/ic_wallet_24.svg";
import { Trans } from "@lingui/macro";
import timeline from "../../img/timeline2.svg";
import epohReward from "../../img/epohReward.svg";
import { isHomeSite, getAccountUrl } from "lib/legacy";
import startInSeconds from "../../img/startInSeconds.svg";
import noNft from "../../img/noNft.svg";
const StakeNft = () => {
  const [walletModalVisible, setWalletModalVisible] = useState(false);
  const showConnectionOptions = !isHomeSite();
  return (
    <>
      <div className="default-container page-layout main">
        <div className="stakeNftUpper">
          <span className="header"> Earn real profit with CION Club </span>
          <span className="subhead" style={{ color: "#FFFFFF" }}>
            {" "}
            Earn $WFTM from platform's collected fees with your NFT{" "}
          </span>
          <img className="timeline" src={timeline} alt="" />
          <div className="boxes">
            <div className="box1">
              <div className="currentEpoch">
                <div className="subepoch">
                  Current epoh
                  <div>#9</div>
                </div>
                <div className="subepoch">
                  Stacked NFT
                  <div> 4753/5000</div>
                </div>
                <div className="subepoch">
                  Total Distributed <br />
                  <div className="wftm subepoch">
                    <img style={{ width: "25px" }} src={epohReward} alt="" />
                    68,680.00 WFTM
                  </div>
                </div>
              </div>
              <div className="nextEpoch">
                <div className="subepoch">
                  <div>Next epoh</div>
                  <div>03d : 20h : 59m : 15s</div>
                </div>
                <div className="subepoch">
                  <div>Max APR</div>
                  <div style={{ color: "#55AD4D" }}>~20.04%</div>
                </div>
                <div className="subepoch">
                  Next epoh reward <br />
                  <div className="wftm subepoch">
                    <img style={{ width: "25px" }} src={epohReward} alt="" />
                    6,000 WFTM
                  </div>
                </div>
              </div>
            </div>
            <div className="box2">
              Your staked power
              <div className="dashDiv">
                <div className="dash"></div>
                <div className="dash"></div>
              </div>
              <div>
                Est. your APR : <span style={{ color: "#55AD4D" }}> - - -%</span>{" "}
              </div>
            </div>
            <div className="box3">
              <div>
                <div>Next Reward</div>
                <div>--WFTM</div>
              </div>
              <div>
                <div>Pending Reward</div>
                <div>--WFTM</div>
              </div>
              <div>
                <ConnectWalletButton onClick={() => setWalletModalVisible(true)} imgSrc={connectWalletImg}>
                  <Trans>Connect Wallet</Trans>
                </ConnectWalletButton>
              </div>
            </div>
          </div>
        </div>
        <div className="stakeNftMid">
          <img src={noNft} alt="" />
        </div>
        <div className="stakeNftDown">
          <img src={startInSeconds} alt="" />
          {/* <ConnectWalletButton
            className="connectWalletButton"
            onClick={() => setWalletModalVisible(true)}
            imgSrc={connectWalletImg}
          >
            <Trans>Connect Wallet</Trans>
          </ConnectWalletButton> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default StakeNft;
