import { Component, OnInit, ViewChild } from "@angular/core";
import { ViewerComponent } from "@grapecity/activereports-angular";

@Component({
  selector: "app-reportview",
  templateUrl: "./reportview.component.html",
  styleUrls: ["./reportview.component.css"],
})
export class ReportviewComponent implements OnInit {
  @ViewChild(ViewerComponent, { static: false }) reportViewer: ViewerComponent;
  constructor() {}

  ngOnInit() {}

  onViewerInit() {
    this.reportViewer.open("assets/report.rdlx-json");
  }
}
