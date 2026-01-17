import { SITE } from "@/lib/seo/site";

export const IDS = {
  org: `${SITE.url}/#org`,
  localBusiness: `${SITE.url}/#localbusiness`,
  website: `${SITE.url}/#website`,
  logo: `${SITE.url}/#logo`,
  webPage: (path) => `${SITE.url}${path}#webpage`,
  service: (slug) => `${SITE.url}/#service-${slug}`,
};
