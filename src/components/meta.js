import React from 'react';
import { Helmet } from 'react-helmet';

function meta() {
  return (
    <div>
      <Helmet>
        <title>Morada da paz</title>

        {
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          /* <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="This is a description of my page" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
        <meta name="twitter:title" content="My Page Title" />
        <meta name="twitter:description" content="This is a description of my page" />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" /> */
        }
      </Helmet>
      {/* Your component's code here */}
    </div>
  );
}

export default Meta;
