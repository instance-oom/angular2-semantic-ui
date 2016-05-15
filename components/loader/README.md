# Loader Usage

```typescript
  @Component({
    selector: "app",
    directives: [LoaderComponent],
    template: `
      <div (click)="toggleLoader()">
        <loader [active]="active" [loaderText]="loaderText" [loaderSize]="loaderSize"></loader>
      </div>
      `
  })

  class AppComponent {
    private active: boolean;
    private loaderText: string;
    private loaderSize: string;
    constructor() {
      this.active = false;
      this.loaderText = "Login...";
      this.loaderSize = "large"; 
    }

    toggleLoader() {
      this.active = !this.active;
    }
  }
```

# Options
- active: 必选，控制Loader显隐
- loaderText: 可选，提示文字
- loaderSize: 可选，Loader尺寸[mini | small | medium | large]