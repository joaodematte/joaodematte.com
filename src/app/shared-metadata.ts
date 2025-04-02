import { Metadata } from 'next';

const title = 'joão dematte';
const description = 'thoughts about react and programming languages';

export const sharedMetadata: Metadata = {
  title: {
    template: '%s — joão dematte',
    default: title
  },
  description,
  twitter: {
    site: '@joaodematte',
    creator: '@joaodematte',
    card: 'summary_large_image',
    title: {
      template: '%s — joão dematte',
      default: title
    },
    description
  },
  openGraph: {
    title: {
      template: '%s — joão dematte',
      default: title
    },
    description,
    siteName: 'joão dematte',
    url: 'https://joaodematte.com/',
    type: 'website'
  }
};
