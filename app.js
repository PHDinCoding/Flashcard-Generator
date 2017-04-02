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

var card = new BasicCard("This is a test","test");


function ClozeCard(text, cloze)
{
    if ( this instanceof ClozeCard)
    {

        this.text = text;
        this.cloze = cloze;

        //Cloze card that returns the deleted part of the card w/ ...
        this.clozeDeleted = function()
        {

            var answer = text.replace(cloze, "...");
            
            return console.log(answer);
        }

        //Close card that returns the partial part of the card.
        this.partialCloze = function()
        {
            

            
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

var card = new BasicCard("This is a test","test");

console.log(card);

