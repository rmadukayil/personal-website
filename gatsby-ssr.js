const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
  const logger =
    process.env.NODE_ENV === 'production' ? (
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html:
            "console.log('Hi. Just checking.')",
        }}
      />
    ) : (
      ''
    )

  setPostBodyComponents([logger])
}
