import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TreeNode } from '../tree-view/models/tree';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {

  constructor(
    public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TreeNode
  ) {
    this.data = { ...data, id: this.createId(), ...((this.data.type === 'Folder') && { childrenId: this.createId() }) };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

}