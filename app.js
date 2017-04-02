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

function ClozeCard(text, cloze){
    if ( this instanceof ClozeCard)
    {
        this.text = text;
        this.cloze = cloze;
    }else{
        return new ClozeCard(text, cloze);
    }

};