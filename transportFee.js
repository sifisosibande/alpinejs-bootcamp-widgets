function transportWidget() {
    return {
      shift: 'morning',
      get transport() {
        if (this.shift === 'morning') {
          return 'R20';
        } else if (this.shift === 'afternoon') {
          return 'R10';
        } else {
          return 'Free';
        }
      }
    };
  }
  