import { FacebookPixel } from 'react-facebook-pixel';

export const initFacebookPixel = () => {
  const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  FacebookPixel.init(facebookPixelId, {}, {
    debug: false, // true = active debug mode
  });
};

export const trackPageView = () => {
  FacebookPixel.pageView();
};

export const trackEvent = (eventName, eventData) => {
  FacebookPixel.track(eventName, eventData);
};