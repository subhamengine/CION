import React from "react";
import "./NFT.css";
import Triangle from "../../img/Triangle.svg";
import magic_wand_icon from "../../img/magic-wand_icon.svg";
import fantom_ftm_logo from "../../img/fantom-ftm-logo.svg";
import nftlist1 from "../../img/nftlist1.svg";
import nftlist2 from "../../img/nftlist2.svg";
import nftlist3 from "../../img/nftlist3.svg";
import nftlist4 from "../../img/nftlist4.svg";
import nftlist5 from "../../img/nftlist5.svg";
const MintNft = () => {
  return (
    <>
      <div className="hero__content">
        <div className="hero_img">
          <div className="image">
            <img src="https://i.ibb.co/JC3K0dG/Front-Image.png" alt="hero" height={320} />
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
        <div className="content">
          <h1 className="hero__content__title" style={{ fontSize: "26px" }}>
            Join Mumy Club, Earn Reward Together
          </h1>
          <div className="hero__content__description">
            A collection of 5,000 Cion NFT on Fantom, creating a community centered around strong identity, values, and
            rewards.
          </div>
          <div className="NoOfNfts">
            <p>Number of NFT's</p> <p>Avail: 0.06 FTM</p>
          </div>
          <div className="bt">
            <div className="ftm">
              1(0.00 FTM)
              <img src={Triangle} style={{ width: "18px" }} alt="" />
            </div>
            <div className="ftm2">
              <img src={magic_wand_icon} style={{ width: "18px" }} alt="" />
              Mint NFT
            </div>
          </div>
          <div className="box">
            <div className="subBoxes">
              <div>
                Current Bonus <br />
                <span style={{ fontSize: "18px" }}>40.08 esCN</span>
              </div>
              <div>
                Next Bonus <br />
                <span style={{ fontSize: "18px" }}> 39.68 esCN</span>
              </div>
            </div>
            <div className="subBoxes">
              <div>
                Current Price <br />
                <span>
                  <img src={fantom_ftm_logo} style={{ width: "22px" }} alt="" /> 40.08 FTM
                </span>
              </div>
              <div>
                Next Price <br />
                <span>
                  {" "}
                  <img src={fantom_ftm_logo} style={{ width: "22px" }} alt="" /> 39.68 FTM
                </span>
              </div>
            </div>
            <div className="subBoxes">
              <div>
                Current Power <br />
                <span style={{ fontSize: "18px" }}>8,000</span>
              </div>
              <div>
                Next Power <br />
                <span style={{ fontSize: "18px" }}> 7,825</span>
              </div>
            </div>
          </div>
          <span style={{ color: "#2FE0C3" }}>Latest NFT Minted</span>
          <div className="images">
            <img style={{ width: "100px" }} src={nftlist1} alt="" />
            <img style={{ width: "100px" }} src={nftlist2} alt="" />
            <img style={{ width: "100px" }} src={nftlist3} alt="" />
            <img style={{ width: "100px" }} src={nftlist4} alt="" />
            <img style={{ width: "100px" }} src={nftlist5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MintNft;
