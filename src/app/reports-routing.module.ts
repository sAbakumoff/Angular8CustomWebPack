import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReportviewComponent } from "./reportview/reportview.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ReportviewComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
