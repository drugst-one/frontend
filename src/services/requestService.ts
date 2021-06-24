import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RequestService{
    private backendUrl = "http://10.162.163.20:8001/"
    // private backendUrl = "https://www.exbio.wzw.tum.de/drugstone/api/"
    constructor(private http: HttpClient) { }

    // @ts-ignore
    public async mapNodes(nodes, identifier): Promise<any> {
        /**
         * Tries to map every node to a node object in out database
         * Returns list of mapped nodes if node was found, otherwise original node to not lose information
         */
        const payload = {nodes: JSON.stringify(nodes), identifier: JSON.stringify(identifier)};
        console.log(payload)
        return this.http.post(`${this.backendUrl}map_nodes/`, payload).toPromise();
    }
}
