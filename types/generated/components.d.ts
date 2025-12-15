import type { Schema, Struct } from '@strapi/strapi';

export interface CommonContent extends Struct.ComponentSchema {
  collectionName: 'components_common_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    subdescription: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
  };
}

export interface ContactAddresssAddress extends Struct.ComponentSchema {
  collectionName: 'components_contact_addresss_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    Area: Schema.Attribute.Text;
    contact_email: Schema.Attribute.Email;
    pincode: Schema.Attribute.BigInteger;
  };
}

export interface LanguageLanguage extends Struct.ComponentSchema {
  collectionName: 'components_language_languages';
  info: {
    displayName: 'language';
  };
  attributes: {
    english: Schema.Attribute.Boolean;
    tamil: Schema.Attribute.Boolean;
  };
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
