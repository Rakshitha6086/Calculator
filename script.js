let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {

	//Onclick the button value is loaded
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){

			//Clears the whole display box at a time
            case 'AC':
                display.innerText = '';
                break;
			
			//Evaluates the numbers using given operator
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;

			//Clears the display box one by one with each click
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;

			//Calculates the squareroot of given number
			case 'sqrt':
				display.innerText = eval(Math.sqrt(display.innerText));
				break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});