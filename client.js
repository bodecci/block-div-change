let counter = 0;

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ loaded');
    
    $('#generateBttn').on('click', function (){
        counter++;
        let displayCounter = $('.container');
        let outputString = `<div class="ketchup">`;
        outputString += `<p id="pTag">Counter is: ${counter}</p>`;
        outputString += `<button type="button" id="swapBtn"
                        class="btn btn-success">Swap</button>
                        <button type="button" id="deleteBtn"
                        class="btn btn-danger">Delete</button>`;
        outputString += `</div><br>`;
        displayCounter.append(outputString);
    });

    $('.container').on('click', '#deleteBtn', function () {
        $(this).parent().remove();
    });
}