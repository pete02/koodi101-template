
function chart(time,u,s){
    var chart = c3.generate({
        data: {
            columns: [
                u,
                s,
                
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: time
            }
        },
        zoom: {
            enabled: true
        }




});
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:9000/api/insensors", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpGeti(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:9000/api/sensors", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function sisä(){
    var temp=["in"];
    var i=0;
    var response=httpGet();
    response=JSON.parse(response);
    const sisä=response.results;
    while (i<sisä.length){
        moi=sisä[i];
        temp.push(moi.temperature)
        i++
    }
    return temp
}


function ulko(){
    var temp=["out"];
    var i=0;
    var response=httpGeti();
    response=JSON.parse(response);
    const lämpö=response.results;;
    while (i<lämpö.length){
        moi=lämpö[i];
        temp.push(moi.temperature)
        i++
    }
    return temp
}
function sisätime(){
    var time=[];
    var i=0;
    var response=httpGet();
    response=JSON.parse(response);
    const aika=response.results;;
    console.log(aika.length)
    console.log(i)
    while (i<aika.length){
        moi=aika[i];
        hei=moi.timestamp;
        hei=hei.split("T")
        hei=hei[0]+"_"+hei[1]
        hei=hei.split(".")
        hei=JSON.stringify(hei[0]);
        time.push(hei)
        i++
        console.log(hei)
    }
    return time
}

function uklotime(){
    var time=[];
    var i=0;
    var response=httpGeti();
    response=JSON.parse(response);
    const aika=response.results;;
    while (i<aika.length){
        moi=aika[i];
        hei=moi.timestamp;
        hei=hei.split("T")
        hei=hei[0]+"_"+hei[1]
        hei=hei.split(".")
        hei=JSON.stringify(hei[0]);
        time.push(hei)
        i++
    }
    return time
}
function koko(){
    moi=ulko()
    hei=sisä()
    if (moi.length > hei.length){
        time=uklotime();
        console.log(koko)
    }else{
        time=sisätime();
        console.log("epä")
    }
    chart(time,ulko(),sisä())

}
koko()



