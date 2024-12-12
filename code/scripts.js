var url = "."+window.location.pathname;
$('.vertical-menu a').each(function() {
  if ($(this).attr('href') == url) {
    $(this).addClass('active');
  }
});





//FUNCTIONS
function summer(arrayofstring){
  let ned = 0;
  for (var i = 0; i < arrayofstring.length; i++) { 
     var oneval = arrayofstring[i].split("-") ; 
     ned += parseFloat(oneval[2]);
     ned += parseFloat(oneval[1]) * 272;
     ned += parseFloat(oneval[0]) * 20 * 272;
  }
var ks = 0;
var ms = 0;
var fs = 0;
while(ned >= 20*272){
  ks++;
  ned -= 20*272;
}
while(ned >= 272){
  ms++;
  ned -= 272;
}
fs = ned;
  return ks+'-'+ms+'-'+fs;
}
function removefromarray(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}






//khewat khasras
$("#khewadpress").click(function(){
    $("#khewadoudpu").text("");
    $.ajax({
        type: "GET",
        url: "./data/khewats.json",
        data: 'void',
        cache: false,
        success: function(data){
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    if(key == $("#khewadinpu").val() ){
                        var arrr = data[key].khasras;
                        for (var i = 0; i < arrr.length; i++) { $("#khewadoudpu").append( "<span>"+arrr[i]+"</span>"    );    }
                    }
                }
            }
        }
      });
});
$("#khasrapress").click(function(){
  $("#khewadoudpu").text("");
  $.ajax({
      type: "GET",
      url: "./data/khewats.json",
      data: 'void',
      cache: false,
      success: function(data){
          for (var key in data) {
              if (data.hasOwnProperty(key)) {
                  if(  data[key].khasras.includes(  parseInt( $("#khewadinpu").val())  ) ){
                    $("#khewadoudpu").text(key);
                  }
              }
          }
      }
    });
});








//land adder
$("#jammahzameen").click(function(){
  addrowcalculate();
});

$('#sumknal').keyup(function(e){
  if(e.keyCode == 13)
  {
    $('#summarla').focus();
  }
});
$('#summarla').keyup(function(e){
  if(e.keyCode == 13)
  {
    $('#sumfoot').focus();
  }
});
$('#sumfoot').keyup(function(e){
  if(e.keyCode == 13)
  {
    addrowcalculate();
  }
});
function addrowcalculate(){
$('#sumknal').focus();
var k = $('#sumknal').val();
var m = $('#summarla').val();
var f = $('#sumfoot').val();
if(k == ''){k = 0;}
if(m == ''){m = 0;}
if(f == ''){f = 0;}
if(k+m+f != 0){
  $('#summerland tbody').append("<tr><td class='ka'>"+k+"</td><td class='ma'>"+m+"</td><td class='fa'>"+f+"</td></tr>");
}
$('#sumknal').val('');
$('#summarla').val('');
$('#sumfoot').val('');

let ned = 0;
$('.fa').each(function(i, obj) {
  ned += parseFloat($(this).text());
});
$('.ma').each(function(i, obj) {
  ned += parseFloat($(this).text()) * 272;
});
$('.ka').each(function(i, obj) {
  ned += parseFloat($(this).text()) * 20 * 272;
});

var ks = 0;
var ms = 0;
var fs = 0;
while(ned >= 20*272){
  ks++;
  ned -= 20*272;
}
while(ned >= 272){
  ms++;
  ned -= 272;
}
fs = ned;
$('#nedkanal').text(ks);
$('#nedmarla').text(ms);
$('#nedfood').text(fs);
}





/* shajra nasb */
if(document.getElementById("map") !== null){
var map = L.map('map', {
  attributionControl: false,
  center: [40.75, -74.2],
  zoom: 13
});

var imageUrl = './data/img/map/shajra-nasb-g.svg',
  imageBounds = [
    [40.712216, -74.22655],
    [40.773941, -74.12544]
  ];
L.imageOverlay(imageUrl, imageBounds).addTo(map);
}




$.ajax({
  type: "GET",
  url: "./data/afrad.json",
  data: 'void',
  cache: false,
  success: function(data){
      for (var key in data) {
          if (data.hasOwnProperty(key)) {
            $('#persondetail').append("<option value='"+key+"'>"+data[key].name+"</option>");
          }
      }
  }
});

$('#persondetail').change(function() { 
  $.ajax({
    type: "GET",
    url: "./data/afrad.json",
    data: 'void',
    cache: false,
    success: function(data){
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
              if(key == $('#persondetail').val() ){
                  $('#personresul').html("<h1>"+data[key].name+"</h1><h4>ID Card: "+data[key].cnic+"</h4><h4>Death: "+data[key].death+"</h4>");
                  for (var imi = 0; imi < data[key].pics.length; ++imi) {
                    $('#personresul').append("<img src='./data/img/people/"+data[key].pics[imi]+"'/>");
                  }
              }
            }
        }
    }
  });
 });










