//v JS netu primitivnix i ne primitivnix tipov dannix vse tipi dannix xranatsa po sillke

const OS = "linux";

class AbstractButton {
  #elemnet;

  constructor() {
    if (new.target === AbstractButton)
      throw new Error("Can't create instance of abstract class");

    const btn = document.createElement("button");

    this.#elemnet = btn;
  }
  get element() {
    return this.#elemnet;
  }
}

class windowsButton extends AbstractButton {
  constructor() {
    super();
    this.element.textContent = "Windows button";
  }
  click() {
    console.log("You cliked " + this.textContent);
  }
}
class MacButton extends AbstractButton {
  constructor() {
    super();
    this.element.textContent = "Mac button";
  }
  click() {
    console.log("You cliked " + this.textContent);
  }
}
class LinuxButton extends AbstractButton {
  constructor() {
    super();
    this.element.textContent = "Linux button";
  }
  click() {
    console.log("You cliked " + this.textContent);
  }
}

class ButtonFactory {
  static createButton() {
    switch (OS) {
      case "windows":
        return new windowsButton();
      case "mac":
        return new MacButton();
      case "linux":
        return new LinuxButton();
      default:
        throw new Error("Unknow OS");
    }
  }
}

const btn = ButtonFactory.createButton();
btn.element.addEventListener("click", btn.click);

document.body.append(btn.element);
