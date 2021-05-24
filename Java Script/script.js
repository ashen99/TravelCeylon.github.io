function colorbackground()
{
    var x=document.getElementById("selectid");
    var backgroundcolor=x.options[x.selectedIndex].value;
    document.body.style.backgroundColor=backgroundcolor;
}