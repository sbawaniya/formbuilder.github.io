import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../common/add-edit/add-edit.component';
import { Breadcrumb } from '../common/breadcrumb/breadcrumb.component';
import { SharedService } from '../common/shared.service';
import { TreeNode, TypeOf } from '../common/tree-view/models/tree';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  breadcrumbs!: Breadcrumb[];

  constructor(public dialog: MatDialog, private sharedService: SharedService) { }

  openDialog(typeOf: TypeOf): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      width: '320px',
      data: { id: 0, label: '', type: typeOf },
    });

    dialogRef.afterClosed().subscribe((result: TreeNode) => {
      this.sharedService.updateData(result);
    });
  }

}
