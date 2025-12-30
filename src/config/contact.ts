export const CONTACT_EMAIL = 'josh@rockbookkeeping.com';
export const CONTACT_PHONE = '412-256-8411';

// Helpers for links and structured data
const CONTACT_PHONE_DIGITS = CONTACT_PHONE.replace(/[^0-9]/g, '');
export const CONTACT_PHONE_E164 = `+1${CONTACT_PHONE_DIGITS}`;
export const CONTACT_PHONE_TEL = `tel:${CONTACT_PHONE_E164}`;
export const CONTACT_PHONE_SMS = `sms:${CONTACT_PHONE_E164}`;

export const contactInfo = {
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  phoneE164: CONTACT_PHONE_E164,
};
