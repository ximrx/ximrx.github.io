<?php
require('./code/header.php');
?>
    <div class="col-md-10"><div class="dabba">
        <span class="buttonsalia">+</span><span class="buttonsalib">-</span>
        <div id="landmap">
            <img src="./data/img/map/image-map.jpg" id="lajpgland"/>
            <?php 
            $svg = file_get_contents("./data/img/map/vector-map.svg");

            $svg  = str_replace('<?xml version="1.0" encoding="utf-8"?>',"",$svg);

            $svg  = str_replace('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"', '<svg id="Layer_1"  viewBox="0 0 3891 7756" xmlns="http://www.w3.org/2000/svg">',$svg);
            
            $svg  = str_replace('viewBox="0 0 3891 7756" style="enable-background:new 0 0 3891 7756;" xml:space="preserve">',"",$svg);


            echo $svg;
            ?>
            <!--img src="./data/img/map/vector-map.svg" id="lasvgland"/-->
        </div>
        
    </div></div>
<?php
require('./code/footer.php');
?>