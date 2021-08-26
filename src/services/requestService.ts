import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RequestService{
    constructor(private http: HttpClient) { }

    // @ts-ignore
    public async mapNodes(api,nodes, identifier): Promise<any> {
        /**
         * Tries to map every node to a node object in out database
         * Returns list of mapped nodes if node was found, otherwise original node to not lose information
         */
        const payload = {nodes: JSON.stringify(nodes), identifier: JSON.stringify(identifier)};
        return this.http.post(`${api}map_nodes/`, payload).toPromise();
    }
}
