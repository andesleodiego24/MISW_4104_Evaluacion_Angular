/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCafeComponent } from './listar-cafe.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CafeService } from 'src/app/services/cafe.service';
import { By } from '@angular/platform-browser';

describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let cafeService: CafeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarCafeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    cafeService = new CafeService(httpClientSpy);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count list', () => {
    component.cafes =
    [{ id: 1, nombre: 'A', altura: 1, region: "amazonas",imagen:"image", sabor:"blend", tipo:"Blend" },
     { id: 2, nombre: 'B', altura: 2, region: "cundinamarca",imagen:"image", sabor:"blend", tipo:"Blend" },
     { id: 3, nombre: 'C', altura: 2, region: "amazonas",imagen:"image", sabor:"blend", tipo:"Blend" }];
    fixture.detectChanges();
    const trElements = fixture.debugElement.queryAll(By.css("tr"))
    expect(trElements.slice(1).length).toBe(3);
  });
});
