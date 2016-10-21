/**
 * Created by Rain on 2016/10/21.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CollapsibleModule} from "../simpleng/collapsible/collapsible.module";
import {HighlightModule} from "../simpleng/highlight/highlight.module";
import {UnlessModule} from "../simpleng/unless/unless.module";

import {TestComponent} from "./test.coponent";

@NgModule({
  imports: [
    CommonModule,
    CollapsibleModule,
    HighlightModule,
    UnlessModule
  ],
  exports: [TestComponent]
})
export class TestModule {
}