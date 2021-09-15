// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'antd';
// import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useMeta } from '../../contexts';

export const SetupView = () => {
  // const { store } = useMeta();
  // const history = useHistory();
  // const wallet = useWallet();
  // const { setVisible } = useWalletModal();
  // const connect = useCallback(
  //   () => (wallet.wallet ? wallet.connect().catch() : setVisible(true)),
  //   [wallet.wallet, wallet.connect, setVisible],
  // );

  return (
    <>
      {/* <!-- About Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-white">Frequently Asked Questions</h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
          {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
          </div>
          <div className="divider-custom-line"></div>
      </div>
      {/* <!-- About Section Content--> */}
      <div className="row w-100">
          <div className="col-lg-4 ms-auto"><h4 className="lead"><b>What is Solana Pogs?</b></h4><p>Solana Pogs is a first of it's kind NFT based on the classic game of Pogs. Solana Pogs will be a complex, multi-faceted, NFT game built on Solana. Use your pogs to compete with others to win pogs, and other NFT prizes.</p>
              <h4 className="lead"><b>Why is your mint price so much lower than other projects?</b></h4><p>We want to add value to our user base! By having a low cost to entry we hope to be a project that is accessible to everybody.</p>
              <h4 className="lead"><b>Where can I get a Pog or Slammer?</b></h4><p>To start, you can mint a pog or slammer only at SolanaPogs.io. Do not click on links to any other site claiming to have Solana Pogs for sale. SolanaPogs.io is the official site to mint. After our initial mint, we are working closely with secondary markets like DigitalEyes so you can resell and buy more pogs and slammers to complete your set.</p>
              <h4 className="lead"><b>Will my Pog be unique?</b></h4><p>Yes! There are over 1.7 million possible combinations, making each pog unique!</p>
              <h4 className="lead"><b>Where else can I follow Solana Pogs?</b></h4><p>You can follow our official Twitter page @SolanaPogs or join our Discord server.</p>

          </div>
          <div className="col-lg-4 me-auto"><h4 className="lead"><b>What will be the cost to mint?</b></h4><p>We are starting with a mint price of 0.5 sol for the first 1,000 units. Afterwards, the mint price will be attached to a bonding curve that starts at 0.5 sol and goes up to 1.5 sol. The mint price will never be more than 1.5 sol!</p>
              <h4 className="lead"><b>How many Pogs will there be??</b></h4><p>There will be 5,555 pogs and slammers. At mint, there will be a 90% chance of minting a pog, and a 10% chance of minting a slammer. Since each mint is randomized, the exact distribution is unknown, but you can expect around 5,000 pogs and around 555 slammers.</p>
              <h4 className="lead"><b>When is the release date?</b></h4><p>Stay tuned! We will be announcing the release date very shortly. We will update our discord and twitter with more information as we get closer.</p>
              <h4 className="lead"><b>What is the future of Solana Pogs?</b></h4><p>Our initial mint is only the beginning. We are hoping to develop an interactive game to give your Pogs incredible utility.</p>
              <h4 className="lead"><b>Why Solana?</b></h4><p>We chose to build our project on Solana because of it's incredible scalability and low gas fees. Everybody involved in this project is a true Solana believer, and has been involved with Solana since early on!</p>

          </div>
      </div>
    </>
  );
};
