import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicFieldsUrlAliases extends Schema.Component {
  collectionName: 'components_basic_fields_url_aliases';
  info: {
    displayName: 'url_aliases';
    icon: 'apps';
  };
  attributes: {
    url: Attribute.String;
  };
}

export interface BasicFieldsThumbnails extends Schema.Component {
  collectionName: 'components_basic_fields_thumbnails';
  info: {
    displayName: 'thumbnails';
    icon: 'apps';
    description: '';
  };
  attributes: {
    ALTTag: Attribute.String;
    URL: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Attribute.String;
  };
}

export interface BasicFieldsTags extends Schema.Component {
  collectionName: 'components_basic_fields_tags';
  info: {
    displayName: 'tags';
    icon: 'apps';
  };
  attributes: {
    tags: Attribute.Component<'basic-fields.articles-tags', true>;
  };
}

export interface BasicFieldsSeo extends Schema.Component {
  collectionName: 'components_basic_fields_seos';
  info: {
    displayName: 'seo';
    icon: 'apps';
    description: '';
  };
  attributes: {
    SEOTitle: Attribute.String;
    SEODescription: Attribute.Text;
    SEOCanonical: Attribute.String;
    SEORobots: Attribute.String;
    OGTitle: Attribute.String;
    OGUrl: Attribute.String;
    OGImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    OGType: Attribute.String;
    OGDescription: Attribute.Text;
    OGLocale: Attribute.String;
    TwitterTitle: Attribute.String;
    TwitterDescription: Attribute.Text;
    TwitterImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SEOKeywords: Attribute.Text;
    ExcludeFromSitemap: Attribute.Boolean;
  };
}

export interface BasicFieldsPageContent extends Schema.Component {
  collectionName: 'components_basic_fields_page_contents';
  info: {
    displayName: 'PageContent';
    icon: 'apps';
    description: '';
  };
  attributes: {
    ArticleImageDesktop: Attribute.Component<'basic-fields.thumbnails'>;
    ArticleImageMobile: Attribute.Component<'basic-fields.thumbnails'>;
    Author: Attribute.String;
    SummaryText: Attribute.Text;
    tags: Attribute.Component<'basic-fields.articles-tags', true>;
    DemoLink: Attribute.String;
    Brochure: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    RelatedProducts: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    SubBlogTitle: Attribute.String;
    SubBlogPublished_Date: Attribute.Date;
    SubBlogReadingTime: Attribute.String;
    SubBlogDescription: Attribute.String;
    FAQsSchema: Attribute.Text;
    FAQs: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    ArticleContent: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BasicFieldsArticlesTags extends Schema.Component {
  collectionName: 'components_basic_fields_articles_tags';
  info: {
    displayName: 'articles_tags';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BasicComponentsSuccessStories extends Schema.Component {
  collectionName: 'components_basic_components_success_stories';
  info: {
    displayName: 'SuccessStories';
    icon: 'apps';
  };
  attributes: {
    VideoThumbDesktop: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ClientLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    VideoEmbededLink: Attribute.String;
    Title: Attribute.String;
    ShortIntro: Attribute.String;
    Link: Attribute.String;
  };
}

export interface BasicComponentsSolutionItems extends Schema.Component {
  collectionName: 'components_basic_components_solution_items';
  info: {
    displayName: 'SolutionItems';
    icon: 'apps';
  };
  attributes: {
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Type: Attribute.Enumeration<['Industry', 'Need', 'Organization Size']>;
    Text: Attribute.String;
    Link: Attribute.String;
  };
}

export interface BasicComponentsRelatedContents extends Schema.Component {
  collectionName: 'components_basic_components_related_contents';
  info: {
    displayName: 'RelatedContents';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ThumbDesktop: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ThumbMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Attribute.Text;
    CT: Attribute.Enumeration<
      [
        'tw-page-infographic',
        'tw-page-case-study',
        'tw-page-blog-article',
        'tw-page-whitepaper'
      ]
    >;
  };
}

export interface BasicComponentsProducts extends Schema.Component {
  collectionName: 'components_basic_components_products';
  info: {
    displayName: 'Products';
    icon: 'apps';
  };
  attributes: {
    Thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ProductName: Attribute.String;
    ShortIntro: Attribute.String;
    ProductLink: Attribute.String;
  };
}

export interface BasicComponentsOverviews extends Schema.Component {
  collectionName: 'components_basic_components_overviews';
  info: {
    displayName: 'Overviews';
    icon: 'apps';
  };
  attributes: {
    OverviewTitle: Attribute.String;
    OverviewDescription: Attribute.Text;
    ThumbnailAlignment: Attribute.Enumeration<['left', 'center', 'right']>;
    ShowBrochureCTA: Attribute.Boolean;
    BrochureLink: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    EmbededVideo: Attribute.String;
    Thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ProductBrochure: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BasicComponentsOurClients extends Schema.Component {
  collectionName: 'components_basic_components_our_clients';
  info: {
    displayName: 'OurClients';
    icon: 'apps';
  };
  attributes: {
    Logo: Attribute.Component<'basic-fields.thumbnails', true>;
  };
}

export interface BasicComponentsItems extends Schema.Component {
  collectionName: 'components_basic_components_items';
  info: {
    displayName: 'items';
    icon: 'apps';
  };
  attributes: {
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Type: Attribute.Enumeration<['Industry', 'Need', 'Organization Size']>;
    Text: Attribute.String;
    Link: Attribute.String;
  };
}

export interface BasicComponentsHeroBanners extends Schema.Component {
  collectionName: 'components_basic_components_hero_banners';
  info: {
    displayName: 'HeroBanners';
    icon: 'apps';
    description: '';
  };
  attributes: {
    ShortDescription: Attribute.String;
    ShortDescriptionAlignment: Attribute.Enumeration<
      ['left', 'center', 'right']
    >;
    LongDescription: Attribute.Text;
    CTAText: Attribute.String;
    CTALink: Attribute.String;
    ShowWhatsappBtn: Attribute.Boolean & Attribute.DefaultTo<false>;
    VideoLink: Attribute.String;
    DesktopImage: Attribute.Component<'basic-fields.thumbnails'>;
    MobileImage: Attribute.Component<'basic-fields.thumbnails'>;
  };
}

export interface BasicComponentsFaQs extends Schema.Component {
  collectionName: 'components_basic_components_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'apps';
  };
  attributes: {
    Question: Attribute.String;
    ShortAnswer: Attribute.String;
    LongAnser: Attribute.Text;
    DestinationUrl: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic-fields.url-aliases': BasicFieldsUrlAliases;
      'basic-fields.thumbnails': BasicFieldsThumbnails;
      'basic-fields.tags': BasicFieldsTags;
      'basic-fields.seo': BasicFieldsSeo;
      'basic-fields.page-content': BasicFieldsPageContent;
      'basic-fields.articles-tags': BasicFieldsArticlesTags;
      'basic-components.success-stories': BasicComponentsSuccessStories;
      'basic-components.solution-items': BasicComponentsSolutionItems;
      'basic-components.related-contents': BasicComponentsRelatedContents;
      'basic-components.products': BasicComponentsProducts;
      'basic-components.overviews': BasicComponentsOverviews;
      'basic-components.our-clients': BasicComponentsOurClients;
      'basic-components.items': BasicComponentsItems;
      'basic-components.hero-banners': BasicComponentsHeroBanners;
      'basic-components.fa-qs': BasicComponentsFaQs;
    }
  }
}
