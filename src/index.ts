import Validation from './types/validation'

const test = (val: Validation) => {
    const userResult = val
        .of({
            name: 'Fran',
            lastName: 'González',
            age: 23,
            handle: 'sleepyfran',
        })
        .property('name')
        .alphanumeric()
        .result()
}
