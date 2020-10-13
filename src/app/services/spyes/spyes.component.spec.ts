import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyesComponent } from './spyes.component';
import { TestService } from '../services/test.service';

describe('SpyesComponent', () => {
  let component: SpyesComponent;
  let fixture: ComponentFixture<SpyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpyesComponent],
      providers: [TestService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('without test spy', () => {
    const res = component.testMethod();
    expect(res).toEqual('some-value anover value');
  });

  it('with test spy', () => {
    spyOn((<any>component).service, 'getValue');
    const res = component.testMethod();
    expect(res).toEqual('undefined anover value');
    expect((<any>component).service.getValue).toHaveBeenCalled();
  });
});