/*land map */
$(".buttonsalia").click(function(){
  var oldwid = $('#lajpgland').width();
  oldwid += 50;
  $('#lajpgland, #Layer_1').width(oldwid);
});
$(".buttonsalib").click(function(){
  var oldwid = $('#lajpgland').width();
  oldwid -= 50;
  $('#lajpgland, #Layer_1').width(oldwid);
});
$(".st0").click(function(){
  var landid = $(this).attr('id')
  //8
  $.ajax({
    type: "GET",
    url: "./data/khasras.json",
    data: 'void',
    cache: false,
    success: function(data){
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
              if(key == landid ){
                  alert("Khasra: "+data[key].khasra+"\nSize: "+data[key].size+"\nNote: "+data[key].note+"\nID: "+key);
              }
            }
        }
    }
  });
  //8
});









/* front page*/
$.ajax({
  type: "GET",
  url: "./data/khewats.json",
  data: 'void',
  cache: false,
  success: function(data){
    var html = "";
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        html += "<span class='green inlinespacedspan'>"+key+"</span> ";
      }
    }
    $('#khewatlist').append(html);

  }
});


$.ajax({
  type: "GET",
  url: "./data/data.json",
  data: 'void',
  cache: false,
  success: function(data){
    var htmlb = "";
    for (var i = 0; i < data.ourqabzakhasras.length; i++) { 
          htmlb += "<span class='green inlinespacedspan'>"+data.ourqabzakhasras[i]+"</span> ";
    }
    $('#khasralist').html(htmlb);
  }
});


$.ajax({
  type: "GET",
  url: "./data/khewats.json",
  data: 'void',
  cache: false,
  success: function(data){
      var allkhas = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
             allkhas = allkhas.concat(data[key].khasras)
        }
    }
    //
    $.ajax({
      type: "GET",
      url: "./data/khasras.json",
      data: 'void',
      cache: false,
      success: function(data){
        var trackedkhasras = [];
          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              trackedkhasras.push( parseInt(data[key].khasra) ); 
            }
         }
         //.
         for (var i = 0; i < allkhas.length; i++) {  
          if(  trackedkhasras.includes(   allkhas[i]  ) ){
            $('#khasralistfull').append("<span class='green inlinespacedspan'>"+allkhas[i]+"</span> ");
          } 
          else{
            $('#khasralistfull').append("<span class='red inlinespacedspan'>"+allkhas[i]+"</span> ");
          }
        }
         //.
      }
    });
    //
  }
});


























/* khewad pic page*/

$("#combiner").click(function(){
  var arkhwahish = [];
  var arkabza = [];
  var armalkiat = [];


  $('#filllakhewats  tr').each(function(i, obj) {
    arkhwahish.push(   $(this).children(':nth-child(1)').text()      );  
    arkabza.push(     $(this).children(':nth-child(3)').text()    );   
    armalkiat.push(    $(this).children(':nth-child(2)').text()     );  
  });

$('#wonk').text(  summer(arkhwahish) );
$('#wonq').text(  summer(arkabza) );
$('#wonm').text(  summer(armalkiat) );
  
});



$.ajax({
  type: "GET",
  url: "./data/khewats.json",
  data: 'void',
  cache: false,
  success: function(data){

    $.ajax({
      type: "GET",
      url: "./data/data.json",
      data: 'void',
      cache: false,
      success: function(datab){
        var laarzqabza = datab.ourqabzakhasras;

        var laadreama = datab.dreamkhasras;

        $.ajax({
          type: "GET",
          url: "./data/khasras.json",
          data: 'void',
          cache: false,
          success: function(dadak){

    
    var html = "";
    for (var key in data) {
      if (data.hasOwnProperty(key)) {

        //qabza calculation
        var qabzaop = [];
        var kop = "";
        for (var i = 0; i < data[key].khasras.length; i++) { 
           if( laarzqabza.includes( data[key].khasras[i] ) ) {  
            for (var keyv in dadak) {
              if (dadak.hasOwnProperty(keyv)) {
                if(dadak[keyv].khasra == data[key].khasras[i] ){
                  qabzaop.push(dadak[keyv].size);
                }
              }
            }
            kop += data[key].khasras[i] + ", ";
            laarzqabza = removefromarray(laarzqabza, data[key].khasras[i]);
          }   
        }
        var qabzaops = "<span data-toggle='tooltip' data-html='true' title='"+kop+"'>" + summer(qabzaop) + "</span>";
        //qabza calculation end

        //khawahish calculation
        var khwaop = [];
        var dop = "";
        for (var i = 0; i < data[key].khasras.length; i++) { 
           if( laadreama.includes( data[key].khasras[i] ) ) {  
            for (var keyv in dadak) {
              if (dadak.hasOwnProperty(keyv)) {
                if(dadak[keyv].khasra == data[key].khasras[i] ){
                  khwaop.push(dadak[keyv].size);
                }
              }
            }
            dop += data[key].khasras[i] + ", ";
            laadreama = removefromarray(laadreama, data[key].khasras[i]);
          }   
        }
        var khwahish = "<span data-toggle='tooltip' data-html='true' title='"+dop+"'>" + summer(khwaop) + "</span>";
        //khwahish calculation end

        html += "<tr><td>"+khwahish+"</td><td>"+data[key].malkiat+"</td><td>"+qabzaops+"</td><td>"+data[key].totalsize+"</td><td><a target='_blank' href='"+data[key].fard+"'>"+key+"</a></td></tr>";
      }
    }
    $('#filllakhewats').append(html);
    $('[data-toggle="tooltip"]').tooltip()

    console.log("These are not found khasras:", laarzqabza, laadreama);


  } });//III success

  } });//sec success


  }  });//firs success
