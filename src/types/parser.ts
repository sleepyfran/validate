import { Severity } from './severity'

export type PropertyResult = {
    errored: boolean
    message: string
    code?: number | string
    severity?: Severity
}

export type ParserState = [string, PropertyResult][]
