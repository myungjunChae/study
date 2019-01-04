describe("App.ClickCounter", () => {
  let counter;
  beforeEach(() => {
    counter = App.ClickCounter();
  });
  describe("getValue()", () => {
    it("초기값이 0인 카운터 값을 반환한다", () => {
      expect(counter.getValue()).toBe(0);
    });
  });
  describe("increase()", () => {
    it("카운터를 1 올린다", () => {
      const intialValue = counter.getValue();
      counter.increase();
      expect(counter.getValue()).toBe(intialValue + 1);
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
