var back = "#152238";
var front = "#bfc9ca";
var fronthov = "#d5dbdb";


function activate(self){
    var navs = ["about", "personal", "blog", "projects"]
    var idele = self.id;
    var ind = navs.indexOf(idele);
    var infarr = ["aboutinf", "personalinf", "bloginf", "projectsinf"]
    if (ind != -1) {
        navs.splice(ind,1);
        infarr.splice(ind,1);
    }
    console.log(navs)
    for(i=0; i < navs.length; i++){
        console.log(navs[i])
        var box = document.getElementById(navs[i]);
        var txt = document.getElementById(navs[i] + "txt");
        box.style.backgroundColor = "transparent";
        txt.style.color = front;
    }
    abox = document.getElementById(idele);
    atxt = document.getElementById(idele+"txt")
    abox.style.backgroundColor = front;
    atxt.style.color = back;
    var inf_state = document.getElementById("inf") 
    console.log(inf_state.style.display);
    if (inf_state.style.display == "none" || inf_state.style.display == ""){
        inf_state.style.display = "block";
    }
    for(i = 0; i < infarr.length; i++){
        console.log(infarr[i]);
        disp = document.getElementById(infarr[i]);
        disp.style.display = "none";
    }
    document.getElementById(idele + "inf").style.display = "flex";

}