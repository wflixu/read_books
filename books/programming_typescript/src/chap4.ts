
type TreeNode = {
    value: string;
}

type LeafNode = TreeNode & {
    isLeaf: true
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}


function mapNode<T extends TreeNode>(
    node: T,
    f: (value: string) => string
): T {
    return {
        ...node,
        value: f(node.value)
    }
}

function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
    return f(...args);
}

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value);
}