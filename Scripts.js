    // window.history.pushState('page2', 'Title', '/Index.html?p1=kebappi');
    const hakukenttä = document.getElementById("hakukenttä")
    const hakukenttä2 = document.getElementById("hakukenttä2")
    const hakukenttä3 = document.getElementById("hakukenttä3")
    const hakukenttä4 = document.getElementById("hakukenttä4")
    const hakukenttä5 = document.getElementById("hakukenttä5")
    const hakukenttä6 = document.getElementById("hakukenttä6")
    const hakukenttä7 = document.getElementById("hakukenttä7")

    data = {
    perk1:"",
    perk2:"",
    perk3:"",
    perk4:"",
    item: "",
    addon:"",
    addon2:""
    };

    function sleep (ms) {
        return new Promise(res => setTimeout(res,ms));
      }

      async function alku() {
          sleep(2000);
          var url_string = window.location;
          var url = new URL(url_string);
        data.perk1 = url.searchParams.get("p1");
        upd("perk1", data.perk1)
        data.perk2 = url.searchParams.get("p2");
        upd("perk2", data.perk2)
        data.perk3 = url.searchParams.get("p3");
        upd("perk3", data.perk3)
        data.perk4 = url.searchParams.get("p4");
        upd("perk4", data.perk4)
        data.item = url.searchParams.get("i");
        upd("item", data.item)
        data.addon = url.searchParams.get("a1");
        upd("addon", data.addon)
        data.addon2 = url.searchParams.get("a2");
        upd("addon2", data.addon2)
      }

      window.onload = alku();

hakukenttä.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        haku("perk1", hakukenttä);
    }
});
hakukenttä2.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        haku("perk2", hakukenttä2);
    }
});
hakukenttä3.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        haku("perk3", hakukenttä3);
    }
});
hakukenttä4.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        haku("perk4", hakukenttä4);
    }
});
hakukenttä5.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        haku("item", hakukenttä5);
    }
});

hakukenttä6.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        haku("addon", hakukenttä6);
    }
});

hakukenttä7.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        haku("addon2", hakukenttä7);
    }
});


function validate(v) {
    exception = false;
    try{
        if (v == "") throw "tyhjä";
        if (v.length < 3) throw "liian lyhyt!"
    }
    catch (err) {
        console.log(err);
        return 0;
        exception = true;
    }
    if(!exception){
        return 1;
   } 
}

function append(input) {
    window.history.pushState('State', 'Title', '/Index.html?p1='+input.perk1+'&p2='+input.perk2+'&p3='+input.perk3+'&p4='+input.perk4+'&i='+input.item+'&a1='+input.addon+'&a2='+input.addon2);
}

function haku(juttu, kenttänum) {
    hakutulos = kenttänum.value;
    valid = validate(hakutulos);
    if (valid == 1) { dir = document.getElementById(juttu).src = "Img/Perkit/"+hakutulos+".png";
    data[juttu] = hakutulos;
    append(data)
    console.log(valid)
    }
    else return;

    console.log(dir);
}

function upd(juttu, hakutulos) {
    if (hakutulos==null) document.getElementById(juttu).src = "Img/Placeholder_item.png";
    else if (hakutulos=="null") document.getElementById(juttu).src = "Img/Placeholder_item.png";
    else { document.getElementById(juttu).src = "Img/Perkit/"+hakutulos+".png" };
}