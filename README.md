# gatsby-plugin-react-i18next-v10
> [Gatsby](https://github.com/gatsbyjs/gatsby) plugin that provides i18n support.

## Installation
```sh
  npm install --save gatsby-plugin-react-i18next-v10
```

## Usage
Edit `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-react-i18next-v10`,
      options: {
        // Add any options here
      },
    },
  ],
}
```

# Options
You can pass options to the plugin:
- availableLngs (Array [required])
- fallbackLng (String [required])
- siteUrl (String [optional])

For example:

```js
options: {
  availableLngs: ['en', 'de'],
  fallbackLng: 'en',
  siteUrl: 'https://www.example.com/',
}
```

## License
[MIT](LICENSE)
