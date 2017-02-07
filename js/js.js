// global variables
comeFromMap = 0; //if this variable is equal to 1, #btns should be shown otherwise it's hidden
var noOrFAid; // this variable says what to do when DONE (in panel.php) is pressed.
var leftArrowVisibility = 0; //this var determines where this icon should be shown and what should be done based on that
var tmp = 'home'; // possible values for this var are: home/isLive/WhatHapn/
var LandRiverSeaSky = 'land';
var Wname;
var imgSource;
var firstAidAdvice = "<p><b>Caution!</b> This animal may be dangerous.<br>Stay calm, speak softly and move slowly to avoid distress to the animal.<br>Do not approach the animal or attempt to catch it - chasing it may result in a worse injury and unnecessary stress for the animal. Secure the area and try to prevent pets or other people from approaching the injured animal.<br>Call a licenced wildlife shelter to capture the animal or call DELWP on 136 185 to be put in touch with a Wildlife Officer.<br>In the event of a traffic collision or an animal on the road, the police can also be contacted on 000 for assistance. Check the area to make sure a pouch young has not been thrown out during the collision. dddd dddddddddddddddd ddddddddddddddddd dddddddd d  ddddddddddd dddddddddd ddddd d ddddddd ddddd dddddddd dddddd ddddddd dddd dddddddd ddddddd ddddddd ddddddddd ddddddd dddd dddddddddddddddd ddddddddddddddddd dddddddd d  ddddddddddd dddddddddd ddddd d ddddddd ddddd dddddddd dddddd ddddddd dddd dddddddd ddddddd ddddddd ddddddddd ddddddddddd dddddddddddddddd ddddddddddddddddd dddddddd d  ddddddddddd dddddddddd ddddd d ddddddd ddddd dddddddd dddddd ddddddd dddd dddddddd ddddddd ddddddd ddddddddd ddddddddddd dddddddddddddddd ddddddddddddddddd dddddddd d  ddddddddddd dddddddddd ddddd d ddddddd ddddd dddddddd dddddd ddddddd dddd dddddddd ddddddd ddddddd ddddddddd ddddddddddd dddddddddddddddd ddddddddddddddddd dddddddd d  ddddddddddd dddddddddd ddddd d ddddddd ddddd dddddddd dddddd ddddddd dddd dddddddd ddddddd ddddddd ddddddddd ddddddddddd dddddddddddddddd ddddddddddddddddd dddddddd d  ddddddddddd dddddddddd ddddd d ddddddd ddddd dddddddd dddddd ddddddd dddd dddddddd ddddddd ddddddd ddddddddd ddddddddddd dddddddddddddddd ddddddddddddddddd dddddddd d  ddddddddddd dddddddddd ddddd d ddddddd ddddd dddddddd dddddd ddddddd dddd dddddddd ddddddd ddddddd ddddddddd ddddddddddd dddddddddddddddd ddddddddddddddddd dddddddd d  ddddddddddd dddddddddd ddddd d ddddddd ddddd dddddddd dddddd ddddddd dddd dddddddd ddddddd ddddddd ddddddddd ddddddd</p>";

var deadTxt ="Unfortunately, at this stage, if the animal is not alive, not much can be done, other that removing the animal from dangerous locations such as the road. <br> Please remain calm, do not call the police. Make sure the scene is safe for others and move on.<br> If you would like to inform DELWP, please call this number and someone will note the location of the animal. <br> <a href='136 186'><u>136 186</u> </a>";

//____________________
var winWidth; 
var winHeight; 
var panelPos; 

$(document).ready(function(){
    winWidth = $(document).width();
    winHeight = $(document).height();
    panelPos = winWidth*.96;
    //defaul position of the panel
    $('.panel').animate({
        width: panelPos,
        //height: (winHeight),
        left: -panelPos
    });
  
       
    
});
$(window).resize(function(){
    winWidth = $(document).width();
    winHeight = $(document).height();
    panelPos = winWidth*.96;
    //defaul position of the panel
    $('.panel').animate({
        width: panelPos,
        //height: (winHeight),
        left: -panelPos
    });  
    
});

$('#rdo-land').click(function(){
    $('.land').show();
    $('.sea, .sky, .river').hide();
    LandRiverSeaSky = 'land';
});
$('#rdo-sea').click(function(){
    $('.sea').show();
    $('.land, .sky, .river').hide();
    LandRiverSeaSky = 'sea';
});
$('#rdo-sky').click(function(){
    $('.sky').show();
    $('.land, .sea, .river').hide();
    LandRiverSeaSky = 'sky';
});
$('#rdo-river').click(function(){
    $('.river').show();
    $('.sea, .sky, .land').hide();
    LandRiverSeaSky = 'river';
});

