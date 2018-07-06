import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement } from '@angular/core';
import { StockCounterComponent } from './stock-counter.component';
import { By } from '@angular/platform-browser';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('StockCounterComponent', () => {

  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement; // It lets us to interact with the DOM nodes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockCounterComponent
      ]
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement; //

    component.value = 0;
  });

  it('should increment when the + button is clicked', () => {
    el.query(By.css('button:first-child')).triggerEventHandler('click', null); // 'By' lets us select the DOM elements by using different methods
    // one of them is a css method, it lets us to select by the css method, after selecting we can trigger that button by using triggerEventHandler()
    // ..method and pass the event that we want to trigger;
    fixture.detectChanges(); // Once the event is triggered, we are gonna listen for the changes;
    expect(component.value).toBe(1);
    expect(el.query(By.css('p')).nativeElement.textContent).toBe('1'); // We can also test the template nodes by its value
  });

  it('should increment the value when the up arrow is pressed', () => {
    // This is how we can test the keyboard events using provided methods. To do that we need to create our own custom event object and assigning
    // the ArrowUp event basically to mock our keyboard event. So when we triger the event we are gonna pass the custom event to be triggered and check
    // the value whether it is expected value;
    const event = new Event('KeyboardEvent') as any;
    event.code = 'ArrowUp'; // We simply mocking the ArrowUp event, since our object is expecting ArrowUp or ArrowDown to call the functions.
    el.query(By.css('.stock-counter > div > div')).triggerEventHandler('keydown', event);
    fixture.detectChanges();
    expect(component.value).toBe(1);
  });

});
