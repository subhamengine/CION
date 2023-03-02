import React from "react";
import { useParams } from "react-router-dom";
import "./StakeNft.css";
import nftlist1 from "../../img/nftlist1.svg";
import nftlist2 from "../../img/nftlist2.svg";
import nftlist3 from "../../img/nftlist3.svg";
import nftlist4 from "../../img/nftlist4.svg";
import nftlist5 from "../../img/nftlist5.svg";
const StakeNftCard = (props) => {
  return (
    <>
      <div className="stakeNftMid">
        <div className="stakeNftMidHeader">
          <div>Your NFTs: --</div>
          <div>Your Staked NFTs: --</div>
        </div>
        <div className="stakeNftCards">
          {props.tokens.map((tokenId) => {
            return (
              <div className="stakeNftCard">
                <img src={nftlist1} alt={tokenId} width="160px"></img>
                <span className="nftName">CION #123</span>
                <span className="power">
                  Power : <span style={{ color: "#2FE0C3" }}>8000</span>
                </span>
                <button className="stakeNftCardButton">Approve</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StakeNftCard;
