var App = App || {};

App.ClickCounter = _data => {
  if (!_data) throw Error("noData");

  const data = _data;

  //주입 형태로 변환했기 때문에, 객체를 사용하여 복사하여야함
  data.value = data.value || 0;

  return {
    getValue() {
      return data.value;
    },
    count() {
      data.value++;
    },
    setCountFn(fn) {
      this.count = () => (data.value = fn(data.value));
      return this;
    }
  };
};
