import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestService } from '../services/test.service';
import { TestComponent } from "./test.component";

fdescribe('my tests', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ TestComponent ],
          providers: [ TestService ]
        })
        .compileComponents();
      }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('component is defined', () => {
        expect(component).toBeDefined();
    });

    it('test testMethod value', () => {
        let compMethod = component.testMethod();
        expect(compMethod).toBe('some-value anover value')
    });

    it('test testNaN type', () => {
        let compMethod = component.testNaN();
        expect(compMethod).toBeFalsy()
    });

    it('test testNaN value', () => {
        let compMethod = component.testNaN();
        expect(compMethod).toBeNaN()
    });
});