import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroos';
  info: {
    displayName: 'Heroo';
  };
  attributes: {
    Content: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Subheading: Schema.Attribute.String;
  };
}

export interface CardsSectionCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_cards_section_cards_sections';
  info: {
    displayName: 'cards_section';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CardsCards extends Struct.ComponentSchema {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    altText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface CardsCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_cards_cards_sections';
  info: {
    displayName: 'cards_section';
  };
  attributes: {};
}

export interface ItemFeatureItems extends Struct.ComponentSchema {
  collectionName: 'components_item_feature_items';
  info: {
    displayName: 'FeatureItems';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductsProducts extends Struct.ComponentSchema {
  collectionName: 'components_products_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SubtextSubtext extends Struct.ComponentSchema {
  collectionName: 'components_subtext_subtexts';
  info: {
    displayName: 'subtext';
  };
  attributes: {
    altText: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.heroo': BlocksHeroo;
      'cards-section.cards-section': CardsSectionCardsSection;
      'cards.cards': CardsCards;
      'cards.cards-section': CardsCardsSection;
      'item.feature-items': ItemFeatureItems;
      'menu.item': MenuItem;
      'products.products': ProductsProducts;
      'subtext.subtext': SubtextSubtext;
    }
  }
}
