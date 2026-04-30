export const CONTACT_EMAIL = 'josh@rockbookkeeping.com';

// Phone segments — assembled at runtime in UI; use CONTACT_PHONE_* only for SEO/structured data
export const PHONE_AREA = '724';
export const PHONE_PREFIX = '520';
export const PHONE_LINE = '3050';

export const CONTACT_PHONE = `${PHONE_AREA}-${PHONE_PREFIX}-${PHONE_LINE}`;
export const CONTACT_PHONE_E164 = `+1${PHONE_AREA}${PHONE_PREFIX}${PHONE_LINE}`;
export const CONTACT_PHONE_TEL = `tel:${CONTACT_PHONE_E164}`;
export const CONTACT_PHONE_SMS = `sms:${CONTACT_PHONE_E164}`;

export const contactInfo = {
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  phoneE164: CONTACT_PHONE_E164,
};
