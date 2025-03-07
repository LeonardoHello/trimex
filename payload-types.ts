/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    services: Service;
    projects: Project;
    reviews: Review;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    services: ServicesSelect<false> | ServicesSelect<true>;
    projects: ProjectsSelect<false> | ProjectsSelect<true>;
    reviews: ReviewsSelect<false> | ReviewsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    'home-page': HomePage;
    'price-list-page': PriceListPage;
    'projects-page': ProjectsPage;
    'contact-page': ContactPage;
    header: Header;
    footer: Footer;
  };
  globalsSelect: {
    'home-page': HomePageSelect<false> | HomePageSelect<true>;
    'price-list-page': PriceListPageSelect<false> | PriceListPageSelect<true>;
    'projects-page': ProjectsPageSelect<false> | ProjectsPageSelect<true>;
    'contact-page': ContactPageSelect<false> | ContactPageSelect<true>;
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  _key?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      _key?: string | null;
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  lucideIcon: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  image: number | Media;
  colSpan: 'one' | 'two' | 'three';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Review {
  id: number;
  firstName: string;
  lastName: string;
  avatar: number | Media;
  jobTitle: string;
  companyName: string;
  review: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'services';
        value: number | Service;
      } | null)
    | ({
        relationTo: 'projects';
        value: number | Project;
      } | null)
    | ({
        relationTo: 'reviews';
        value: number | Review;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  _key?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              _key?: T;
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services_select".
 */
export interface ServicesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  price?: T;
  lucideIcon?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects_select".
 */
export interface ProjectsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  image?: T;
  colSpan?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews_select".
 */
export interface ReviewsSelect<T extends boolean = true> {
  firstName?: T;
  lastName?: T;
  avatar?: T;
  jobTitle?: T;
  companyName?: T;
  review?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home-page".
 */
export interface HomePage {
  id: number;
  heroSection: {
    heroBadge: string;
    heroTitle: string;
    heroParagraph: string;
    heroCallToAction: string;
  };
  servicesSection: {
    ServicesBadge: string;
    servicesTitle: string;
  };
  projectsSection: {
    projectsBadge: string;
    projectsTitle: string;
  };
  reviewSection: {
    reviewBadge: string;
    reviewTitle: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "price-list-page".
 */
export interface PriceListPage {
  id: number;
  badge: string;
  title: string;
  paragraph: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects-page".
 */
export interface ProjectsPage {
  id: number;
  badge: string;
  title: string;
  paragraph: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-page".
 */
export interface ContactPage {
  id: number;
  contactIntroductionSection: {
    introductionBadge: string;
    introductionTitle: string;
    introductionParagraph: string;
  };
  informationSection: {
    emailInformation: {
      title: string;
      email: string;
    };
    phoneInformation: {
      title: string;
      phone: string;
    };
    addressInformation: {
      title: string;
      address: string;
    };
  };
  formSection: {
    badge: string;
    title: string;
    nameInput: {
      label: string;
      error: string;
    };
    emailInput: {
      label: string;
      error: string;
    };
    messageInput: {
      label: string;
      error: string;
    };
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  navigation: {
    route: string;
    href: string;
    id?: string | null;
  }[];
  callToAction: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  navigation: {
    route: string;
    href: string;
    id?: string | null;
  }[];
  socials: {
    url: string;
    simpleIcon: string;
    id?: string | null;
  }[];
  copyrightNotice: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home-page_select".
 */
export interface HomePageSelect<T extends boolean = true> {
  heroSection?:
    | T
    | {
        heroBadge?: T;
        heroTitle?: T;
        heroParagraph?: T;
        heroCallToAction?: T;
      };
  servicesSection?:
    | T
    | {
        ServicesBadge?: T;
        servicesTitle?: T;
      };
  projectsSection?:
    | T
    | {
        projectsBadge?: T;
        projectsTitle?: T;
      };
  reviewSection?:
    | T
    | {
        reviewBadge?: T;
        reviewTitle?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "price-list-page_select".
 */
export interface PriceListPageSelect<T extends boolean = true> {
  badge?: T;
  title?: T;
  paragraph?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects-page_select".
 */
export interface ProjectsPageSelect<T extends boolean = true> {
  badge?: T;
  title?: T;
  paragraph?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-page_select".
 */
export interface ContactPageSelect<T extends boolean = true> {
  contactIntroductionSection?:
    | T
    | {
        introductionBadge?: T;
        introductionTitle?: T;
        introductionParagraph?: T;
      };
  informationSection?:
    | T
    | {
        emailInformation?:
          | T
          | {
              title?: T;
              email?: T;
            };
        phoneInformation?:
          | T
          | {
              title?: T;
              phone?: T;
            };
        addressInformation?:
          | T
          | {
              title?: T;
              address?: T;
            };
      };
  formSection?:
    | T
    | {
        badge?: T;
        title?: T;
        nameInput?:
          | T
          | {
              label?: T;
              error?: T;
            };
        emailInput?:
          | T
          | {
              label?: T;
              error?: T;
            };
        messageInput?:
          | T
          | {
              label?: T;
              error?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  navigation?:
    | T
    | {
        route?: T;
        href?: T;
        id?: T;
      };
  callToAction?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  navigation?:
    | T
    | {
        route?: T;
        href?: T;
        id?: T;
      };
  socials?:
    | T
    | {
        url?: T;
        simpleIcon?: T;
        id?: T;
      };
  copyrightNotice?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}