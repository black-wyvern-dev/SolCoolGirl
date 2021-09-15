// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Row, Button, Col, Card, Layout } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
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

  const { Content } = Layout

  return (
    <>
      {/* <!-- Portfolio Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Roadmap</h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <svg className="svg-inline--fa fa-star fa-w-18"
              aria-hidden="true" focusable="false"
              data-prefix="fas" data-icon="star" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
          </div>
          <div className="divider-custom-line"></div>
      </div>
      {/* <!-- Portfolio Grid Items--> */}
      <br />
      <h4 className="text-center">Mint 5,555 Pogs And Slammers</h4>
      <p className="text-center">The first 1,000 Solana Pogs can be minted for just <b>0.5 Sol.</b></p>
      <p className="text-center">The remaining 4,555 Solana Pogs will be minted for an average of <b>1 Sol.</b></p>
      <p className="text-center">Solana Pogs are generated on-chain, with a 90% chance of minting a standard Pog and a 10% chance of minting a Slammer.</p>
      <br />
      <h4 className="text-center">Develop The Game</h4>
      <p className="text-center">Solana Pogs is more than just another NFT. It is an interactive experience.</p>
      <p className="text-center">The Solana Pogs will be playable tokens in a robust strategy game.</p>
      <p className="text-center">In addition to visual attributes that are randomly generated, attribute stats for each pog and slammer will affect gameplay.</p>
      <br />
      <h4 className="text-center">Airdrops And Presales</h4>
      <p className="text-center">The Solana Pogs team are reaching out to secondary marketplaces and other NFT developers</p>
      <p className="text-center">Holders of Solana Pogs will gain exclusive access to exciting upcoming projects</p>
    </>
  );
};
