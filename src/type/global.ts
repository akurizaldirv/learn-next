export type GlobalResponseType<T> = {
    status: Number | null,
    message: string | null,
    data: T
}