var App = App || {};

App.ClickCounterView = (clickCounter, options) => {
  if (!clickCounter) throw Error(App.ClickCounterView.messages.noClickCounter);
  if (!options.updateEl) throw Error(App.ClickCounterView.messages.noUpdateEl);

  const view = {
    updateView() {
      options.updateEl.innerHTML = clickCounter.getValue();
    },
    increaseAndUpdateView() {
      clickCounter.count();
      this.updateView();
    }
  };

  options.triggerEl.addEventListener("click", () => {
    view.increaseAndUpdateView();
  });

  return view;
};

App.ClickCounterView.messages = {
  noClickCounter: "clickCounter를 주입해야합니다.",
  noUpdateEl: "updateEl를 주입해야합니다.",
  noTriggerEl: "triggerEl를 주입해야합니다."
};
