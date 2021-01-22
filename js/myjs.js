   
    $(document).ready(function(){

        //jquery effects
        //hide and show

        $('#btn1').click(function(){

            //btn click
           // $('#container').hide();

           // fade out
            $('#container').fadeOut(2000,function(){
                alert("gone");
            });
        })


        
        $('#btn2').click(function(){

            //btn click
            //$('#container').show();


            //fade in
            $('#container').fadeIn(2000,function(){

                alert("coming");
            });
        })



      $("#btn3").click(function(){
         
        //fade toggle
        $("#container").fadeToggle();
      })



     $("#btn4").click(function(){
           
        //fade to
        $("#container").fadeTo(250,0.5);
     })
       //====================================================
       //slide
       // slideDown,SlideUp,SlideToggle

       $("#btn5").click(function(){
       
        $("#container").slideDown(2500);

       })

       $("#btn6").click(function(){
       
        $("#container").slideUp(3000);

       })

       $("#btn7").click(function(){
       
        $("#container").slideToggle();

       })
     

       //=======================
       // Animation
       //animatte({param},speed,callback)

       $("#btn8").click(function(){

        $("#container").animate({width:"200",height:"200",opacity:0.5,left:"250px"},200,
        function(){

           $("#container").animate({borderRedius:"20px",
           left:"0",height:"100px",width:"100px"})
        })
       })
         
       ////////////////////////
       //val function

       $("#btn9").click(function(){

        // get the value fron field
        // let v=$("#in").val();
        // console.log("value is=" + v);


        // we can set the value from val() also
       $("#in").val("this is my val function");
     })

    });
    