import React, { useEffect, useState } from 'react';
import { ArtCard } from '../../components/ArtCard';
import {
  Layout,
  Row,
  Divider,
  Col,
  Card,
  Tabs,
  Tag,
  Pagination,
  Skeleton,
  List,
} from 'antd';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { useCreatorArts, useUserArts } from '../../hooks';
import { useMeta } from '../../contexts';
import { ArtContent } from '../../components/ArtContent';
import { MetaAvatar } from '../../components/MetaAvatar';
import { CardLoader } from '../../components/MyLoader';
import { ViewOn } from '../../components/ViewOn';
import { useArt, useExtendedArt } from '../../hooks';
import { ArtType } from '../../types';
import { shortenAddress, useConnection } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';

const { TabPane } = Tabs;

const { Content } = Layout;

export enum AuctionListViewState {
  Metaplex = '0',
  Owned = '1',
  Created = '2',
}

export const AuctionListView = () => {
  const { connected, publicKey } = useWallet();
  const ownedMetadata = useUserArts();
  const createdMetadata = useCreatorArts(publicKey?.toBase58() || '');
  const { metadata, isLoading } = useMeta();
  const [activeKey, setActiveKey] = useState(AuctionListViewState.Metaplex);
  const breakpointColumnsObj = {
    default: 1
  };

  const items =
      metadata;

  useEffect(() => {
    if (connected) {
      setActiveKey(AuctionListViewState.Owned);
    } else {
      setActiveKey(AuctionListViewState.Metaplex);
    }
  }, [connected, setActiveKey]);

  const artworkGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!isLoading
        ? items.map((m, idx) => {
            const id = m.pubkey;
            const art = useArt(id);
            const { ref, data } = useExtendedArt(id);

            const description = data?.description;
            const attributes = data?.attributes;

            const tag = (
              <div className="info-header">
                <Tag color="blue">UNVERIFIED</Tag>
              </div>
            );

            const unverified = (
              <>
                {tag}
                <div style={{ fontSize: 12 }}>
                  <i>
                    This artwork is still missing verification from{' '}
                    {art.creators?.filter(c => !c.verified).length} contributors before it
                    can be considered verified and sellable on the platform.
                  </i>
                </div>
                <br />
              </>
            );                    

            let badge = '';
            if (art.type === ArtType.NFT) {
              badge = 'Unique';
            } else if (art.type === ArtType.Master) {
              badge = 'NFT 0';
            } else if (art.type === ArtType.Print) {
              badge = `${art.edition} of ${art.supply}`;
            }
                      
            return (
              <div className="auction-container" style={{marginBottom: '1rem'}}>
              <Row ref={ref} key={idx}>
                <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ padding: '30px' }}>
                  <ArtContent
                    style={{ width: 300 }}
                    height={300}
                    width={300}
                    className="artwork-image"
                    pubkey={id}
                    active={true}
                    allowMeshRender={true}
                  />
                </Col>
                {/* <Divider /> */}
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  style={{ textAlign: 'left', fontSize: '1.4rem' }}
                >
                  <Row>
                    <div style={{ fontWeight: 700, fontSize: '4rem' }}>
                      {art.title || <Skeleton paragraph={{ rows: 0 }} />}
                    </div>
                  </Row>
                  <Row>
                    <Col span={6}>
                      <h6>Royalties</h6>
                      <div className="royalties">
                        {((art.seller_fee_basis_points || 0) / 100).toFixed(2)}%
                      </div>
                    </Col>
                    <Col span={12}>
                      <ViewOn id={id} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6 style={{ marginTop: 5 }}>Created By</h6>
                      <div className="creators">
                        {(art.creators || []).map((creator, idx) => {
                          return (
                            <div
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: 5,
                              }}
                            >
                              <MetaAvatar creators={[creator]} size={64} />
                              <div>
                                <span className="creator-name">
                                  {creator.name ||
                                    shortenAddress(creator.address || '')}
                                </span>
                                <div style={{ marginLeft: 10 }}>
                                  {tag}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6 style={{ marginTop: 5 }}>Edition</h6>
                      <div className="art-edition">{badge}</div>
                    </Col>
                  </Row>
                </Col>
                <Col span="12">
                  <Divider />
                  {art.creators?.find(c => !c.verified) && unverified}
                  <br />
                  <div className="info-header">ABOUT THE CREATION</div>
                  <div className="info-content">{description}</div>
                  <br />
                </Col>
                <Col span="12">
                  {attributes && (
                    <>
                      <Divider />
                      <br />
                      <div className="info-header">Attributes</div>
                      <List size="large" grid={{ column: 4 }}>
                        {attributes.map(attribute => (
                          <List.Item>
                            <Card title={attribute.trait_type}>
                              {attribute.value}
                            </Card>
                          </List.Item>
                        ))}
                      </List>
                    </>
                  )}
                </Col>
              </Row>
              </div>
            );
          })
        : [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
    </Masonry>
  );

  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      {/* <!-- Portfolio Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-white mb-0">SolCoolGirls Leaderboard</h2>
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