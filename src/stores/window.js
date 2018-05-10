import { observable, computed, action } from 'mobx';

export default class Window {
  @observable name;
  @observable top;
  @observable left;
  @observable height;
  @observable width;
  @observable zIndex;
  @observable onClose;
  @observable onDrag;
  @observable onMouseDown;
  @observable content;
  @observable resize;
  @observable dragging;
  @observable deltaX;
  @observable deltaY;
  @observable startHeight;
  @observable startWidth;

  constructor(data = {}) {
    this.setState(data);
  }

  @action setState = (data) => {
    Object.assign(this, data);
  };

  @action onStartDrag = ({ pageX, pageY }) => {
    this.setState({
      dragging: true,
      deltaX: pageX - this.left,
      deltaY: pageY - this.top,
      startHeight: this.height,
      startWidth: this.width
    });
  };

  @computed get key() {
    return this.name;
  }
}