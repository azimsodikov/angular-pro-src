import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { CreditCardDirective } from './credit-card.directive';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

@Component({
  template: `
    <input type="text" [value]="value" credit-card>
  `
})
class TestComponent {
  value = 123456;
}
/**
 *  In this lesson we are testing our credit card directive that will format the credit card number when use is typing. To do this we are creating the
 *  ..the actual component that can be used to test this particular directive.
 */
describe('CreditCardDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreditCardDirective,
        TestComponent
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should format the string with spaces', () => {
    const directive = el.query(By.directive(CreditCardDirective)).nativeElement; // In this method we are using selector by directive, to select the native
    // element's value;
    directive.value = '475123';
    directive.dispatchEvent(new Event('input')); // We are dispatching new event called input because in our directive, we are listenin for the input method,
    // ..to trigger the methods.
    expect(directive.value).toBe('4751 23');
    directive.value = '4751239812019201'; // Change the numbers again with different value;
    directive.dispatchEvent(new Event('input'));
    expect(directive.value).toBe('4751 2398 1201 9201');
  });

  it('should have a max-length of 16 characters', () => {
    const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
    directive.value = '4751239812019201998394282394823';
    directive.dispatchEvent(new Event('input'));
    expect(directive.value).toBe('4751 2398 1201 9201');
  });

});
