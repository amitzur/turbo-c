import { observable, computed, action } from 'mobx';

class App {
  @observable navItems = [];

  constructor(initialData) {
    this.setState(initialData);
  }

  @action setState = ({
    navItems = this.navItems,
  }) => {
    this.navItems = navItems;
  };
}

export default App;