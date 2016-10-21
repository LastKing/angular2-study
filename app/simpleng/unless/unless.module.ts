/**
 * Created by Rain on 2016/10/21.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UnlessDirective} from "./unless.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [UnlessDirective],
  exports: [UnlessDirective]
})
export class UnlessModule {
}