$('#arrow-down').click(function(){
    $('.toggleDiv, #arrow-up').show();
    $('#arrow-down').hide(); 
    $('#moreLess').text('Less');
    $('body, html').animate({ scrollTop: 1000 }, 1500);
    
});
$('#arrow-up').click(function(){
    $('.toggleDiv').hide(1500);
    $('#arrow-up').hide();
    $('#arrow-down').show(); 
    $('#moreLess').text('More');
});
$('#moreLess').click(function(){
    if($('#moreLess').text() === 'More'){
       $('#arrow-down').click(); 
    }else if($('#moreLess').text() === 'Less'){
        $('#arrow-up').click();
    }
});

 // -------------------------------------

function liveDead(src,txt){
    
    $('#WS, .cont, .land, .sea, .sky, .river, #arrow-down, #arrow-up, #moreLess, #underUtility').hide();
    $('#liveDead').show();
    
    tmp = 'isLive';
    
    if(tmp == 'isLive'){
        leftArrowVisibility = 1;
    } else if(leftArrowVisibility == 'whatHapn'){
        leftArrowVisibility = 2;
    } else if( leftArrowVisibility == 'map'){
        leftArrowVisibility = 3;
    }
    
    if(comeFromMap==1){$('#btns').show(); comeFromMap =0; }
    
    //var srcArr = src.split('/');
    //var source = 
        //srcArr[(srcArr.length-4)] +'/'+
        //srcArr[(srcArr.length-3)] +'/'+
        //srcArr[(srcArr.length-2)] +'/'+ srcArr[(srcArr.length-1)];
    //$("#insIMG").append("<img class='theImg' src='" + source + "'>");
    $(".imgQuestion").append(txt);
    $('#leftArrow').show();
}

$('#leftArrow').click(function(){
    if(leftArrowVisibility ==1){
        $('#WS, .cont, .land,  #arrow-down , #moreLess, #WhatSpe, #srch, #underUtility').show();
        $('#liveDead, .bckNxt, .toggleDiv, .sea, .sky, .river, #leftArrow').hide();
        $('.theImg').remove();
        $(".imgQuestion").empty();

        checkRadioBtn();
        leftArrowVisibility =0;
        tmp ='home';
    } else if(leftArrowVisibility ==2){
        $('#btns, #leftArrow, #liveDead, .bckNxt, .footer').show();
        $('#whatHapn').hide();
        $(".imgQuestion").empty();
        $(".imgQuestion").append('Is animal alive?');
        leftArrowVisibility =1;
        tmp ='isLive';
    }else if(leftArrowVisibility ==3){
        $(' #mapDiv, #mapFooter').hide();
        $('#liveDead, #whatHapn, .footer').show();
        $('body').css('overflow', 'auto');

        leftArrowVisibility =2;
        tmp ='whatHapn';
    }
});


$('#yes, #donKnow').click(function(){
    $('#btns, .footer, #leftArrow').hide();
    var src = $('.theImg').attr('src');
    $('.theImg').remove(); $(".imgQuestion").empty();
    liveDead(src, 'What has happend?');
    $('#whatHapn').show(); 
    leftArrowVisibility =2;
    tmp ='whatHapn';
});

$('#no').click(function(){
    //noOrFAid ='no';
    var src = $('.theImg').attr('src');
    Wname = getWildlifeName(src);
    
    imgSource = "<img src='img/wildlife/" + Wname + "' class='theImg' >";
    
    $("#panelIMG >img").remove();
    $("#panelIMG").html(imgSource);
    $("#panelTxt").empty();
    wnArr= Wname.split('/');
    $("#panelTxt").html(wnArr[1].slice(0, -4));
    $('#firstAidAdvice').html(deadTxt); 

    $('.shelter, .keys, .centers').hide();
    $('.firstAidOrDead').show();
    $( ".panel" ).animate({left: 0}, 700);
        
});

function getWildlifeName(src){
// this func returns the name of the species from it's image url
    var srcArr = src.split('/');
    var Wn = srcArr[2] +'/'+srcArr[3]; 
    return  Wn   
}


$('.close').click(function(){
    $( ".panel" ).animate({left: (-panelPos)}, 700);
});

$( "#FAid, #mapFA" ).click(function(){
    //noOrFAid ='FAid';
    var src = $('.theImg').attr('src');
    Wname = getWildlifeName(src);
    wnArr = Wname.split('/');
    imgSource = "<img src='img/wildlife/" + Wname + "' class='theImg' >";
    
    $("#panelIMG >img").remove();
    $("#panelIMG").html(imgSource);
    var txt = " First Aid Advice.";
    $("#panelTxt").empty();
    $("#panelTxt").html(wnArr[1].slice(0, -4) + txt);
    $('#firstAidAdvice').html(firstAidAdvice); 

    $('.firstAidOrDead').show();
    $('.keys, .centers, .shelter').hide();
    $( ".panel" ).animate({left: 0}, 700);
});
$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
         $( ".panel" ).animate({left: (-panelPos)}, 700);
    }
});

