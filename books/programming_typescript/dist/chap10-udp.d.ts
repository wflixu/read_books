/// <reference types="node" />
declare namespace NetWork {
    namespace UDP {
        function send<T>(url: string, packets: Buffer): Promise<T>;
    }
    namespace HTTP {
    }
}
