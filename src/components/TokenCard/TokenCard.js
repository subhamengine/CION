import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

import "./TokenCard.css";
import { isHomeSite } from "lib/legacy";

import { useWeb3React } from "@web3-react/core";

import APRLabel from "../APRLabel/APRLabel";
import { HeaderLink } from "../Header/HeaderLink";
import { ARBITRUM } from "config/chains";
import { switchNetwork } from "lib/wallets";
import { useChainId } from "lib/chains";
import ExternalLink from "components/ExternalLink/ExternalLink";
// import { getIcon } from "config/icons";
import gmxIcon from "../../img/CN.svg";
import glpIcon from "../../img/CLP.svg";

// const glpIcon = getIcon("common", "glp");
// const gmxIcon = getIcon("common", "gmx");

export default function TokenCard({ showRedirectModal, redirectPopupTimestamp }) {
  const isHome = isHomeSite();
  const { chainId } = useChainId();
  const { active } = useWeb3React();

  const changeNetwork = useCallback(
    (network) => {
      if (network === chainId) {
        return;
      }
      if (!active) {
        setTimeout(() => {
          return switchNetwork(network, active);
        }, 500);
      } else {
        return switchNetwork(network, active);
      }
    },
    [chainId, active]
  );

  const BuyLink = ({ className, to, children, network }) => {
    if (isHome && showRedirectModal) {
      return (
        <HeaderLink
          to={to}
          className={className}
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          {children}
        </HeaderLink>
      );
    }

    return (
      <Link to={to} className={className} onClick={() => changeNetwork(network)}>
        {children}
      </Link>
    );
  };

  return (
    <div className="Home-token-card-options">
      <div className="Home-token-card-option">
        <div className="Home-token-card-option-icon">
          <img src={gmxIcon} width="40" alt="GMX Icons" /> CN
        </div>
        <div className="Home-token-card-option-info">
          <div className="Home-token-card-option-title">
            <Trans>CN is the utility and governance token. Accrues 30% of the platform's generated fees.</Trans>
          </div>
          <div className="Home-token-card-option-apr">
            <Trans>APR:</Trans>
            {/* <APRLabel chainId={ARBITRUM} label="gmxAprTotal" /> */}
            {" ..."}
            {/* <Trans>Avalanche APR:</Trans> <APRLabel chainId={AVALANCHE} label="gmxAprTotal" key="AVALANCHE" /> */}
          </div>
          <div className="Home-token-card-option-action">
            <div className="buy">
              <BuyLink to="#" className="default-btn" network={ARBITRUM}>
                <Trans>Buy</Trans>
              </BuyLink>
              {/* <BuyLink to="/buy_gmx" className="default-btn" network={AVALANCHE}>
                <Trans>Buy on Avalanche</Trans>
              </BuyLink> */}
            </div>
            <ExternalLink href="#" className="default-btn read-more">
              <Trans>Read more</Trans>
            </ExternalLink>
            {/* <ExternalLink href="https://gmxio.gitbook.io/gmx/tokenomics" className="default-btn read-more">
              <Trans>Read more</Trans>
            </ExternalLink> */}
          </div>
        </div>
      </div>
      <div className="Home-token-card-option">
        <div className="Home-token-card-option-icon">
          <img src={glpIcon} width="40" alt="GLP Icon" /> CLP
        </div>
        <div className="Home-token-card-option-info">
          <div className="Home-token-card-option-title">
            <Trans>CLP is the liquidity provider token. Accrues 60% of the platform's generated fees.</Trans>
          </div>
          <div className="Home-token-card-option-apr">
            <Trans>APR:</Trans>
            {/* <APRLabel chainId={ARBITRUM} label="glpAprTotal" key="ARBITRUM" /> */}
            {" ..."}
            {/* <Trans>Avalanche APR:</Trans> <APRLabel chainId={AVALANCHE} label="glpAprTotal" key="AVALANCHE" /> */}
          </div>
          <div className="Home-token-card-option-action">
            <div className="buy">
              {/* <BuyLink to="/buy_glp" className="default-btn" network={ARBITRUM}> */}
              <BuyLink to="#" className="default-btn" network={ARBITRUM}>
                <Trans>Buy</Trans>
              </BuyLink>
              {/* <BuyLink to="/buy_glp" className="default-btn" network={AVALANCHE}>
                <Trans>Buy on Avalanche</Trans>
              </BuyLink> */}
            </div>
            <a
              // href="https://gmxio.gitbook.io/gmx/glp"
              href="#"
              // target="_blank"
              // rel="noreferrer"
              className="default-btn read-more"
            >
              <Trans>Read more</Trans>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
