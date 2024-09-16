export type GlobalResponseType<T> = {
    status: number | null,
    message: string | null,
    data: T
}