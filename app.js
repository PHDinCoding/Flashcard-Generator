var inquire = require('inquirer');


function BasicCard(front, back){

    if (this instanceof BasicCard) 
    {
        this.front = front;
        this.back = back;
    }else
    {
        return new BasicCard(front, back);
    }

    

};

// var card = new BasicCard("This is a test","test");


function ClozeCard(text, cloze)
{
    if ( this instanceof ClozeCard)
    {

        this.text = text;
        this.cloze = cloze;

        //Cloze card that returns the deleted part of the card w/ ...
        this.deletedText = function()
        {

            var deletedAnswer = this.text.replace(this.cloze, "...");
            
            return console.log(deletedAnswer);
        }

        //Close card that returns the partial part of the card.
        this.partialText = function()
        {
            
            var partialAnswer = text.replace(this.cloze, " ");

            return console.log(partialAnswer);
            
        }   

        this.fullText = function()
        {
            var fullTextAnswer = this.text;

            return console.log(fullTextAnswer);
        }
    }else
    {
        return new ClozeCard(text, cloze);
    }

};

BasicCard.prototype.printCard = function()
{
    console.log("\nFrontOfCard: " + this.front + "\nBackOfCard: " + this.back);
}

var card = ClozeCard("This is a test","test");

// card.deletedText();
// card.partialText();
// card.fullText();
var prepareCloze = function()
{
    console.log("\n");
    console.log("*****");
    inquire.prompt(
    [
        {
            type: 'input',
            name: 'entireText',
            message: 'Please input ENTIRE TEXT with answer in it.'
            
        },
        {
            type: 'input',
            name: 'clozeAnswer',
            message: 'Please enter ONLY the answer'
            
        }
    ]
).then(function(answer)
{
    console.log(answer.entireText);
    console.log(answer.clozeAnswer);
    var text = answer.entireText;
    var textAnswer = answer.clozeAnswer;



    var cloze = ClozeCard(text,textAnswer);
    cloze.fullText();
});
    console.log("\n");
    
};

inquire.prompt(
    [
        {
            type: 'list',
            name: 'chooseCard',
            message: 'Would you like to make a Basic card or a Cloze Card?',
            choices: ["Basic Card", "Cloze Card"]
        }
    ]
).then(function(answer)
{

    // console.log(answer.chooseCard+" chosen");

    switch(answer.chooseCard)
    {
        case "Basic Card":
        {
            
            console.log("This is from Basic switch");
            break;
        }
        case "Cloze Card":
        {
            console.log("This is from Cloze Switch");
            prepareCloze();
            break;
        }
        default:
        {
            console.log("What happened?");
        }
    }


});

