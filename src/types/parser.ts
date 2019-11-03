export type PropertyResult = {
    errored: boolean
    message: string
    code?: number | string
}

export type ParserState = [string, PropertyResult][]
