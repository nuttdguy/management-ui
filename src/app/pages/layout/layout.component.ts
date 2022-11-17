import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <section class="sticky top-0 left-0 z-50 h-20 w-full  bg-indigo-700">
      <app-top-bar class="flex items-center" role="banner"></app-top-bar>
    </section>
    <section class="top-80 left-0 flex min-h-[calc(100vh-80px)]">
      <article class="w-72 flex-initial uppercase">
        <app-side-bar></app-side-bar>
      </article>
      <article class="flex-auto">
        <app-dashboard></app-dashboard>
      </article>
    </section>
  `,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
