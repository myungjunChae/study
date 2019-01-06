describe("App.ClickCounter", () => {
  let counter, data;

  beforeEach(() => {
    data = { value: 0 };
    counter = App.ClickCounter(data);
  });

  it("초기값을 주입하지 않으면 에러를 던진다", () => {
    const actual = () => (counter = App.ClickCounter());
    expect(actual).toThrowError();
  });

  describe("getValue()", () => {
    it("초기값이 0인 카운터 값을 반환한다", () => {
      expect(counter.getValue()).toBe(0);
    });
  });

  describe("count()", () => {
    it("카운터를 1 올린다", () => {
      const intialValue = counter.getValue();
      counter.count();
      expect(counter.getValue()).toBe(intialValue + 1);
    });
  });

  describe("setCountFn()", () => {
    it("인자로 함수를 넘기면 count()를 대체한다", () => {
      const add2 = value => value + 2;
      const expected = add2(data.value);

      counter.setCountFn(add2).count();

      const actual = counter.getValue();
      expect(actual).toBe(expected);
    });
  });
});

/*
describe 
- 테스트할 모듈과 메소드 정의
- 중첩 가능

it
- 테스트 케이스를 만드는 함수

beforeEach
- it보다 먼저 실행되는 함수 // 준비과정에서 많이 사용되는 듯하다.

afterEach
- it보다 뒤에 실행되는 함수
*/

/*
TDD의 3단계
- 실패하는 코드를 만든다 (적색 단계)
- 돌아가는 코드를 만든다 (녹색 단계)
- 리팩토링 (리팩터 단계)
*/
