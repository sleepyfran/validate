export type PropertyResult = {
    property: string
}

export type ParserState = {
    propertyResult: [string, boolean][]
    message?: string
    code?: number
}