$('#done').click(function(){
    $( ".panel" ).animate({left: (-panelPos)}, 700);
    if(noOrFAid == 'FAid'){
        alert('Hide exteral elements and show the Map!');
        //('#map-div').show();
    }
});
$('#Kdone, #Cdone, #sdone').click(function(){$( ".panel" ).animate({left: (-panelPos)}, 700);});

$('#DesOrOpen').click(function(){
    if($('#divTxt').text() =='Opening Hours'){
        $('#divTxt').text('Description');
        
        $('#DesArrow').hide();
        $('#OpenHArrow').show();
        
        $('#shelterDes').hide(1000);
        $('#openingHours').show(1000);
        $('#hr').show();
        
    }else if($('#divTxt').text() =='Description'){
        $('#divTxt').text('Opening Hours');
        
        $('#OpenHArrow').hide();
        $('#DesArrow').show();
        $('#hr').hide();
        
        $('#shelterDes').show(1000);
        $('#openingHours').hide(1000);
    }
    
});

$('.Qbtns').click(function(){
    $('#liveDead, #whatHapn, .footer').hide();
    $('#mapDiv, #mapFooter').show();
    $('body').css('overflow', 'hidden');
    $('body, html').animate({ scrollTop: 0 });
    
    // set the width of the search field dynamically
    $('.searchInput').animate({
        width: ($(window).width()*0.50)
    });
    $('#Pcode').animate({
        paddingLeft: ( ($(window).width()*0.83-($('.searchBtn').width()+$('.searchInput').width()) )/4 )
    }); 
    $('.titlePane').animate({height: '25px'});

    leftArrowVisibility =3;
    tmp ='map';
});

$('#mapKeys').click(function(){
    $('.firstAidOrDead, .shelter, .centers').hide();
    $('.keys').show();
    $( ".panel" ).animate({left: 0}, 700);    
});
$('#mapCenters').click(function(){
    $('.firstAidOrDead, .shelter, .keys').hide();
    $('.centers').show();
    $( ".panel" ).animate({left: 0}, 700);    
});

$('#mapList').click(function(){
    $('.firstAidOrDead, .shelter, .keys, #mapDiv, .centers').hide();
    $('.theImg').remove(); $(".imgQuestion").empty();
    $('.cont, .land, #arrow-down, #underUtility, .footer').show();  //#WS, 
    $('body').css('overflow', 'auto');
    comeFromMap = 1;
    checkRadioBtn();
    
});
 $('#mapModalClose').click(function(){
     $('#mapModal, #LocationBox').hide();
 });
$('#mapYes').click(function(){
    $('#mapModal, #LocationBox').hide();
    $('.firstAidOrDead, .keys, .shelter').hide();
    //$('.centers').show();
    //$( ".panel" ).animate({left: 0}, 700);
    
});

$('.centersRow').click(function(){
    var imgTag = $(this).find('img').attr('src');
    var spanTag = $(this).find('span').text();
    var spTag = spanTag.replace(/\d+([)]\d+)?/g, '');
    
    var srcArr = imgTag.split('/');
    
    makeShelterPage(srcArr[(srcArr.length-1)], spTag)

    $('.firstAidOrDead, .keys, .centers').hide();
    $('.shelter').show();
    $( ".panel" ).animate({left: 0}, 700);
    

});

function makeShelterPage(src, cntrNme){
    if($("#Cimage").find('img')){
        console.log('there was an image here!');
        $("#Cimage > img").remove();
    }
    $("#Cimage").append("<img style='width:100%; padding:0% 0% 30% 15%;' src='img/keys/" + src + "'>");
    $('#Cname').text(cntrNme);
}

function checkRadioBtn(){
    if(LandRiverSeaSky == 'land'){
        $('#rdo-land').prop("checked", true);
        $('.land').show();
        $('.sea, .river, .sky').hide();
    }else if(LandRiverSeaSky =='sea'){
        $('#rdo-sea').prop("checked", true);
        $('.sea').show();
        $('.land, .river, .sky').hide();
    }else if(LandRiverSeaSky=='river'){
        $('#rdo-river').prop("checked", true);
        $('.river').show();
        $('.sea, .land, .sky').hide();
    } else if(LandRiverSeaSky =='sky'){
        $('#rdo-sky').prop("checked", true);
        $('.sky').show();
        $('.sea, .river, .land').hide();
    }
}
$('#locBoxSrch').click(function(){
    console.log('loc box!');
    $('#LocationBox').show();
});

$('.AutoUL').on('mouseover', '.AutoLi' ,function(){
    $(this).css({'backgroundColor':'#cfcfcf'})
});
$('.AutoUL').on('mouseout', '.AutoLi' ,function(){
    $(this).css({'backgroundColor':'#FFF'})
});
$('.AutoUL').on('click', '.AutoLi', function(){
    $('#srch').val($(this).text() );
    $('#species').html('');
});

