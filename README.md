# ☑️ validate

`validate` is a simple fluent validation library that allows you to validate anything by creating a _chain_ of validations like this:

```ts
const user = {
    name: 'Test McTestFace',
    username: 'test',
    age: 17,
}

const result = validation
    .of(user)
    .property('name')
        .alphanumeric()
        .maxLength(10)
        .withMessage('Who has a name that long?')
        .withCode('ERR-100')
    .andProperty('age')
        .greaterThanOrEqual(18)
        .withMessage('Only adults allowed!')
    .result()
```

This will return a `result` object that contains different methods to retrieve the validation errors, the original input and some utility methods to combine different results. For example, calling `errors()` on the previous result will return this array:

```js
[
    {
        message: 'name must contain only alphanumeric characters',
        code: undefined,
        property: 'name',
    },
    {
        message: 'Who has a name that long?',
        code: 'ERR-100',
        property: 'name',
    },
    {
        message: 'Only adults allowed!',
        code: undefined,
        property: 'age',
    },
]
```

Thanks to TypeScript every property name, even though they're strings, are type safe. For example, the following will yield an error:

```ts
const result = validation
    .of(user)
    .property('namee') // Error: Argument of type '"namee"' is not assignable to...
        .alphanumeric()
        .maxLength(10)
        .withMessage('Who has a name that long?')
    .result()
```

You can also combine different results to get one array with all the different validation errors instead of creating one big validation. For example:

```ts
const address = {
    street: 'Fake Street',
    number: -1,
}

const user = {
    name: 'Test McTestFace',
    username: 'test',
    age: 17,
}

const result = validation
    .of(user)
    // ...(same as before)
    .result()

const addressResult = validation
    .of(address)
    .property('street')
        .minLength(5)
    .andProperty('number')
        .positive()
    .result()

const combinedResult = result.combineWith(addressResult)
```

If we call `errors()` on `combinedResult` now it will return:

```js
[
    // ...(same as before)
    {
        message: 'number must be positive',
        code: undefined,
        property: 'number',
    },
]
```

## 🧰 Installation

The library is not yet published.

## 📖 Documentation

Head to the [wiki page](https://github.com/sleepyfran/validate/wiki).

## 🛠 Building

`validate` uses `yarn` as the default package manager, so for building the project it's recommended that you use the same; using `npm` is still an option, though, but `yarn` is recommended for a more predictable build. That being said:

```bash
git clone https://github.com/duets/game.git duets
cd duets
yarn install
```

## 🧪 Testing

After building you can execute the tests by simply running `yarn test`.

## ❓ FAQ

### Can you add _XYZ_ validator/feature?

This library was created specifically for [Duets](https://github.com/duets/game) and it may not cover every use-case. If you want a feature to be added, feel free to [open an issue](https://github.com/sleepyfran/validate/issues) and we'll discuss the possibility there.

### How can I contribute?

Take a look at the current [issues](https://github.com/sleepyfran/validate/issues) or open your own so we can discuss how the implementation would go.
