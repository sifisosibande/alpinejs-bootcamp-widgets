function greetingWidget() {
    return {
        name: '',
        greeting: '',
        greet() {
            this.greeting = greet(this.name);
            setTimeout(() => {
                this.greeting = '';
            }, 3000); // 3000 milliseconds = 3 seconds
        }
    };
}

function greet(name) {
    return "Hello, " + name;
}


  
  
  
  
  
  