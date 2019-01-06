describe("App.ClickCountView 모듈의", () => {
  let updateEl, triggerEl, clickCounter, view;
  beforeEach(() => {
    const data = { value: 0 };
    updateEl = document.createElement("span");
    triggerEl = document.createElement("button");
    clickCounter = App.ClickCounter(data);
    view = App.ClickCounterView(clickCounter, { updateEl, triggerEl });
  });

  it("clickCounter를 주입하지 않으면 에러를 던진다", () => {
    const actual = () => App.ClickCounterView(null, { updateEl, triggerEl });
    expect(actual).toThrowError();
  });

  it("updateEl를 주입하지 않으면 에러를 던진다", () => {
    const actual = () => App.ClickCounterView(clickCounter, { triggerEl });
    expect(actual).toThrowError();
  });

  describe("updateView()는", () => {
    it("ClickCounter의 getValue() 값을 출력한다.", () => {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    });
  });

  describe("increaseAndUpdateView()는", () => {
    it("ClickCounter의 increase를 실행한다", () => {
      spyOn(clickCounter, "count");
      view.increaseAndUpdateView();
      expect(clickCounter.count).toHaveBeenCalled();
    });
    it("updateView를 실행한다", () => {
      spyOn(view, "updateView");
      view.increaseAndUpdateView();
      expect(view.updateView).toHaveBeenCalled();
    });
  });

  it("클릭 이벤트가 발생하면 increaseAndUpdateView를 실행한다", () => {
    spyOn(view, "increaseAndUpdateView");
    triggerEl.click();
    expect(view.increaseAndUpdateView).toHaveBeenCalled();
  });
});

/*
jasmine framework 내부에는 toThrowError라는 함수가 존재함

expect(function() {throw new Error()}).toThrowError()

테스트 더블
: 단위 테스트 패턴으로, 테스트하기 곤란한 컴포넌트를 대체하여 테스트하는 것 (행동만 흉내내는 것)

-> spyOn(), createSpy()

example
spyOn(MyApp, 'foo');
bar();
expect(MyApp.foo).toHaveBeenCalled();
*/
