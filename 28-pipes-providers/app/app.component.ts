import { Component, OnInit } from '@angular/core';

interface File {
  name: string,
  size: any,
  type: string
}

import { FileSizePipe } from './filesize.pipe';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div *ngFor="let file of mapped">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
  providers: [
    FileSizePipe
  ]
})
// We can use our custom pipes inside our components using providers property on the component
// ..we need to register our pipe inside providers so we can inject it inside a constructor, and we can use it before it hits the view so
// ..we do not have to use it on the template.
export class AppComponent implements OnInit {
  files: File[];
  mapped: File[];
  constructor(
    private fileSizePipe: FileSizePipe
  ) {}
  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb')
      };
    });
  }
}
