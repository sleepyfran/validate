import Validation from './types/validation'

interface Test {
    a: number
    b: string
    c: Set<any>
    d: Map<string, any>
}

const x = (validation: Validation) => {
    const test: Test = {
        a: 1,
        b: '1',
        c: new Set<any>([1, 2, 3]),
        d: new Map<string, any>(),
    }

    validation
        .of(test)
        .alphanumeric(i => i.b)
        .notEmpty(i => i.d)
}
