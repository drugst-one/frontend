export interface Option {
    name: string;
    type: string;
    default: string;
    description: string;
}

export interface NodeGroup {
    name: string;
    function: string;
}

export interface Node {
    label: string;
    symbol: string;
    id: string;
    type: string;
    netexId?: string;
    uniprotAc?: string;
    ensg?: Array<string>;
    group?: string;
    groupName?: string;
    color?: string;
    shape?: string;
    interactions?: Node[];
    x?: number;
    y?: number;
    expressionLevel?: number;
}
