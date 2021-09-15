import React from 'react';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Col } from 'antd';

export const Footer = () => {
  return (
    <div className={'footer'}>
      <Col style={{
        textAlign: 'center',
        marginTop: '1rem',
      }}>      
      </Col>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://github.com/metaplex-foundation/metaplex'}
        icon={<GithubOutlined />}
        className="item"
      ></Button>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://twitter.com/solana'}
        icon={<TwitterOutlined />}
        className="item"
      ></Button>
      <span style={{color: '#dbd4ba', fontSize: '16px', marginLeft: '20px'}}>Copyright © 2021 SolCoolGirl</span>
    </div>
  );
};
