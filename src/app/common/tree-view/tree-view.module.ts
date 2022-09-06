import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatModule } from "../mat.module";
import { TreeViewComponent } from "./tree-view.component";

@NgModule({
    declarations: [
        TreeViewComponent
    ],
    imports: [
        CommonModule,
        MatModule
    ],
    exports: [
        TreeViewComponent
    ]
})
export class TreeViewModule { }
