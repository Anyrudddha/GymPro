import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DialogOverviewExampleDialogComponent } from "./DialogOverviewExampleDialog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DialogOverviewExampleDialogComponent", () => {

  let fixture: ComponentFixture<DialogOverviewExampleDialogComponent>;
  let component: DialogOverviewExampleDialogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DialogOverviewExampleDialogComponent]
    });

    fixture = TestBed.createComponent(DialogOverviewExampleDialogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
