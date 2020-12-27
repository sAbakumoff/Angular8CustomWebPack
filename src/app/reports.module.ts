import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReportviewComponent } from "./reportview/reportview.component";
import { ActiveReportsModule } from "@grapecity/activereports-angular";
import { ReportsRoutingModule } from "./reports-routing.module";

@NgModule({
  declarations: [ReportviewComponent],
  imports: [CommonModule, ActiveReportsModule, ReportsRoutingModule],
})
export class ReportsModule {}
