import React from "react";
import { Link } from "react-router-dom";
import "./NFT.css";

export default function NFT({ savedIsPnlInLeverage, savedShowPnlAfterFees }) {
  return (
    <div className="NFT">
      <div className="hero">
        <div className="bg_image"></div>
        <div className="hero__content">
          <div className="image">
            <img src="https://i.ibb.co/JC3K0dG/Front-Image.png" alt="hero" height={320} />
          </div>
          <div className="content">
            <div className="hero__content__title">Cion club</div>
            <div className="hero__content__description">
              A collection of 5,000 Cion NFT on Fantom, creating a community centered around strong identity, values,
              and rewards.
            </div>
            <div className="hero__content__button">Trade on Opensea</div>
          </div>
        </div>
      </div>
      <div className="treasury">
        <div className="treasury__header">Treasury</div>
        <div className="treasury__subtitle">Profits from Treasury yield will be distributed to all NFT holders</div>
        <div className="container">
          <div className="total_stake">Total Staked</div>
          <div className="compounding_rewards">Compounding Rewards</div>
          <div className="pending_rewards">Pending Rewards</div>
        </div>
      </div>
      <div class="marquee-wrapper">
        <div class="marquee">
          <img src="https://i.ibb.co/JvtVZzL/Whats-App-Image-2023-02-25-at-9-43-50-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/t2qZpx1/Whats-App-Image-2023-02-25-at-9-43-49-AM-2.png" alt="NFTs" />
          <img src="https://i.ibb.co/t89wLhD/Whats-App-Image-2023-02-25-at-9-43-49-AM-1.png" alt="NFTs" />
          <img src="https://i.ibb.co/HNCxsJq/Whats-App-Image-2023-02-25-at-9-43-49-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/B2JbQsY/Whats-App-Image-2023-02-25-at-9-43-48-AM-1-Copy.png" alt="NFTs" />
          <img src="https://i.ibb.co/7YH4thz/Whats-App-Image-2023-02-25-at-9-43-48-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/T1NZJ4g/Whats-App-Image-2023-02-25-at-9-43-45-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/kMRZqK9/Whats-App-Image-2023-02-25-at-9-43-44-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/JvtVZzL/Whats-App-Image-2023-02-25-at-9-43-50-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/t2qZpx1/Whats-App-Image-2023-02-25-at-9-43-49-AM-2.png" alt="NFTs" />
          <img src="https://i.ibb.co/t89wLhD/Whats-App-Image-2023-02-25-at-9-43-49-AM-1.png" alt="NFTs" />
          <img src="https://i.ibb.co/HNCxsJq/Whats-App-Image-2023-02-25-at-9-43-49-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/B2JbQsY/Whats-App-Image-2023-02-25-at-9-43-48-AM-1-Copy.png" alt="NFTs" />
          <img src="https://i.ibb.co/7YH4thz/Whats-App-Image-2023-02-25-at-9-43-48-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/T1NZJ4g/Whats-App-Image-2023-02-25-at-9-43-45-AM.png" alt="NFTs" />
          <img src="https://i.ibb.co/kMRZqK9/Whats-App-Image-2023-02-25-at-9-43-44-AM.png" alt="NFTs" />
        </div>
      </div>
      <div className="reward">
        <div className="reward__header">How to get reward with Cion Club</div>
        <div className="reward__subtitle">Very simple, you just need to hold Mummy NFT</div>
        <div className="reward__conatiner">
          <div className="reward__options__item">
            <div className="reward__options__item__title">1</div>
            <div className="reward__options__item__container">
              <div className="reward__options__item__header">Mint NFT</div>
              <div className="reward__options__item__description">
                The earlier you mint, the cheaper the NFT and the higher the power to earn rewards.
              </div>
              <div className="reward__options__item__button">Mint now</div>
            </div>

          </div>
          <div className="reward__options__item">
            <div className="reward__options__item__title">2</div>
            <div className="reward__options__item__container">
              <div className="reward__options__item__header">Stake</div>
              <div className="reward__options__item__description">
                Stake your NFT to earn rewards from Community Treasury.
              </div>
              <div className="reward__options__item__button">Stake now</div>
            </div>
          </div>
          <div className="reward__options__item">
            <div className="reward__options__item__title">3</div>
            <div className="reward__options__item__container">
              <div className="reward__options__item__header">Earn</div>
              <div className="reward__options__item__description">
                Earn rewards in $FTM. The longer you stake, the higher rewards you earn from Mummy Finance.
              </div>
              <div className="reward__options__item__button">See your reward</div>
            </div>
          </div>
        </div>
        
        <div className="reward__description">
          <div className="reward__description__header">Start in seconds</div>
          <div className="reward__description__subtitle">
            Connect your crypto wallet to start using the app in seconds.
          </div>
          <div className="reward__description__button">Learn how to start</div>
        </div>
      </div>
      <div className="footer">
        <h3>Join our community </h3>
        <div className="social">
          <Link>
            <a href="https://twitter.com/mummyfinance" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/GVvkHsT/Fill-29.png" alt="twitter" />
            </a>
          </Link>
          <Link>
            <a href="https://twitter.com/mummyfinance" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/NCxCZw8/Telegram.png" alt="telegram" />
            </a>
          </Link>
          <Link>
            <a href="https://twitter.com/mummyfinance" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/GMr3g2P/Discord.png" alt="discord" />
            </a>
          </Link>
          <Link>
            <a href="https://twitter.com/mummyfinance" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/MSYT46C/Medium.png" alt="medium" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
