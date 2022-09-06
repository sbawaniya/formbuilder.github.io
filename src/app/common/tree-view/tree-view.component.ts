import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNode } from './models/tree';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

const TREE_DATA: TreeNode[] = [
  {
    name: 'Demo',
    id: 'demo_1',
    children: [
      {
        name: 'Folder',
        id: 'folder_1',
        children: [
          { name: 'File', id: 1 },
          { name: 'Doc', id: 2 },
        ],
      },
      {
        name: 'Folder 2',
        id: 'folder_2',
        children: [
          { name: 'doc file', id: 3 },
          { name: 'word', id: 4 },
        ],
      },
    ],
  },
  {
    name: 'Projects',
    id: 'pro_1',
    children: [
      {
        name: 'Dir',
        id: 'dir_1',
        children: [
          { name: 'ib', id: 5 },
          { name: 'Pro 2', id: 6 },
        ],
      }
    ],
  },
];

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {

  @Input() searchText: string = '';

  subscription!: Subscription;
  selectedId!: number | string;

  public treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<TreeNode>();
  public showOnlySelected = false;

  constructor(private sharedService: SharedService) {
    this.dataSource.data = TREE_DATA;
    Object.keys(this.dataSource.data).forEach((key: any) => {
      this.setParent(this.dataSource.data[key], null!);
    });
  }

  ngOnInit() {
    this.subscription = this.sharedService.currentData.subscribe((res: any) => {
      if (res) {
        this.addEditSelectNode(this.dataSource.data, this.selectedId, res);
      }
    });
  }

  public hasChild = (_: number, node: TreeNode) => !!node.children;

  private setParent(node: TreeNode, parent: TreeNode) {
    node.parent = parent;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.setParent(childNode, node);
      });
    }
  }

  public hideLeafNode(node: TreeNode): boolean {
    return this.showOnlySelected && !node.selected
      ? true
      : new RegExp(this.searchText, 'i').test(node.name) === false;
  }

  public hideParentNode(node: TreeNode): boolean {
    return this.treeControl
      .getDescendants(node)
      .filter(node => node.children == null || node.children.length === 0)
      .every(node => this.hideLeafNode(node));
  }

  handleSelect(nodeId: number | string) {
    this.addEditSelectNode(this.dataSource.data, nodeId);
    this.selectedId = nodeId;
  }

  addEditSelectNode(data: TreeNode[], id: number | string, obj?: TreeNode) {
    data.forEach((elm: TreeNode) => {
      if (Array.isArray(elm.children)) {
        this.addEditSelectNode(elm.children, id, obj);
        if (id === elm.id) {
          if (obj) {
            const newObj = obj.childrenId ? {...obj, children: []} : obj;
            elm.children.push(newObj);
          } else {
            elm.selected = true;
          }
        } else {
          elm.selected = false;
        }
      }
    });
    this.dataSource.data = data;
  }
}