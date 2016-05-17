# Progress Usage
由于progress标签属于html自带标签，所以此控件加入了前缀 `<l-progress></l-progress>`
```typescript
  @Component({
    selector: "app",
    directives: [ProgressComponent],
    template: `
      <l-progress class="teal" [label]="'Uploading file'" [percent]="percent" [text]="''"></l-progress>
      `
  })

  class AppComponent {
    private percent: number = 0;
    private timmer: any;
    constructor() {
      var self = this;
      self.timmer = setInterval(function () {
        self.percent += parseInt(Math.random() * 20 + '');
        if (self.percent > 100) {
          clearInterval(self.timmer);
        }
      }, 500)
    }
  }
```

# Options
- percent: 必选，进度（0-100）
- text: 可选，progress显示文字（50%、70%......）
- label: 可选，标签（显示在porgress下方）

# Tips
可以通过 `l-progress` 控件上的class设置progress的 `color`、`size` 等，具体值参见<a href="http://semantic-ui.com/modules/progress.html">Semantic-UI Progress</a>