<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <?php
      include 'link.html';
    ?>
    <link href="../bower_components/slick-carousel/slick/slick.css" rel="stylesheet">
    <link href="../bower_components/ion.rangeSlider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="../css/front/main.css?version=3.5.1" rel="stylesheet">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js" ></script>
    <link href="../css/map-marker.css" rel="stylesheet">
    <style type="text/css">
      /*filter loader ********************************************************/
      #filter-loader{
        /*display: none;*/
        background: white;
        width: 71%;
        position: absolute;
        z-index: 99;
        height: 90%;
      }
      .filter-loader-full{width: 95% !important;}
      #funnel-loader{
        height: 100%;
        width: 100%;
        padding-top: 5%;
      }
      #funnel-loader img{
        margin-left: auto;
        margin-right: auto;
        display: block;
        height: 255px;
        width: auto;
      }
      .filter-max{
        width: 100% !important;
      }
    </style>
  </head>
  <body class="white" style="height: 100%;">
    <div class="all-wrapper rentals" style="height: 100%;">
      <div class="top-bar" style="border-top: 1px solid #f6f6f6;">
        <div class="logo-w">
          <a class="logo" href="javascript:void(0)" onclick="$('.modal-dialog').addClass('modal-lg'); $('#modalMapSlideBar').modal('show');">
            <div class="logo-element"></div>
            <div class="logo-label" id="logo-users">
              NUBER
            </div>
          </a>
          <div class="filters-toggler" id="toggler">
            <i class="os-icon os-icon-hamburger-menu-1"></i>
          </div>
        </div>
        <div class="filters" style="padding-left: 15px; padding-right: 0px;">
          <div class="row" id="filter-user-activity" style="width: 104%; height: 100%;">
            <div class="col-sm-4" style="padding: 0;">
              <div class="inputGroup">
                <input class="checkbox" id="opSignup" name="opSignup" type="checkbox" />
                <label for="opSignup">SILVER</label>
              </div>
            </div>
            <div class="col-sm-4" style="padding: 0;">
              <div class="inputGroup">
                <input class="checkbox" id="opRepayment" name="opRepayment" type="checkbox" />
                <label for="opRepayment">PREMIUM</label>
              </div>
            </div>
            <div class="col-sm-4" style="padding: 0;">
              <div class="inputGroup">
                <input class="checkbox" id="opDisbursement" name="opDisbursement" type="checkbox" checked="checked" />
                <label for="opDisbursement">GOLD</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rentals-list-w" style="height: 86%;">
        <!--------------------
        START - Property Index Filters
        -------------------->
        <div class="filter-side" id="users" style="overflow-x: scroll;">

        </div>
        <!--------------------
        END - Property Index Filters
        -------------------->
        <div class="rentals-list">
          <!-- filter loader -->
          <div id="preloader" style="background: linear-gradient(to bottom right, #ffffff, #ffffff);">
            <div id="tez-loader" style="padding-top: 15%;" >
              <img src="../img/map.gif" style="height: 200px">
            </div>
          </div>
          <!-- filter loader end-->
            <div id="map"></div>
        </div>
      </div>

      <!-- Model Map Marker -->
      <?php include('modal.html'); ?>

      <div class="display-type"></div>
    </div>
    <?php
      include 'script.html';
    ?>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization,geometry"></script>
    <script src="../bower_components/slick-carousel/slick/slick.min.js"></script>
    <script src="../bower_components/ion.rangeSlider/js/ion.rangeSlider.min.js"></script>
    <script src="../bower_components/jquery-bar-rating/dist/jquery.barrating.min.js"></script>
    <script src="../js/main_front.js?version=3.0"></script>
    <script type="text/javascript" src="../js/map-marker.js"></script>
  </body>
</html>
