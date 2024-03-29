# ⚠ Project is moved to [React Components](https://github.com/eisberg-labs/react-components).
[![Downloads](http://img.shields.io/npm/dm/@eisberg-labs/mui-copy-field.svg)](https://npmjs.org/package/@eisberg-labs/mui-copy-field)
![Build status](https://github.com/eisberg-labs/mui-copy-field/actions/workflows/ci.yml/badge.svg)
## [mui-copy-field](https://github.com/eisberg-labs/mui-copy-field)
> Material UI TextField with copy to clipboard functionality.

![Example](./docs/demo.gif)

If you 👍 or use this project, consider giving it a ★, thanks! 🙌

## Installation

```sh
npm i --save @eisberg-labs/mui-copy-field
```

## Usage
Take a look at [Storybook examples](https://github.com/eisberg-labs/mui-copy-field/blob/main/src/copy-field.stories.tsx) for example usage.
You can use it like `TextField`:
```jsx
import {DefaultCopyField} from '@eisberg-labs/mui-copy-field';

<DefaultCopyField
  label="Click on copy Button"
  value={"Enter text"} />
```

or like `TextField` with extra props:
```jsx
import {CopyField} from '@eisberg-labs/mui-copy-field';

<CopyField
  label="Click on copy Button"
  value={"Enter text"}
  onCopySuccess={console.log}
  onCopyError={console.log}
  copyTooltip={"Some copy tooltip. Default is Copy"}
/>
```

Name | Type | Default | Description
----------|------|-----------|----------
copyTooltip | string | "Copy" | Copy button tooltip
onCopySuccess | Function | undefined | If defined, fired on copy to clipboard
onCopyError | Function | undefined | If defined, fired on copy to clipboard error


## Demo
[Try the Demo in StackBlitz](https://stackblitz.com/edit/mui-copy-field-demo)

## License
MIT © [Eisberg Labs](http://www.eisberg-labs.com)
