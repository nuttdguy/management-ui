import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-register></app-register>

    <!-- <section class="sticky top-0 left-0 z-50 h-20 w-full  bg-indigo-700">
      <app-top-bar class="flex items-center" role="banner"></app-top-bar>
    </section>
    <section
      class="top-80 left-0 flex min-h-[calc(100vh-70px)] w-96 flex-initial"
    >
      <app-side-bar class="flex h-full uppercase"></app-side-bar>
      <app-dashboard class="flex w-full flex-auto items-start"></app-dashboard>
    </section> -->
  `,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
