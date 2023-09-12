# My file path

🌟 An npm module that strongly types file paths! 🥊

<br>
<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
	</blockquote>
</div>

<br>
<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/my-file-path"
```

<br>

## 🤹🏼 API

The module exposes 3 generic functions:

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

> Checks whether the provided filepath conforms with the provided file extension and returns it if true.

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

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-my-file-path/blob/main/LICENSE).

---

## 🧬 Related

[uPath](https://www.npmjs.com/package/@igor.dvlpr/upath)

> _🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬_

[pathexists](https://www.npmjs.com/package/@igor.dvlpr/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[valid-path](https://www.npmjs.com/package/@igor.dvlpr/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[Zep](https://www.npmjs.com/package/@igor.dvlpr/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

[Odin](https://www.npmjs.com/package/@igor.dvlpr/odin)

> _🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺_
