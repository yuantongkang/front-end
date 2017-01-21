function F()
{
    function binder(x)
    {
        return function ()
        {

            return x;
        };
    }
    var arr = [], i;
    for (i = 0; i < 3; i++) {
        arr[i] = binder(i);
    }
    return arr;
}
var a = 12;
