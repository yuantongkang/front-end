function Hero()
{
    this.name = name;
    this.occupation = 'ninja';
    this.whoAreYou = function ()
    {
        return "I'am" +
            this.name +
            "and I'm a " +
            this.occupation;
    }
}