# Deload

[![Downloads](https://img.shields.io/npm/dm/deload.svg)](https://www.npmjs.com/package/deload) [![Version](https://img.shields.io/npm/v/deload.svg)](https://www.npmjs.com/package/deload)

**✨ Load scripts and stylesheets precisely when needed, optimizing performance and efficiency. ✨**

**🍃 Developed with 0 external dependencies in less than 1KB**

## Why?

- **🚀 Better load time:** Deload ensures that scripts and stylesheets are loaded only when required, reducing initial load times and enhancing the user experience.
- **📦 Small build size:** By dynamically loading resources, Deload keeps your application's build size lean, preventing unnecessary bloat and optimizing resource usage.
- **🎯 Event-based system:** Get complete control over resource loading events, ensuring seamless integration and flexibility in your projects.

## Installation

```bash
npm i deload
```

## Usage examples

```js
import { deloadJS, deloadCSS } from 'deload'

// Load script/stylesheet
await deloadJS('https://www.myapp.com/script.js')
await deloadCSS('https://www.myapp.com/styles.css')

// or
deloadJS('https://www.myapp.com/script.js')
  .then(() => {
    console.log('Loaded!')
  })
  .catch(error => {
    console.log('Error while loading script!')
  })

// Load multiple scripts
await deloadJS(['https://www.myapp.com/script1.js', 'https://www.myapp.com/script2.js'])

// Set attributes
await deloadJS(
  [
    'https://www.myapp.com/script1.js',
    'https://www.myapp.com/script2.js'
  ],
  {
    crossorigin: '',
    'data-example-att': 'hello'
  }
)
```

Note: 👍 Deload does not reload a script/stylesheet if it has already been loaded once, ensuring optimal resource management.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](./license.txt).

## Developer

Developed & maintained by [neilveil](https://github.com/neilveil).
