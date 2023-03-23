$(document).ready(function(){

  function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 1000);
  }
    $('.BUTTON_ON').click(function () {
      // console.log("On Click");
      // let NAME = $('#id_NAME').val();
      let id = $(this).attr("data-id");
      // console.log(id);
      let csrf = $("input[name=csrfmiddlewaretoken]").val();
      mydata = {sid:id, csrfmiddlewaretoken:csrf};
      $.ajax({
        url: "On_Click/",
        method: "POST",
        data: mydata,
        dataType: 'json',
        success: function(data){
            if(data.status == 'On_Click')
            {
              GetJSON()
            }
            if(data.status == 'Err')
            {
              console.log('ERROR')
            }
        },
      });
    });

    $('.BUTTON_OFF').click(function () {
      // console.log("Off Click");
      // let NAME = $('#id_NAME').val();
      let id = $(this).attr("data-id");
      // console.log(id);
      let csrf = $("input[name=csrfmiddlewaretoken]").val();
      mydata = {sid:id, csrfmiddlewaretoken:csrf};
      $.ajax({
        url: "Off_Click/",
        method: "POST",
        data: mydata,
        dataType: 'json',
        success: function(data){
          if(data.status == 'Off_Click')
          {
            GetJSON()
          }
          if(data.status == 'Err')
          {
            console.log('ERROR')
          }
        },
      });
    });
});
// const IP = "http://127.0.0.1:8000/"
const IP = "http://192.168.1.107:5000/"
function GetJSON(){
  URL_JSON = IP + "WEB_SERVER/";
  fetch(URL_JSON)
    .then(response => response.json())
    .then(Device =>{
      Area_1__Device_1 = Device.ID_1.STATUS;
      Area_1__Device_2 = Device.ID_2.STATUS;
      Area_1__Device_3 = Device.ID_3.STATUS;
      Area_1__Device_4 = Device.ID_4.STATUS;
      Area_1__Device_5 = Device.ID_5.STATUS;
      Area_1__Device_7 = Device.ID_7.STATUS;
      Area_2__Device_1 = Device.ID_8.STATUS;
      Area_2__Device_2 = Device.ID_9.STATUS;
      Anh_TB_1 = Device.ID_1.TYPE;
      Anh_TB_2 = Device.ID_2.TYPE;
      Anh_TB_3 = Device.ID_3.TYPE;
      Anh_TB_4 = Device.ID_4.TYPE;
      Anh_TB_5 = Device.ID_5.TYPE;
      Anh_TB_7 = Device.ID_7.TYPE;
      Anh_TB_8 = Device.ID_8.TYPE;
      Anh_TB_9 = Device.ID_9.TYPE;
      var element_1 = document.getElementById("IMG__1");
      var temp_1 = document.getElementById("TEMP__1");
      var element_2 = document.getElementById("IMG__2");
      var temp_2 = document.getElementById("TEMP__2");
      var element_3 = document.getElementById("IMG__3");
      var temp_3 = document.getElementById("TEMP__3");
      var element_4 = document.getElementById("IMG__4");
      var temp_4 = document.getElementById("TEMP__4");
      var element_5 = document.getElementById("IMG__5");
      var temp_5 = document.getElementById("TEMP__5");
      var element_7 = document.getElementById("IMG__7");
      var temp_7 = document.getElementById("TEMP__7");
      var element_8 = document.getElementById("IMG__8");
      var temp_8 = document.getElementById("TEMP__8");
      var element_9 = document.getElementById("IMG__9");
      var temp_9 = document.getElementById("TEMP__9");
      if(Anh_TB_1 == 'Quạt'){
        temp_1.classList.add("Electric_fan");
        temp_1.classList.remove("Light");
        temp_1.classList.remove("Ceiling_fans");
        temp_1.classList.remove("Water_pumps");
      }
      if(Anh_TB_1 == 'Quạt trần'){
        temp_1.classList.add("Ceiling_fans");
        temp_1.classList.remove("Light");
        temp_1.classList.remove("Water_pumps");
        temp_1.classList.remove("Electric_fan");
      }
      if(Anh_TB_1 == 'Máy bơn nước'){
        temp_1.classList.add("Water_pumps");
        temp_1.classList.remove("Light");
        temp_1.classList.remove("Electric_fan");
        temp_1.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_1 == 'Bóng đèn'){
        temp_1.classList.add("Light");
        temp_1.classList.remove("Ceiling_fans");
        temp_1.classList.remove("Water_pumps");
        temp_1.classList.remove("Electric_fan");
      }
      

      if(Anh_TB_2 == 'Quạt'){
        temp_2.classList.add("Electric_fan");
        temp_2.classList.remove("Light");
        temp_2.classList.remove("Ceiling_fans");
        temp_2.classList.remove("Water_pumps");
      }
      if(Anh_TB_2 == 'Quạt trần'){
        temp_2.classList.add("Ceiling_fans");
        temp_2.classList.remove("Light");
        temp_2.classList.remove("Water_pumps");
        temp_2.classList.remove("Electric_fan");
      }
      if(Anh_TB_2 == 'Máy bơn nước'){
        temp_2.classList.add("Water_pumps");
        temp_2.classList.remove("Light");
        temp_2.classList.remove("Electric_fan");
        temp_2.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_2 == 'Bóng đèn'){
        temp_2.classList.add("Light");
        temp_2.classList.remove("Ceiling_fans");
        temp_2.classList.remove("Water_pumps");
        temp_2.classList.remove("Electric_fan");
      }


      if(Anh_TB_3 == 'Quạt'){
        temp_3.classList.add("Electric_fan");
        temp_3.classList.remove("Light");
        temp_3.classList.remove("Ceiling_fans");
        temp_3.classList.remove("Water_pumps");
      }
      if(Anh_TB_3 == 'Quạt trần'){
        temp_3.classList.add("Ceiling_fans");
        temp_3.classList.remove("Light");
        temp_3.classList.remove("Water_pumps");
        temp_3.classList.remove("Electric_fan");
      }
      if(Anh_TB_3 == 'Máy bơn nước'){
        temp_3.classList.add("Water_pumps");
        temp_3.classList.remove("Light");
        temp_3.classList.remove("Electric_fan");
        temp_3.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_3 == 'Bóng đèn'){
        temp_3.classList.add("Light");
        temp_3.classList.remove("Ceiling_fans");
        temp_3.classList.remove("Water_pumps");
        temp_3.classList.remove("Electric_fan");
      }


      if(Anh_TB_4 == 'Quạt'){
        temp_4.classList.add("Electric_fan");
        temp_4.classList.remove("Light");
        temp_4.classList.remove("Ceiling_fans");
        temp_4.classList.remove("Water_pumps");
      }
      if(Anh_TB_4 == 'Quạt trần'){
        temp_4.classList.add("Ceiling_fans");
        temp_4.classList.remove("Light");
        temp_4.classList.remove("Water_pumps");
        temp_4.classList.remove("Electric_fan");
      }
      if(Anh_TB_4 == 'Máy bơn nước'){
        temp_4.classList.add("Water_pumps");
        temp_4.classList.remove("Light");
        temp_4.classList.remove("Electric_fan");
        temp_4.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_4 == 'Bóng đèn'){
        temp_4.classList.add("Light");
        temp_4.classList.remove("Ceiling_fans");
        temp_4.classList.remove("Water_pumps");
        temp_4.classList.remove("Electric_fan");
      }

      if(Anh_TB_5 == 'Quạt'){
        temp_5.classList.add("Electric_fan");
        temp_5.classList.remove("Light");
        temp_5.classList.remove("Ceiling_fans");
        temp_5.classList.remove("Water_pumps");
      }
      if(Anh_TB_5 == 'Quạt trần'){
        temp_5.classList.add("Ceiling_fans");
        temp_5.classList.remove("Light");
        temp_5.classList.remove("Water_pumps");
        temp_5.classList.remove("Electric_fan");
      }
      if(Anh_TB_5 == 'Máy bơn nước'){
        temp_5.classList.add("Water_pumps");
        temp_5.classList.remove("Light");
        temp_5.classList.remove("Electric_fan");
        temp_5.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_5 == 'Bóng đèn'){
        temp_5.classList.add("Light");
        temp_5.classList.remove("Ceiling_fans");
        temp_5.classList.remove("Water_pumps");
        temp_5.classList.remove("Electric_fan");
      }

      if(Anh_TB_7 == 'Quạt'){
        temp_7.classList.add("Electric_fan");
        temp_7.classList.remove("Light");
        temp_7.classList.remove("Ceiling_fans");
        temp_7.classList.remove("Water_pumps");
      }
      if(Anh_TB_7 == 'Quạt trần'){
        temp_7.classList.add("Ceiling_fans");
        temp_7.classList.remove("Light");
        temp_7.classList.remove("Water_pumps");
        temp_7.classList.remove("Electric_fan");
      }
      if(Anh_TB_7 == 'Máy bơn nước'){
        temp_7.classList.add("Water_pumps");
        temp_7.classList.remove("Light");
        temp_7.classList.remove("Electric_fan");
        temp_7.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_7 == 'Bóng đèn'){
        temp_7.classList.add("Light");
        temp_7.classList.remove("Ceiling_fans");
        temp_7.classList.remove("Water_pumps");
        temp_7.classList.remove("Electric_fan");
      }

      if(Anh_TB_8 == 'Quạt'){
        temp_8.classList.add("Electric_fan");
        temp_8.classList.remove("Light");
        temp_8.classList.remove("Ceiling_fans");
        temp_8.classList.remove("Water_pumps");
      }
      if(Anh_TB_8 == 'Quạt trần'){
        temp_8.classList.add("Ceiling_fans");
        temp_8.classList.remove("Light");
        temp_8.classList.remove("Water_pumps");
        temp_8.classList.remove("Electric_fan");
      }
      if(Anh_TB_8 == 'Máy bơn nước'){
        temp_8.classList.add("Water_pumps");
        temp_8.classList.remove("Light");
        temp_8.classList.remove("Electric_fan");
        temp_8.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_8 == 'Bóng đèn'){
        temp_8.classList.add("Light");
        temp_8.classList.remove("Ceiling_fans");
        temp_8.classList.remove("Water_pumps");
        temp_8.classList.remove("Electric_fan");
      }

      if(Anh_TB_9 == 'Quạt'){
        temp_9.classList.add("Electric_fan");
        temp_9.classList.remove("Light");
        temp_9.classList.remove("Ceiling_fans");
        temp_9.classList.remove("Water_pumps");
      }
      if(Anh_TB_9 == 'Quạt trần'){
        temp_9.classList.add("Ceiling_fans");
        temp_9.classList.remove("Light");
        temp_9.classList.remove("Water_pumps");
        temp_9.classList.remove("Electric_fan");
      }
      if(Anh_TB_9 == 'Máy bơn nước'){
        temp_9.classList.add("Water_pumps");
        temp_9.classList.remove("Light");
        temp_9.classList.remove("Electric_fan");
        temp_9.classList.remove("Ceiling_fans");
      }
      if(Anh_TB_9 == 'Bóng đèn'){
        temp_9.classList.add("Light");
        temp_9.classList.remove("Ceiling_fans");
        temp_9.classList.remove("Water_pumps");
        temp_9.classList.remove("Electric_fan");
      }

    if(Area_1__Device_1 == 1){
      element_1.classList.add("on");
      element_1.classList.remove("off");
    }
    if(Area_1__Device_1 == 0){
      element_1.classList.add("off");
      element_1.classList.remove("on");
    }
    if(Area_1__Device_2 == 1){
      element_2.classList.add("on");
      element_2.classList.remove("off");
    }
    if(Area_1__Device_2 == 0){
      element_2.classList.add("off");
      element_2.classList.remove("on");
    }
    if(Area_1__Device_3 == 1){
      element_3.classList.add("on");
      element_3.classList.remove("off");
    }
    if(Area_1__Device_3 == 0){
      element_3.classList.add("off");
      element_3.classList.remove("on");
    }
    if(Area_1__Device_4 == 1){
      element_4.classList.add("on");
      element_4.classList.remove("off");
    }
    if(Area_1__Device_4 == 0){
      element_4.classList.add("off");
      element_4.classList.remove("on");
    }
    if(Area_1__Device_5 == 1){
      element_5.classList.add("on");
      element_5.classList.remove("off");
    }
    if(Area_1__Device_5 == 0){
      element_5.classList.add("off");
      element_5.classList.remove("on");
    }
    if(Area_1__Device_7 == 1){
      element_7.classList.add("on");
      element_7.classList.remove("off");
    }
    if(Area_1__Device_7 == 0){
      element_7.classList.add("off");
      element_7.classList.remove("on");
    }


    if(Area_2__Device_1 == 1){
      element_8.classList.add("on");
      element_8.classList.remove("off");
    }
    if(Area_2__Device_1 == 0){
      element_8.classList.add("off");
      element_8.classList.remove("on");
    }
    if(Area_2__Device_2 == 1){
      element_9.classList.add("on");
      element_9.classList.remove("off");
    }
    if(Area_2__Device_2 == 0){
      element_9.classList.add("off");
      element_9.classList.remove("on");
    }
    })
}