<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-my-file-path/main/media/my-file-path.png" alt="Icon of My File Path" width="256" height="256">
<h1 align="center">My File Path</h1>
</div>

<br>

<div align="center">
  🌟 A package that strongly types file paths! 🥊
</div>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- Type‑safe file path handling via the `FilePath<ext>` template literal type
- Extension validation with `isMyFilePath()` for case‑insensitive file path checks
- Assertion with error handling using `assertMyFilePath()`, supporting custom error messages
- Conditional file path creation through `createMyFilePath()`, returning a typed path or empty string
- Customisable error formatting powered by the external [`zing`](https://www.npmjs.com/package/@igorskyflyer/zing) utility

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```shell
pnpm add @igorskyflyer/my-file-path
yarn add @igorskyflyer/my-file-path
npm i @igorskyflyer/my-file-path
```

<br>
<br>

## 🤹🏼 API

The module exposes a generic type and 3 generic functions.

### Type

```ts
type FilePath<ext extends string>
```

<br>

Use this type for compile-time safety.

<br>

`index.ts`

```ts
type JsonFile = FilePath<'json'>

const filePathJson: JsonFile = 'abc.json' // works in the IDE
const filePathTxt: JsonFile = 'abc.txt' // will not work in the IDE
```

<br>

### Functions

- [`isMyFilePath()`](#ismyfilepath)
- [`createMyFilePath()`](#createmyfilepath)
- [`assertMyFilePath`](#assertmyfilepath)

<br>

#### isMyFilePath

```ts
function isMyFilePath<Ext extends string>(
  filePath: string,
  extension: Ext
): boolean
```

> Checks whether the provided filepath conforms with the provided file extension.

<br>

**Generic parameter:**

`Ext` - the file extension to use with the generic, without a leading dot.

<br>

**Function parameters:**

`filePath` - the filepath to check.
`extension` - the file extension to perform the check with.

<br>

Will **not** `throw`.
Returns a `boolean`.

<br>

#### createMyFilePath

```ts
function createMyFilePath<Ext extends string>(
  filePath: string,
  extension: Ext
): FilePath<Ext>
```

> Checks whether the provided filepath conforms with the provided file extension and returns it if true. Otherwise it returns an empty string.

<br>

**Generic parameter:**

`Ext` - the file extension to use with the generic, without a leading dot.

<br>

**Function parameters:**

`filePath` - the filepath to check.
`extension` - the file extension to perform the check with.

<br>

Will **not** `throw`.
Returns a `FilePath<Ext>`.

<br>

#### assertMyFilePath

```ts
function assertMyFilePath<Ext extends string>(
  filePath: string,
  extension: Ext,
  errorMessage?: string
): void
```

> Asserts whether the provided filepath conforms with the provided file extension.

<br>

**Generic parameter:**

`Ext` - the file extension to use with the generic, without a leading dot.

<br>

**Function parameters:**

`filePath` - the filepath to check.
`extension` - the file extension to perform the check with.
`errorMessage` - the error message to throw.

<br>

Will `throw` if the filepath doesn't conform the provided extension.
Returns a `void`.

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-my-file-path/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-my-file-path/blob/main/LICENSE.txt).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/upath](https://www.npmjs.com/package/@igorskyflyer/upath)

> _🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬_

<br>

[@igorskyflyer/windev](https://www.npmjs.com/package/@igorskyflyer/windev)

> _🍃 Provides ways of checking whether a path is a legacy Windows device. 💾_

<br>

[@igorskyflyer/my-file-path](https://www.npmjs.com/package/@igorskyflyer/my-file-path)

> _🌟 An npm module that strongly types file paths! 🥊_

<br>

[@igorskyflyer/recursive-readdir](https://www.npmjs.com/package/@igorskyflyer/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igorskyflyer/open-resource](https://www.npmjs.com/package/@igorskyflyer/open-resource)

> _📂 Opens a given resource (URL, file, etc.) via the default OS handler. 🔎_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
