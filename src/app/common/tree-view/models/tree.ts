export type TypeOf = 'Folder' | 'File';

export interface TreeNode {
    name: string;
    id?: number | string;
    children?: TreeNode[];
    selected?: boolean;
    parent?: TreeNode;
    type?: TypeOf;
    childrenId?: number | string;
}