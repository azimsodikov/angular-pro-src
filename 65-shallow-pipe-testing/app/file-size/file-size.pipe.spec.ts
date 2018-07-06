import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment( // We are setting up our test environment by using angulars special classes and methods.
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
  // Here we are testing this particular pipe in an action inside a component using angular TestBed; This testing method is called shallow testing;
  describe('Shallow FileSizePipe test', () => {

    @Component({ // We are creating this component on the fly to emulate the real usage of this particular pipe.
      template: `
        Size: {{ size | filesize:suffix }}
      `
    })
    class TestComponent {
      suffix;
      size = 123456789;
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>; // Component fixture helps us to access changes and debug as well as accessing the native element
    let el: HTMLElement;
    // We are creating this variables to later initialize it with actual component instances to be able to create the module simulate using the pipe.

    beforeEach(() => {
      TestBed.configureTestingModule({ // With this beforeEach we are basically create the component and initialize it with correct data;
        declarations: [
          FileSizePipe,
          TestComponent
        ]
      });
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('should convert bytes to megabytes', () => {
      fixture.detectChanges();
      console.log(el); // We can log the template element
      expect(el.textContent).toContain('Size: 117.74MB');
      component.size = 1029281; // We are changing the the value of the size property that we created above to test it with different value;
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 0.98MB');
    });

    it('should use the default extension when not supplied', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 117.74MB');
    });

    it('should override the extension when supplied', () => {
      component.suffix = 'myExt';
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 117.74myExt');
    });

  });

  // This test is isolated from the angular, we are just testing whether class methods is working;
  describe('Isolate FileSizePipe test', () => {

    const pipe = new FileSizePipe();

    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should override the extension when supplied', () => {
      expect(pipe.transform(123456789, 'myExt')).toBe('117.74myExt');
      expect(pipe.transform(987654321, 'anotherExt')).toBe('941.90anotherExt');
    });
  });

});
