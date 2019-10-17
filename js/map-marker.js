
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })

    // change check box map initialize *******************************************************************************************
    $(".checkbox").change(function() {
        $.get(baseURL+"/rides", function(data){
            userLocationMap(data.row);
        });
    });

    function userLocationMap(dataMap){

      // push rest apis data
      var concatActivity = '';
      var userLocation = [];
      var userLatLon = [];
      var userLatLonemail = [];
      var locations = [];
      var index;
      // var concatString = '';

      // Creating marker map *********************************************************************************************************
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: new google.maps.LatLng(30.3753, 69.3451),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });


      //Inserting Map *******************************************************************************************************
      for( i = 0; i < dataMap.length; i++ ){

          //check is it come already with email variation ***********************************************************************************************************************
          if(userLatLon.includes('"'+ dataMap[i].lat+', '+dataMap[i].lon +'"') && !userLatLonemail.includes('"'+ dataMap[i].lat+', '+dataMap[i].lon +', '+dataMap[i].email +'"')){


            //remove old one ***************************************************************************************************************************************************
            for(var l = 0; l < locations.length; l++ ){
              index = locations[l].indexOf(dataMap[i].lat);
              if(index != -1){
                index = locations[l].indexOf(dataMap[i].lon);
                if(index != -1){
                  locations[l] = [];
                }
              }
            }

            //print in red ************************************************************************************************************************************

            // if(opMultiple.checked){

              if(  dataMap[i].lat == 'null' || dataMap[i].lon == null  ){
               
              // print in red for NUll Location******************************************************************************************************************
               userLocation = [
                  '<b style="color:red;" >'+dataMap[i].type+'</b></br><b>'+dataMap[i].name+'</b></br>'+dataMap[i].email,
                  dataMap[i].lat, 
                  dataMap[i].lon, 
                  1,
                  "../img/red-mark.png"
                ];


              }else{

              // print in red for Repeated And Different email People ********************************************************************************************
               userLocation = [
                  '<b style="color:red;" >'+dataMap[i].type+'</b></br><b>'+dataMap[i].name+'</b></br>'+dataMap[i].email,
                  dataMap[i].lat, 
                  dataMap[i].lon, 
                  0,
                  "../img/red-mark.png"
                ];




              // side bar activity for not null **************************************************************************************************************************
              concatActivity += '<div class="filter-w collapsed" onclick="personFind('+ dataMap[i].lat +','+ dataMap[i].lon+',this,`red`);">'
                                  +'<div class="filter-toggle">'
                                    +'<i class="os-icon-minus os-icon"></i>'
                                  +'</div>'
                                  +'<h6 class="filter-header repeat">'
                                    +dataMap[i].name
                                  +'</h6>'
                                  +'<div class="filter-body" style="padding:0">'
                                    +'<table class="table table-bordered table-v2 table-striped info">'
                                      +'<tr><td><b>Id:</b></td><td>'+dataMap[i].id+'</td></tr>'
                                      +'<tr><td><b>email:</b></td><td>'+dataMap[i].email+'</td></tr>'
                                      +'<tr><td><b>Type:</b></td><td>'+dataMap[i].type+'</td></tr>'
                                      +'<tr><td><b>ADDRESS:</b></td><td>'+dataMap[i].lat+', '+dataMap[i].lon+'</td></tr>'
                                      +`<tr><td><b>Time:</b></td><td>${dataMap[i].c_stamp}</td></tr><tr><td><b>Status:</b></td><td><a href="javascript:void(0)" id="id-${dataMap[i].id}" onclick="booking('${dataMap[i].id}')" >${dataMap[i].status == 'BOOKING' ? 'CLICK TO BOOK' : dataMap[i].status }<a/></td></tr></table>`
                                  +'</div>'
                                +'</div>';


              }//else not null repeated one
          
          }else{
            //push lat long 
            userLatLon.push('"'+ dataMap[i].lat+', '+dataMap[i].lon +'"');
            userLatLonemail.push('"'+ dataMap[i].lat+', '+dataMap[i].lon +', '+dataMap[i].email +'"');

            //print normaly
            if(dataMap[i].type == 'PREMIUM' && opRepayment.checked ){
               userLocation = [
                  '<b style="color:#3ad18a" >'+dataMap[i].type+'</b></br><b>'+dataMap[i].name+'</b></br>'+dataMap[i].email, 
                  dataMap[i].lat, 
                  dataMap[i].lon, 
                  2,
                  "../img/repay-mark.png"
                ];


            // side bar activity REPAYMENT *************************************************************************************************************************
            concatActivity += '<div class="filter-w collapsed" onclick="personFind('+ dataMap[i].lat +','+ dataMap[i].lon +',this,`green`)">'
                                +'<div class="filter-toggle">'
                                  +'<i class="os-icon-minus os-icon"></i>'
                                +'</div>'
                                +'<h6 class="filter-header repay">'
                                  +dataMap[i].name
                                +'</h6>'
                                +'<div class="filter-body" style="padding:0">'
                                  +'<table class="table table-bordered table-v2 table-striped info">'
                                    +'<tr><td><b>Id:</b></td><td>'+dataMap[i].id+'</td></tr>'
                                    +'<tr><td><b>email:</b></td><td>'+dataMap[i].email+'</td></tr>'
                                    +'<tr><td><b>Type:</b></td><td>'+dataMap[i].type+'</td></tr>'
                                    +'<tr><td><b>ADDRESS:</b></td><td>'+dataMap[i].lat+', '+dataMap[i].lon+'</td></tr>'
                                    +`<tr><td><b>Time:</b></td><td>${dataMap[i].c_stamp}</td></tr><tr><td><b>Status:</b></td><td><a href="javascript:void(0)" id="id-${dataMap[i].id}" onclick="booking('${dataMap[i].id}')" >${dataMap[i].status == 'BOOKING' ? 'CLICK TO BOOK' : dataMap[i].status }<a/></td></tr></table>`
                                +'</div>'
                              +'</div>';


            }if(dataMap[i].type == 'GOLD' && opDisbursement.checked){

               userLocation = [
                  '<b style="color:#fc9257" >'+dataMap[i].type+'</b></br><b>'+dataMap[i].name+'</b></br>'+dataMap[i].email,
                  dataMap[i].lat, 
                  dataMap[i].lon, 
                  2,
                  "../img/pin-disbursment.png"
                ];


            // side bar activity DISBURSEMENT **************************************************************************************************************************
            concatActivity += '<div class="filter-w collapsed" onclick="personFind('+ dataMap[i].lat +','+ dataMap[i].lon +',this,`yellow`)">'
                                +'<div class="filter-toggle">'
                                  +'<i class="os-icon-minus os-icon"></i>'
                                +'</div>'
                                +'<h6 class="filter-header disburse">'
                                  +dataMap[i].name
                                +'</h6>'
                                +'<div class="filter-body" style="padding:0">'
                                  +'<table class="table table-bordered table-v2 table-striped info">'
                                    +'<tr><td><b>Id:</b></td><td>'+dataMap[i].id+'</td></tr>'
                                    +'<tr><td><b>email:</b></td><td>'+dataMap[i].email+'</td></tr>'
                                    +'<tr><td><b>Type:</b></td><td>'+dataMap[i].type+'</td></tr>'
                                    +'<tr><td><b>ADDRESS:</b></td><td>'+dataMap[i].lat+', '+dataMap[i].lon+'</td></tr>'
                                    +`<tr><td><b>Time:</b></td><td>${dataMap[i].c_stamp}</td></tr><tr><td><b>Status:</b></td><td><a href="javascript:void(0)" id="id-${dataMap[i].id}" onclick="booking('${dataMap[i].id}')" >${dataMap[i].status == 'BOOKING' ? 'CLICK TO BOOK' : dataMap[i].status }<a/></td></tr></table>`
                                +'</div>'
                              +'</div>';


            }if(dataMap[i].type == 'SILVER' && opSignup.checked){

               userLocation = [
                  '<b style="color:rgb(58, 160, 239);" >'+dataMap[i].type+'</b></br><b>'+dataMap[i].name+'</b></br>'+dataMap[i].email,
                  dataMap[i].lat, 
                  dataMap[i].lon, 
                  2,
                  "../img/signup-mark.png"
                ];


            // side bar activity SIGNUP ******************************************************************************************************************************
            concatActivity += '<div class="filter-w collapsed" onclick="personFind('+ dataMap[i].lat +','+ dataMap[i].lon +',this,`blue`)">'
                                +'<div class="filter-toggle">'
                                  +'<i class="os-icon-minus os-icon"></i>'
                                +'</div>'
                                +'<h6 class="filter-header signup">'
                                  +dataMap[i].name
                                +'</h6>'
                                +'<div class="filter-body" style="padding:0">'
                                  +'<table class="table table-bordered table-v2 table-striped info">'
                                    +'<tr><td><b>Id:</b></td><td>'+dataMap[i].id+'</td></tr>'
                                    +'<tr><td><b>email:</b></td><td>'+dataMap[i].email+'</td></tr>'
                                    +'<tr><td><b>Type:</b></td><td>'+dataMap[i].type+'</td></tr>'
                                    +'<tr><td><b>ADDRESS:</b></td><td>'+dataMap[i].lat+', '+dataMap[i].lon+'</td></tr>'
                                    +`<tr><td><b>Time:</b></td><td>${dataMap[i].c_stamp}</td></tr><tr><td><b>Status:</b></td><td><a href="javascript:void(0)" id="id-${dataMap[i].id}" onclick="booking('${dataMap[i].id}')" >${dataMap[i].status == 'BOOKING' ? 'CLICK TO BOOK' : dataMap[i].status }<a/></td></tr></table>`
                                +'</div>'
                              +'</div>';


            }

          }

          locations.push(userLocation);
          $('#filter-loader').fadeOut('slow'); 
      }

      $('#users').html(concatActivity);

      $('.filter-w .filter-toggle').on('click',function(){
        if($(this).siblings('.filter-body').css('display') == 'none')
        {
          $('.filter-body').slideUp();
          $(this).siblings('.filter-body').slideDown();
        }else{
          $(this).siblings('.filter-body').slideUp();
        }
      });

      var infowindow = new google.maps.InfoWindow();
      var marker, i;

      for (i = 0; i < locations.length; i++) {

        if(locations[i].length > 1){
          if(locations[i][3] == 0){
            marker = new google.maps.Marker({
              animation: google.maps.Animation.BOUNCE,
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              icon: locations[i][4],
              map: map,
              zIndex: 100
            });
          }else{
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              icon: locations[i][4],
              map: map
            });
          }

          google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
            return function () {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));

          // Zoom to 9 when clicking on marker
          google.maps.event.addListener(marker,'click',function() {
            map.panTo(this.getPosition());
            smoothZoom(map, map.getZoom() + 6, map.getZoom());
          });
       
        }//if end

      } //loop end

      window.personFind = function(lat,lon,classTag,className){

           $(this).removeClass('collapsed');
           $(`.filter-w .filter-header`).removeClass('red green blue yellow'); 
           $(classTag).children(`.filter-header`).addClass(className);

          var latLng = new google.maps.LatLng(lat, lon); //Makes a latlng
          // map.setZoom(6);
          map.panTo(latLng);
          smoothZoom(map, 18, map.getZoom());
      }
    }


    // the smooth zoom function **************************************************************************************************
    function smoothZoom (map, max, cnt) {
        if (cnt >= max) {
            return;
        }
        else {
            z = google.maps.event.addListener(map, 'zoom_changed', function(event){
                google.maps.event.removeListener(z);
                smoothZoom(map, max, cnt + 1);
            });
            setTimeout(function(){
              map.setZoom(cnt);
            }, 80); // 100ms is what I found to work well on my system -- it might not work well on all systems
        }
    }  

    // Function on window load *****************************************************************************************************
     $(function(){
        $.get(baseURL+"/rides" , function(data){
            userLocationMap(data.row);
        });
     });


     //self toggler function ******************************************************************************************************
      $('#toggler').on('click',function(){
        $('#list-controls').slideToggle();
        $('body').toggleClass("toggleCss");
        $('#map').toggleClass("map");
        $('#filter-loader').toggleClass('filter-max');

      });


      // Header Location Map ******************************************************************************************************
      $( "#home" ).removeClass("active");
      $( "#locationList" ).html("<li id='home' ><a href='main.php?startDate="+querySelector['startDate']+"&endDate="+querySelector['endDate']+"'> Home </a></li><li class='active' ><a href='map.php?startDate="+querySelector['startDate']+"&endDate="+querySelector['endDate']+"'> / Map </a></li>");


      //booking ************************************************************************************************************
      
      function booking(el){
        if($(`#id-${el}`).text() == 'APPROVED' ){     

          swalWithBootstrapButtons({
            title: 'Are you sure?',
            text: "You want to cancel this ride?",
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No!',
            reverseButtons: true
          }).then((result) => {

            if (result.value) {
              // change status
              updateStatus(el,'BOOKING');
              $(`#id-${el}`).text('BOOKING'); 
              
            } else if (
              // Read more about handling dismissals
              result.dismiss === swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons({
                title: "Cancelled!",
                type: "error",
                timer: 1000,
                showCancelButton: false,
                showConfirmButton: false
              })
              $('body').css('padding-right','15px');
            }
          }) 

        }else{
          $(`#id-${el}`).text('PENDING');
          setTimeout(function(){
            // change status
            updateStatus(el,'APPROVED');
            $(`#id-${el}`).text('APPROVED');
          }, 5000);
        }
      }


    $(window).ready(function() {
      setTimeout(function(){
          $('#preloader').slideUp('slow');
      }, 500);
    });



    function updateStatus(id,status){
      $.ajax({  
         url:"/nuber/view/update.php",  
         method:"POST",
         data:{
            id:id,
            status:status,
         }, 
         success:function(data){ 
            console.log(data)
            swalWithBootstrapButtons({
              title: "Success!",
              text: "Operation Completed Successfully.",
              type: "success",
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            })
         }//success function end
      }); 
    }