import {
  Button,
  Row,
  Col,
  Layout,
  Image,
  Collapse,
  Card,
  Menu
} from 'antd';
import { ArtCard } from '../../components/ArtCard';
import Masonry from 'react-masonry-css';
import { CardLoader } from '../../components/MyLoader';
import { Link, useHistory } from 'react-router-dom';
import useWindowDimensions from '../../utils/layout';
import { useMeta } from '../../contexts';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { HomeOutlined, FireOutlined, PieChartOutlined, QuestionCircleOutlined, TeamOutlined } from '@ant-design/icons';

var Scroll = require('react-scroll');
var ScrollLink = Scroll.Link;

const { Panel } = Collapse;
const { Meta } = Card;
const { Content, Sider } = Layout;
export const LandingView = () => {
  const { metadata, isLoading } = useMeta();
  const { width } = useWindowDimensions();  

  const sliders = [
    '/img/slider/slider1.png',
    '/img/slider/slider2.png',
    '/img/slider/slider3.gif',
    '/img/slider/slider4.png',
    '/img/slider/slider5.gif',
    '/img/slider/slider6.png',
    '/img/slider/slider7.png',
    '/img/slider/slider8.png',
    '/img/slider/slider9.png'   
  ];  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };
  const items = metadata;

  return (
    <>
      <Layout>
        <Sider collapsible collapsed={true} trigger={null} className="sider-width">
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">            
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<FireOutlined />}>
              <ScrollLink 
                to='about'
                spy={true} 
                smooth={true} 
                duration={500} 
                >
                  About
              </ScrollLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />}>
             <ScrollLink 
                to='roadmap'
                spy={true} 
                smooth={true} 
                duration={500} 
                >
                  Roadmap
              </ScrollLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
              <ScrollLink 
                to='faq'
                spy={true} 
                smooth={true} 
                duration={500} 
                >
                  Faq
              </ScrollLink>
            </Menu.Item>   
            <Menu.Item key="5" icon={<TeamOutlined />}>
              <ScrollLink 
                to='team'
                spy={true} 
                smooth={true} 
                duration={500} 
                >
                  Team
              </ScrollLink>
            </Menu.Item>                      
          </Menu>
        </Sider>
        <Layout>
          <Content style={{width: '100%'}}>            
            {width < 750 ?
            <Row>        
              <Col span={24}>
                <div className="auction-container" style={{ margin: 0 }}>
                  <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}>
                    {/* <!-- Masthead Heading--> */}
                    <h3 className="masthead-heading text-uppercase mb-0">SolCoolGirls On The Blockchain</h3>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Masthead Subheading--> */}
                    <p className="masthead-subheading font-weight-light mb-4">5000 algorithmically generated, right-facing cute girls on the Solana blockchain. By owning a SolCoolGirls, you become a Soltopian. You enter into a community of SolCoolGirls, getting you access to special privileges, such as hidden Discord channels and earlier drop times.</p>
                    <p className="masthead-subheading font-weight-light mb-4"><b>Coming this September</b></p>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="auction-container" style={{ width: '100%', marginTop: '10px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>            
                  <div>
                    <h1>Airdrop to all SolCoolGirl owners
        coming soon</h1>
                  </div>
                  <div>
                    <div className="stack-item" style={{width: '100%', padding: '20px'}}>
                      {<img className="item-img" src="/img/logo.gif" />}
                    </div>
                  </div>                          
                </div>
              </Col>
            </Row>
            :
            <Row>
              <Col span={18} style={{paddingRight: '20px'}}>
                <div className="auction-container" style={{ margin: 0 }}>
                  <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}>
                    {/* <!-- Masthead Heading--> */}
                    <h2 className="heading-color masthead-heading text-uppercase mb-0">SolCoolGirls On The Blockchain</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Masthead Subheading--> */}
                    <p className="masthead-subheading font-weight-light mb-4">5000 algorithmically generated, right-facing cute girls on the Solana blockchain. By owning a SolCoolGirls, you become a Soltopian. You enter into a community of SolCoolGirls, getting you access to special privileges, such as hidden Discord channels and earlier drop times.</p>
                    <p className="masthead-subheading font-weight-light mb-4"><b>Coming this September</b></p>
                  </div>
                </div>
              </Col>
              <Col span={6}>
              <div className="auction-container" style={{ width: '100%', alignItems: 'center', marginTop: '0px' }}>            
                  <div>
                    <h6 style={{marginTop: '30px', marginBottom: '20px'}}>Airdrop to all SolCoolGirl owners
        coming soon</h6>
                  </div>
                  <div>
                    <div className="stack-item" style={{width: '100%', padding: '10 10px 20px 10px', margin: 'auto'}}>
                      {<img className="item-img" src="/img/logo.gif" />}
                    </div>
                  </div>                          
                </div>
              </Col>
            </Row>
            }
            <Element id='about'>
            </Element>
            {width < 750 ?
            <Row>

            </Row>
            :
            <Row>
              <div className="auction-container" style={{ marginTop: '50px', width: '100%' }}>
                <div className="container d-flex align-items-center flex-column">
                  <h2 className="heading-color masthead-heading text-uppercase mb-0 mt-4">Welcome to Family</h2>
                  <p className="mt-4">
                  SolCoolGirl NFTs are collections of programmatically, randomly generated NFTs on the Solana blockchain. The 1st generation consists of 5,000 randomly assembled Girls from over 300k total options. Each Girl is comprised of a unique body, hat, face and outfit
                  </p>
                  <Carousel
                    draggable={false}
                    className="main-carousel"
                    partialVisbile
                    deviceType={'desktop'}
                    itemClass="image-item"
                    responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                  >
                    {sliders.map((image, idx) => {
                      return (
                        <Image
                          key={idx}
                          preview={false}
                          src={image}
                          width="100%"
                          height="100%"
                        />
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </Row>
            }
            <Element id='roadmap'>
            </Element>
            {/* Roadmap section */}
            {width < 750 ?
            <Row>

            </Row>
            :
            <Row>
              <div className="auction-container" style={{ marginTop: '50px', width: '100%' }}>
                <div className="container d-flex align-items-center flex-column">
                  <h2 className="heading-color masthead-heading text-uppercase mb-0 mt-4">Roadmap Activity</h2>
                  <p className="mt-4">
                  Everything planned in the roadmap will be carried out after the close of the sale.
                  </p>
                  <div style={{alignItems: 'left', display: 'flex', flexDirection: 'column', marginBottom: '30px'}}>
                    <div style={{display: 'inline-flex'}}>
                        <div>
                          <Image src='/img/roadmap.png' width='50%' preview={false} />
                        </div>
                        <div>
                          <p className="mt-2">Website and Socials Launch</p>
                        </div>
                    </div>
                    <div style={{display: 'inline-flex'}}>
                        <div>
                          <Image src='/img/roadmap.png' width='50%' preview={false} />
                        </div>
                        <div>
                          <p className="mt-2">NFT Launch <span> </span>
                            ( All 5,000 SolCoolCat will be minted and released to our  community.)</p>
                        </div>
                    </div>
                    <div style={{display: 'inline-flex'}}>
                        <div>
                          <Image src='/img/roadmap.png' width='50%' preview={false} />
                        </div>
                        <div>
                          <p className="mt-2">List on Solana NFT Marketplaces
                            ( SolCoolCats begin trading on your favorite Solana NFT Marketplaces. )</p>
                        </div>
                    </div>
                    <div style={{display: 'inline-flex'}}>
                        <div>
                          <Image src='/img/roadmap.png' width='50%' preview={false} />
                        </div>
                        <div>
                          <p className="mt-2">DEFI Project.
                            ( Develop the DEFI projects related to SolCoolCats, so that NFT holders can get more benefits. )</p>
                        </div>
                    </div>
                    <div style={{display: 'inline-flex'}}>
                        <div>
                          <Image src='/img/roadmap.png' width='50%' preview={false} />
                        </div>
                        <div>
                          <p className="mt-2">Develop the game related  to SolCoolCats.</p>
                        </div>
                    </div>          
                  </div>
                </div>
              </div>
            </Row>      
            }
            <Element id='faq'>
            </Element>
            {width < 750 ?
            <Row>

            </Row>
            :
            <Row>
              <div className="auction-container" style={{ marginTop: '50px', width: '100%' }}>
                <div className="container d-flex align-items-center flex-column">
                  <h2 className="heading-color masthead-heading text-uppercase mb-0 mt-4">Frequently Asked Questions</h2>
                  <div className="w-100">
                    <Collapse className="mt-4 mb-4" defaultActiveKey={['1']}>
                      <Panel header="What is an NFT?" key="1">
                        <p>NFT stands for "non-fungible token." An NFT is basically data that is stored or accounted for in a digital ledger, and that data represents something specific. An NFT can, for example, represent a piece of art, a music album or other types of digital files.</p>
                      </Panel>
                      <Panel header="Where can I buy or sell SolCoolGirl?" key="2">
                        <p>We're currently listed on Solanart and Digital Eyes.</p>
                      </Panel>
                      <Panel header="Where can I view my SolCoolGirl?" key="3">
                        <p>We recommend Phantom wallet or SolFlare. Click on the NFT tab in either wallet and you'll see your SolBear!</p>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
              </div>
            </Row>
            }
            <Element id='team'>
            </Element>
            {width < 750 ?
            <Row>

            </Row>
            :
            <Row>
              <div className="auction-container" style={{ marginTop: '50px', width: '100%' }}>
                <div className="container d-flex align-items-center flex-column">
                  <h2 className="heading-color masthead-heading text-uppercase mb-0 mt-4">Our Team</h2>
                  <p className="mt-4">
                  Our team consists of 4 different people, who were united by the idea of creating a  high-quality long-term  project that would be interesting for NFT collectors and mafia lovers.
                  </p>
                  <div style={{display: 'flex', flexDirection: 'row' , justifyContent: 'space-between', width: '100%', marginBottom: '30px'}}>
                    <Card
                      hoverable
                      style={{ width: 200}}
                      cover={<img alt="team" src="/img/team/team1.png" />}
                    >
                      <Meta title="Yogi" description="Chief SolCoolGirl Officer" />
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 200}}
                      cover={<img alt="team" src="/img/team/team2.png" />}
                    >
                      <Meta title="Baloo" description="Developer" />
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 200}}
                      cover={<img alt="team" src="/img/team/team3.png" />}
                    >
                      <Meta title="Winnie" description="Artist" />
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 200}}
                      cover={<img alt="team" src="/img/team/team4.png" />}
                    >
                      <Meta title="Rupert" description="Artist" />
                    </Card>
                  </div>
                </div>
              </div>
            </Row>
            }
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
