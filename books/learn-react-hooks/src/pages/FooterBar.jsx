import React, { useEffect } from 'react';
import { useCurrentRoute } from 'react-navi';

export default function FooterBar() {
  const { url } = useCurrentRoute();

  return (<div>{url.href}</div>)
}
