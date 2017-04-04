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

card.deletedText();
card.partialText();
card.fullText();

