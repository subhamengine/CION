import React from "react";
import "./NFT.css";
import Triangle from "../../img/Triangle.svg";
import magic_wand_icon from "../../img/magic-wand_icon.svg";
import fantom_ftm_logo from "../../img/fantom-ftm-logo.svg";
import nftlist1 from "../../img/nftlist1.svg";
import Botv22 from "../../img/Botv22.png";
import nftlist2 from "../../img/nftlist2.svg";
import nftlist3 from "../../img/nftlist3.svg";
import nftlist4 from "../../img/nftlist4.svg";
import nftlist5 from "../../img/nftlist5.svg";
import Dropdown from "react-dropdown";
const MintNft = () => {
  const options = ["1", "2", "3", "4", "5"];
  const defaultOption = options[0];

  return (
    <>
      <div className="hero__content">
        <div className="hero_img">
          <div className="image">
            <img src={Botv22} alt="hero" height={250} width={250} />
          </div>
          <div className="imageBelow">
            <div>
              <p>Total NFT Minted</p>
              <p>113</p>
            </div>
            <div>
              <p>Total NFT Supply </p>
              <p>5,000</p>
            </div>
            <div>
              <p>Total Volume </p>
              <p>0.12</p>
            </div>
          </div>
        </div>
        <div className="mint_content">
          <h1 className="mint_hero__content__title" style={{ fontSize: "22px" }}>
            Join CION Club, Earn Reward Together
          </h1>
          <div className="mint_hero__content__description">
            The earlier you mint , the cheaper the NFT and the higher the power to earn rewards.
            <span style={{ marginLeft: "10px" }}>
              <a href="#">
                <span>Learn More</span>
              </a>
            </span>
          </div>
          <div className="NoOfNfts">
            <p>Number of NFT's</p> <p>Avail: 0.06 FTM</p>
          </div>
          <div className="mint">
            <div className="mint_dropdown">
              <img src={Triangle} style={{ width: "16px" }} alt="" />
              <div>1</div>
              <img src={Triangle} style={{ width: "15px", transform: "rotate(180deg)" }} alt="" />
            </div>
            <div className="default-btn">
              <img src={magic_wand_icon} style={{ width: "28px" }} alt="" />
              <span style={{ fontFamily: "VT323", marginLeft: "10px" }}>Mint NFT</span>
            </div>
          </div>
          <div className="liveStats">
            <div>
              <div>
                Current Bonus <br />
                <span>40.08 esCN</span>
              </div>
              <div>
                Current Price <br />
                <span>40.08 FTM</span>
              </div>
              <div>
                Current Power <br />
                <span>8,000</span>
              </div>
            </div>
            <div>
              <div>
                Next Bonus <br />
                <span> 7,825</span>
              </div>
              <div>
                Next Price <br />
                <span>39.68 FTM</span>
              </div>
              <div>
                Next Power <br />
                <span> 7,825</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintNft;
