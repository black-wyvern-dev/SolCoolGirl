import React, { useEffect, useState } from 'react';
import { ArtCard } from '../../components/ArtCard';
import { Layout, Row, Col, Tabs, Pagination } from 'antd';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { useCreatorArts, useUserArts } from '../../hooks';
import { useMeta } from '../../contexts';
import { CardLoader } from '../../components/MyLoader';
import { useWallet } from '@solana/wallet-adapter-react';

const { TabPane } = Tabs;

const { Content } = Layout;

export enum ArtworkViewState {
  Metaplex = '0',
  Owned = '1',
  Created = '2',
}

export const ArtworksView = () => {
  // const { connected, publicKey } = useWallet();
  const ownedMetadata = useUserArts();
  // const createdMetadata = useCreatorArts(publicKey?.toBase58() || '');
  const { metadata, isLoading } = useMeta();
  // const [activeKey, setActiveKey] = useState(ArtworkViewState.Metaplex);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const items =
    // activeKey === ArtworkViewState.Owned
      // ? 
      ownedMetadata.map(m => m.metadata);
      // : activeKey === ArtworkViewState.Created
      // ? createdMetadata
      // : metadata;

  // useEffect(() => {
  //   if (connected) {
  //     setActiveKey(ArtworkViewState.Owned);
  //   } else {
  //     setActiveKey(ArtworkViewState.Metaplex);
  //   }
  // }, [connected, setActiveKey]);

  const artworkGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!isLoading
        ? items.map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/art/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  height={250}
                  width={250}
                />
              </Link>
            );
          })
        : [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
    </Masonry>
  );

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      {/* <!-- Portfolio Section Heading--> */}
      <h3 className="page-section-heading text-center text-uppercase text-white mb-0">My SolCoolGirl NFT's</h3>
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
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10 }}>
          <Row>
            {artworkGrid}
          </Row>
        </Col>
      </Content>
      <Pagination
        defaultCurrent={1}
        total={200}
        showSizeChanger={false}
      />      
    </Layout>
  );
};
