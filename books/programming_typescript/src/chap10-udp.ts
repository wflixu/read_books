namespace NetWork {
    export namespace UDP {
        export function send<T>(url:string, packets:Buffer):Promise<T>{
            return Promise.resolve('' as T)
        }
    }
    export namespace HTTP {
        export function get<T>(url:string,count:number):Promise<T> {
            count++;
            return Promise.resolve(url+ count as T)
        }
    }

}