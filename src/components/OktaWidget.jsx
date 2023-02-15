import { useEffect, useRef } from 'react';

import OktaSignIn from '@okta/okta-signin-widget';

import config from 'configs/okta';

export default function OktaWidget({ onSuccess, onError }) {
  const widgetRef = useRef();
  useEffect(() => {
    if (!widgetRef.current) {
      return false;
    }

    const widget = new OktaSignIn(config);

    // Search for URL Parameters to see if a user is being routed to the application to recover password
    var searchParams = new URL(window.location.href).searchParams;
    widget.otp = searchParams.get('otp');
    widget.state = searchParams.get('state');
    widget
      //   .showSignInToGetTokens({
      //     el: widgetRef.current
      //   })
      .showSignInAndRedirect({
        el: widgetRef.current
      })
      .then(onSuccess)
      .catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return <div ref={widgetRef} />;
}
