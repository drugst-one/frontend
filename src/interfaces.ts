


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

export interface Theme {
    background: string;
    'panel-background': string;
    'panel-border': string;
    'network-background': string;
    color1: string;
    color2: string;
    'text-primary': string;
    'text-secondary': string;
    success: string;
    warn: string;
    error: string;
}

