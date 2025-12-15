import type { Schema, Struct } from '@strapi/strapi';

export interface CommonContent extends Struct.ComponentSchema {
  collectionName: 'components_common_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {};
}

export interface ContactAddresssAddress extends Struct.ComponentSchema {
  collectionName: 'components_contact_addresss_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {};
}

export interface LanguageLanguage extends Struct.ComponentSchema {
  collectionName: 'components_language_languages';
  info: {
    displayName: 'language';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.content': CommonContent;
      'contact-addresss.address': ContactAddresssAddress;
      'language.language': LanguageLanguage;
    }
  }
}
