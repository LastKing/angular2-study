/**
 * Created by Rain on 2016/10/20.
 */
import {Component, Renderer, ElementRef, OnInit, HostBinding} from'@angular/core';

const Collapsible_Template = `
  <ul class="collapsible" data-collapsible="accordion">
    <li (click)="extend()">
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
  </ul>`;

@Component({
  selector: 'collapsible',
  template: Collapsible_Template
})
export class CollapsibleComponent implements OnInit {
  @HostBinding('class.in')
  @HostBinding('attr.aria-expanded')
  public isExpanded: boolean = true;

  @HostBinding('style.display')
  public display: string;

  public _el: ElementRef;
  public _renderer: Renderer;

  public constructor(_el: ElementRef, _renderer: Renderer) {
    this._el = _el;
    console.log(_el);
    this._renderer = _renderer;
    console.log(_renderer);
  }

  public ngOnInit(): void {
    this.isExpanded = true;
    // this._renderer.setElementClass(this._el.nativeElement.querySelectorAll('.collapsible-header'), 'active',false);
    this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
  };

  public extend(): void {
    console.log('tset');
  }

}
