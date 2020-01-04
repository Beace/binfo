import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Header from '@antv/gatsby-theme-antv/site/components/Header';
import Footer from '../components/Footer';

import './index.less';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const bannerButtons = [];

  const coverImage = <img width='100%' src='https://imgs.beacelee.com/pablo-friendship.png' alt='cover' />
  return (
    <>
      <SEO title={t('BInfo')} lang={i18n.language} />
      <Header
        subTitle="BInfo"
        logo={{
          link: 'https://beace.info',
          img: <img src={`https://imgs.beacelee.com/logo.jpg`} />,
        }}
        githubUrl="https://github.com/BeAce"
        // docs={[]}
        showSearch={false}
        showGithubCorner
        showLanguageSwitcher={false}
        showChinaMirror={false}
        showAntVProductsCard={false}
        onLanguageChange={language => {
          console.log(language);
        }}
        defaultLanguage="zh"
      />
      <Banner
        coverImage={coverImage}
        title={t('会讲故事的科技')}
        description={t(
          'BInfo 是用来将科技的的故事网站，将一些技术通过故事的形式呈现。',
        )}
        className="banner"
        buttons={bannerButtons}
        showGithubStars={false}
        notifications={[]}
      />
      <Footer />
    </>
  );
};
IndexPage.noLayout = true;
export default IndexPage;
