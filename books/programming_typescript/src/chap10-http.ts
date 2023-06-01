namespace NetWork {
    export namespace HTTP {
        export function get<T>(url:string):Promise<T> {
            return Promise.resolve('' as T)
        }
    }
}