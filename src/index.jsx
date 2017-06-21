// eslint-env browser
/* global PaidPost */

// Learn more about React Best Practices:
// https://github.com/nytpi/scaffolding-next/blob/v4.11.3/docs/React-Best-Practi
// c es.md
import React from 'react';

// Import paidpost-core components Run `npm run guide` to browse additional
// components.
import {
  BodyCopy,
  BrandFooter,
  Figure,
  FullBleed,
  Header,
  Left,
  PaidPostArticle,
  Right,
  Center,
  PhotoGrid,
  SectionHeader,
  Slideshow,

  // Use `breakpoints` to set up responsive images See
  // https://github.com/nytpi/scaffolding-next/blob/v4.11.3/docs/React-Best-Practi
  // c es.md#working-with-images
  breakpoints
} from 'paidpost-core';

// Import stylesheet
import scss from './index.scss';

// Import body copy text
import text from './index.yml';

// Render the Paid Post
const Index = () => (
  <PaidPostArticle className={scss.article} fontFamily="Open Sans">
    <Header
      className={scss.borders}
      headerType="header-partial"
      scrollIcon
      title={text.headlines[0]}
      desktopImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_1.jpg"
      tabletImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_1_600.jpg"
      mobileImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_1_400.jpg"/>

    <FullBleed withPadding>

      <BodyCopy className={scss.dropCap} dropCap>
        {text
          .paragraphs
          .slice(0, 2)
          .map((para, index) => (
            <p key={index}>{para}</p>
          ))}

      </BodyCopy>

    </FullBleed>

    <Center size="large">
      <PhotoGrid className={scss.PhotoGrid} positionalCaptions={false}>
        <Figure
          src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid1.jpg"
          caption={text.captions[0]}/>
        <Figure src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid2.jpg"/>
      </PhotoGrid>
    </Center>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[2]}</p>
        <p>{text.paragraphs[3]}</p>
        <p>{text.paragraphs[4]}</p>

      </BodyCopy>
    </FullBleed>
    <FullBleed withMargins>
      <Header
        headerType="header-full"
        scrollIcon={false}
        title={text.headlines[1]}
        className={scss.headlineTop}
        desktopImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_2.jpg"
        tabletImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_2_600.jpg"
        mobileImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_2_400.jpg"/>

    </FullBleed>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[5]}</p>
        <p>{text.paragraphs[6]}</p>
        <p>{text.paragraphs[7]}</p>
      </BodyCopy>

    </FullBleed>

    <FullBleed>
      <Center size="xx-large">
        <PhotoGrid className={scss.PhotoGrid} positionalCaptions={false}>
          <Figure
            src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid3.jpg"
            caption={text.captions[1]}/>
          <Figure src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid4.jpg"/>
          <Figure src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid5.jpg"/>
        </PhotoGrid>
      </Center>
    </FullBleed>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[8]}</p>
        <p>{text.paragraphs[9]}</p>
      </BodyCopy>
    </FullBleed>

    <FullBleed withMargins>

      <Header
        headerType="header-partial"
        scrollIcon={false}
        className={scss.headerWithAuthor}
        title={{
        text: text.headlines[2]
      }}
        subhead={{
        text: text.headlines[3]
      }}
        backgroundOpacity={0.8}
        textBackgroundColor="rgba(0,0,0,0.25)"
        desktopImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_3.jpg"
        tabletImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_3_600.jpg"
        mobileImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_4_400.jpg"/>
    </FullBleed>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[10]}</p>
        <p>{text.paragraphs[11]}</p>
        <p>{text.paragraphs[12]}</p>
      </BodyCopy>
    </FullBleed>
    <FullBleed withMargins>
      <Center size="x-large">

        <Figure
          className={scss.Figure}
          credit={text.credits[0]}
          caption={text.captions[1]}
          src="http://stg.theoreminc.net/wp-content/uploads/nyt/Figure_1.jpg"/>

      </Center>
    </FullBleed>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[13]}</p>
        <p>{text.paragraphs[14]}</p>
        <p>{text.paragraphs[15]}</p>
        <p>{text.paragraphs[16]}</p>
      </BodyCopy>
    </FullBleed>

    <Header
      headerType="header-full"
      scrollIcon={false}
      className={scss.headlineTop}
      title={text.headlines[4]}
      desktopImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_4.jpg"
      tabletImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_4_600.jpg"
      mobileImage="hhttp://stg.theoreminc.net/wp-content/uploads/nyt/header_4_400.jpg"/>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[17]}</p>
      </BodyCopy>
    </FullBleed>

    <Center size="large">
      <PhotoGrid className={scss.PhotoGrid} positionalCaptions={false}>
        <Figure
          src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid6.jpg"
          caption={text.captions[2]}/>
        <Figure src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid7.jpg"/>
      </PhotoGrid>
    </Center>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[18]}</p>
        <p>{text.paragraphs[19]}</p>
        <p>{text.paragraphs[20]}</p>
      </BodyCopy>
    </FullBleed>

    <Center size="x-large">
      <PhotoGrid className={scss.PhotoGrid} positionalCaptions={false} alternate flip>
        <Figure
          src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid10.jpg"
          caption={text.captions[3]}/>
        <Figure src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid8.jpg"/>
        <Figure src="http://stg.theoreminc.net/wp-content/uploads/nyt/PhotoGrid9.jpg"/>
      </PhotoGrid>
    </Center>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[21]}</p>
        <p>{text.paragraphs[22]}</p>
        <p>{text.paragraphs[23]}</p>
      </BodyCopy>
    </FullBleed>

    <FullBleed withMargins>

      <Header
        headerType="header-partial"
        className={scss.headerWithAuthor}
        scrollIcon={false}
        title={{
        text: text.headlines[5]
      }}
        subhead={{
        text: text.authors[0]
      }}
        backgroundOpacity={0.8}
        textBackgroundColor="rgba(0,0,0,0.25)"
        desktopImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_5.jpg"
        tabletImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_5_600.jpg"
        mobileImage="http://stg.theoreminc.net/wp-content/uploads/nyt/header_5_400.jpg"/>
    </FullBleed>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[24]}</p>
        <p>{text.paragraphs[25]}</p>
        <p>{text.paragraphs[26]}</p>
      </BodyCopy>
    </FullBleed>

    <FullBleed withMargins>
      <Center size="x-large">

        <Figure
          className={scss.Figure}
          caption={text.captions[3]}
          src="http://stg.theoreminc.net/wp-content/uploads/nyt/Figure_2.jpg"/>

      </Center>
    </FullBleed>

    <FullBleed withMargins>
      <BodyCopy>
        <p>{text.paragraphs[27]}</p>
        <p>{text.paragraphs[28]}</p>

      </BodyCopy>
    </FullBleed>

    <Center size="x-large">
      <SectionHeader className={scss.headlineBottom}>{text.headlines[6]}</SectionHeader>

    </Center>
    <BodyCopy>
      <p>{text.paragraphs[29]}</p>
      <p>{text.paragraphs[30]}</p>

    </BodyCopy>

    <FullBleed withPadding>
      <Center size="x-large">

        <Slideshow ratio="3:2" sides={false} className={scss.Slideshow}>
          <Figure
            src={{ 
            [breakpoints.compact]: "http://stg.theoreminc.net/wp-content/uploads/nyt/Slideshow1_compact.jpg",
            [breakpoints.regular]: "http://stg.theoreminc.net/wp-content/uploads/nyt/Slideshow1.jpg"
          }}
            caption={text.slideshow[0]}/>
          <Figure
            src={{
            [breakpoints.compact]: "http://stg.theoreminc.net/wp-content/uploads/nyt/Slideshow2_compact.jpg",
            [breakpoints.regular]: "http://stg.theoreminc.net/wp-content/uploads/nyt/Slideshow2.jpg"
          }}
            caption={text.slideshow[1]}/>
          <Figure
            src={{
            [breakpoints.compact]: "http://stg.theoreminc.net/wp-content/uploads/nyt/<Slideshow3></Slideshow3>_compact.jpg",
            [breakpoints.regular]: "http://stg.theoreminc.net/wp-content/uploads/nyt/Slideshow3.jpg"
          }}
            caption={text.slideshow[2]}/>
        </Slideshow>

      </Center>

    </FullBleed>

    <BrandFooter
      link="https://nytimes.com"
      background={{
      [breakpoints.compact]: "http://stg.theoreminc.net/wp-content/uploads/nyt/BrandFooter1_compact.jpg",
      [breakpoints.regular]: "http://stg.theoreminc.net/wp-content/uploads/nyt/BrandFooter1.jpg"
    }}
      logo={{
      [breakpoints.compact]: "http://stg.theoreminc.net/wp-content/uploads/nyt/brandlogo.png",
      [breakpoints.regular]: "http://stg.theoreminc.net/wp-content/uploads/nyt/brandlogo.png"
    }}
      logoHeight="medium"
      logoOrientation="landscape"
      ctaPosition="center">
      That’s Continental.
    </BrandFooter>

  </PaidPostArticle>
);

export default Index;
