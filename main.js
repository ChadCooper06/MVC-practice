

class Model{
    constructor(){
        this.alerts = ["Do it again", "One more time", "NO TOUCHY!"]
    }
}

class View{
    constructor(){
        this.buttonClicked = document.getElementById("button")//.addEventListener("click, showMsg")
    }

    bindButtonClick(buttonClicked){
        this.button.addEventListener('click', showMsg)
    }
    
}

class Controller{
    constructor(model, view){
        this.m = model;
        this.v = view;
        this.v.bindButtonClick(this.buttonClicked)

    }

    async buttonClicked(e) {
        
    }
    /*
    function clickHandler() {
        for(buttonClicked === true){
            showMsg
        }
    }
    */
    function showMsg(alerts){
        for (i=0; i<alerts.length; i++){
            if([i] = !isNaN){
                return alerts
            }
        }
    }

}

const page = new Button(new Model(), new View())