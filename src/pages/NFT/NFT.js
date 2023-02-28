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
            <h1 className="hero__content__title">Cion club</h1>
            <div className="hero__content__description">
              A collection of 5,000 Cion NFT on Fantom, creating a community centered around strong identity, values,
              and rewards.
            </div>
            <div className="hero__content__button">Trade on Opensea</div>
          </div>
        </div>
      </div>
      <div className="treasury">
        <h1 className="treasury__header">Treasury</h1>
        <div className="treasury__subtitle">Profits from Treasury yield will be distributed to all NFT holders</div>
        <div className="container">
          <div className="total_stake">
            <p>Total Staked</p>
            <p className="total_stake__value">$1,081,229.89</p>
          </div>
          <div className="compounding_reward">
            <p>Compounding Reward</p>
            <p><span className="highlight">56.88</span> esCN</p>
          </div>
          <div className="pending_reward">
            <p>Pending Reward</p>
            <p><span className="highlight">241.30</span> esCN &nbsp;&nbsp;&nbsp;&nbsp; + <span className="highlight">3,216.51</span> FTM</p>
          </div>

          <div className="scale">
            <div className="mark">0</div>
            <div className="mark">auto</div>
          </div>
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
        <h1 className="reward__header">How to get reward with Cion Club</h1>
        <div className="reward__subtitle">Very simple, you just need to hold Mummy NFT</div>
        <div className="reward__conatiner">
          <div className="reward__options__item">
            <h1 className="reward__options__item__title">1</h1>
            <div className="reward__options__item__container">
              <div className="reward__options__item__header">Mint NFT</div>
              <div className="reward__options__item__description">
                The earlier you mint, the cheaper the NFT and the higher the power to earn rewards.
              </div>
              <div className="reward__options__item__button">Mint now</div>
            </div>

          </div>
          <div className="reward__options__item">
            <h1 className="reward__options__item__title">2</h1>
            <div className="reward__options__item__container">
              <div className="reward__options__item__header">Stake</div>
              <div className="reward__options__item__description">
                Stake your NFT to earn rewards from Community Treasury.
              </div>
              <div className="reward__options__item__button">Stake now</div>
            </div>
          </div>
          <div className="reward__options__item">
            <h1 className="reward__options__item__title">3</h1>
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
          <div className="left__illustration"></div>
          <div className="right__illustration"></div>
          <h1 className="reward__description__header">Start in seconds</h1>
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
              <img src="https://i.ibb.co/kQ0xF4j/Twitter.png" width={50} alt="twitter" />
            </a>
          </Link>
          <Link>
            <a href="https://twitter.com/mummyfinance" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/NCxCZw8/Telegram.png" width={50} alt="telegram" />
            </a>
          </Link>
          <Link>
            <a href="https://twitter.com/mummyfinance" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/GMr3g2P/Discord.png" width={50} alt="discord" />
            </a>
          </Link>
          <Link>
            <a href="https://twitter.com/mummyfinance" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/MSYT46C/Medium.png" width={50} alt="medium" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
