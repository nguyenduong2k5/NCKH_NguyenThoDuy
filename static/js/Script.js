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
 const IP = "http://127.0.0.1:8000/"
//const IP = "http://192.168.1.8:8080/"
function GetJSON(){
  URL_JSON = IP + "WEB_SERVER/";
  fetch(URL_JSON)
    .then(response => response.json())
    .then(Device =>{
        Quat_1 = Device.ID_QUAT_1.STATUS;
        Quat_2 = Device.ID_QUAT_2.STATUS;
        Quat_3 = Device.ID_QUAT_3.STATUS;
        Quat_4 = Device.ID_QUAT_4.STATUS;
        Quat_5 = Device.ID_QUAT_5.STATUS;
        Quat_6 = Device.ID_QUAT_6.STATUS;
        Quat_7 = Device.ID_QUAT_7.STATUS;
        Quat_8 = Device.ID_QUAT_8.STATUS;
        Quat_9 = Device.ID_QUAT_9.STATUS;
        Quat_10 = Device.ID_QUAT_10.STATUS;

        Quat_Tran_1 = Device.ID_QUATTRAN_1.STATUS;
        Quat_Tran_2 = Device.ID_QUATTRAN_2.STATUS;
        Quat_Tran_3 = Device.ID_QUATTRAN_3.STATUS;
        Quat_Tran_4 = Device.ID_QUATTRAN_4.STATUS;
        Quat_Tran_5 = Device.ID_QUATTRAN_5.STATUS;
        Quat_Tran_6 = Device.ID_QUATTRAN_6.STATUS;
        Quat_Tran_7 = Device.ID_QUATTRAN_7.STATUS;
        Quat_Tran_8 = Device.ID_QUATTRAN_8.STATUS;
        Quat_Tran_9 = Device.ID_QUATTRAN_9.STATUS;
        Quat_Tran_10 = Device.ID_QUATTRAN_10.STATUS;

        BongDen_1 = Device.ID_BONGDEN_1.STATUS;
        BongDen_2 = Device.ID_BONGDEN_2.STATUS;
        BongDen_3 = Device.ID_BONGDEN_3.STATUS;
        BongDen_4 = Device.ID_BONGDEN_4.STATUS;
        BongDen_5 = Device.ID_BONGDEN_5.STATUS;
        BongDen_6 = Device.ID_BONGDEN_6.STATUS;
        BongDen_7 = Device.ID_BONGDEN_7.STATUS;
        BongDen_8 = Device.ID_BONGDEN_8.STATUS;
        BongDen_9 = Device.ID_BONGDEN_9.STATUS;
        BongDen_10 = Device.ID_BONGDEN_10.STATUS;

        MayChieu_1 = Device.ID_MAYCHIEU_1.STATUS;
        MayChieu_2 = Device.ID_MAYCHIEU_2.STATUS;
        MayChieu_3 = Device.ID_MAYCHIEU_3.STATUS;
        MayChieu_4 = Device.ID_MAYCHIEU_4.STATUS;
        MayChieu_5 = Device.ID_MAYCHIEU_5.STATUS;
        MayChieu_6 = Device.ID_MAYCHIEU_6.STATUS;
        MayChieu_7 = Device.ID_MAYCHIEU_7.STATUS;
        MayChieu_8 = Device.ID_MAYCHIEU_8.STATUS;
        MayChieu_9 = Device.ID_MAYCHIEU_9.STATUS;
        MayChieu_10 = Device.ID_MAYCHIEU_10.STATUS;

        DieuHoa_1 = Device.ID_DIEUHOA_1.STATUS;
        DieuHoa_2 = Device.ID_DIEUHOA_2.STATUS;
        DieuHoa_3 = Device.ID_DIEUHOA_3.STATUS;
        DieuHoa_4 = Device.ID_DIEUHOA_4.STATUS;
        DieuHoa_5 = Device.ID_DIEUHOA_5.STATUS;
        DieuHoa_6 = Device.ID_DIEUHOA_6.STATUS;
        DieuHoa_7 = Device.ID_DIEUHOA_7.STATUS;
        DieuHoa_8 = Device.ID_DIEUHOA_8.STATUS;
        DieuHoa_9 = Device.ID_DIEUHOA_9.STATUS;
        DieuHoa_10 = Device.ID_DIEUHOA_10.STATUS;

        Anh_TB_1 = Device.ID_1.TYPE;
        Anh_TB_2 = Device.ID_2.TYPE;
        Anh_TB_3 = Device.ID_3.TYPE;
        Anh_TB_4 = Device.ID_4.TYPE;
        Anh_TB_5 = Device.ID_5.TYPE;
        Anh_TB_6 = Device.ID_6.TYPE;
        Anh_TB_7 = Device.ID_7.TYPE;
        Anh_TB_8 = Device.ID_8.TYPE;
        Anh_TB_9 = Device.ID_9.TYPE;
        Anh_TB_10 = Device.ID_10.TYPE;

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
        var element_6 = document.getElementById("IMG__6");
        var temp_6 = document.getElementById("TEMP__6");
        var element_7 = document.getElementById("IMG__7");
        var temp_7 = document.getElementById("TEMP__7");
        var element_8 = document.getElementById("IMG__8");
        var temp_8 = document.getElementById("TEMP__8");
        var element_9 = document.getElementById("IMG__9");
        var temp_9 = document.getElementById("TEMP__9");
        var element_10 = document.getElementById("IMG__10");
        var temp_10 = document.getElementById("TEMP__10");
        var ON_OFF_QUAT__1 = document.getElementById("QUAT__1");
        var ON_OFF_BONGDEN__1 = document.getElementById("BongDen__1");
        var ON_OFF_QUATTRAN__1 = document.getElementById("QuatTran__1");
        var ON_OFF_DIEUHOA__1 = document.getElementById("DieuHoa__1");
        var ON_OFF_QUAT__2 = document.getElementById("QUAT__2");
        var ON_OFF_BONGDEN__2 = document.getElementById("BongDen__2");
        var ON_OFF_QUATTRAN__2 = document.getElementById("QuatTran__2");
        var ON_OFF_DIEUHOA__2 = document.getElementById("DieuHoa__2");
        var ON_OFF_QUAT__3 = document.getElementById("QUAT__3");
        var ON_OFF_BONGDEN__3 = document.getElementById("BongDen__3");
        var ON_OFF_QUATTRAN__3 = document.getElementById("QuatTran__3");
        var ON_OFF_DIEUHOA__3 = document.getElementById("DieuHoa__3");
        var ON_OFF_QUAT__4 = document.getElementById("QUAT__4");
        var ON_OFF_BONGDEN__4 = document.getElementById("BongDen__4");
        var ON_OFF_QUATTRAN__4 = document.getElementById("QuatTran__4");
        var ON_OFF_DIEUHOA__4 = document.getElementById("DieuHoa__4");
        var ON_OFF_QUAT__5 = document.getElementById("QUAT__5");
        var ON_OFF_BONGDEN__5 = document.getElementById("BongDen__5");
        var ON_OFF_QUATTRAN__5 = document.getElementById("QuatTran__5");
        var ON_OFF_DIEUHOA__5 = document.getElementById("DieuHoa__5");
        var ON_OFF_QUAT__6 = document.getElementById("QUAT__6");
        var ON_OFF_BONGDEN__6 = document.getElementById("BongDen__6");
        var ON_OFF_QUATTRAN__6 = document.getElementById("QuatTran__6");
        var ON_OFF_DIEUHOA__6 = document.getElementById("DieuHoa__6");
        var ON_OFF_QUAT__7 = document.getElementById("QUAT__7");
        var ON_OFF_BONGDEN__7 = document.getElementById("BongDen__7");
        var ON_OFF_QUATTRAN__7 = document.getElementById("QuatTran__7");
        var ON_OFF_DIEUHOA__7 = document.getElementById("DieuHoa__7");
        var ON_OFF_QUAT__8 = document.getElementById("QUAT__8");
        var ON_OFF_BONGDEN__8 = document.getElementById("BongDen__8");
        var ON_OFF_QUATTRAN__8 = document.getElementById("QuatTran__8");
        var ON_OFF_DIEUHOA__8 = document.getElementById("DieuHoa__8");
        var ON_OFF_QUAT__9 = document.getElementById("QUAT__9");
        var ON_OFF_BONGDEN__9 = document.getElementById("BongDen__9");
        var ON_OFF_QUATTRAN__9 = document.getElementById("QuatTran__9");
        var ON_OFF_DIEUHOA__9 = document.getElementById("DieuHoa__9");
        var ON_OFF_QUAT__10 = document.getElementById("QUAT__10");
        var ON_OFF_BONGDEN__10 = document.getElementById("BongDen__10");
        var ON_OFF_QUATTRAN__10 = document.getElementById("QuatTran__10");
        var ON_OFF_DIEUHOA__10 = document.getElementById("DieuHoa__10");

        if(Anh_TB_1 == 'Quạt' && Quat_1 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_1.classList.add("off");
            element_1.classList.remove("on");
            temp_1.classList.add("Electric_fan");
            temp_1.classList.remove("Light");
            temp_1.classList.remove("Ceiling_fans");
            temp_1.classList.remove("Water_pumps");
            temp_1.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_1 == 'Quạt' && Quat_1 == 1){
            console.log('Quạt nhận giá trị ON')
            element_1.classList.add("on");
            element_1.classList.remove("off");
            temp_1.classList.add("Electric_fan");
            temp_1.classList.remove("Light");
            temp_1.classList.remove("Ceiling_fans");
            temp_1.classList.remove("Water_pumps");
            temp_1.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_1 == 'Quạt trần' && Quat_Tran_1 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_1.classList.add("off");
            element_1.classList.remove("on");
            temp_1.classList.add("Ceiling_fans");
            temp_1.classList.remove("Light");
            temp_1.classList.remove("Water_pumps");
            temp_1.classList.remove("Electric_fan");
            temp_1.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_1 == 'Quạt trần' && Quat_Tran_1 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_1.classList.add("on");
            element_1.classList.remove("off");
            temp_1.classList.add("Ceiling_fans");
            temp_1.classList.remove("Light");
            temp_1.classList.remove("Water_pumps");
            temp_1.classList.remove("Electric_fan");
            temp_1.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_1 == 'Bóng đèn' && BongDen_1 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_1.classList.add("off");
            element_1.classList.remove("on");
            temp_1.classList.add("Light");
            temp_1.classList.remove("Ceiling_fans");
            temp_1.classList.remove("Water_pumps");
            temp_1.classList.remove("Electric_fan");
            temp_1.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_1 == 'Bóng đèn' && BongDen_1 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_1.classList.add("on");
            element_1.classList.remove("off");
            temp_1.classList.add("Light");
            temp_1.classList.remove("Ceiling_fans");
            temp_1.classList.remove("Water_pumps");
            temp_1.classList.remove("Electric_fan");
            temp_1.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_1 == 'Điều hòa' && DieuHoa_1 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_1.classList.add("off");
            element_1.classList.remove("on");
            temp_1.classList.add("Air_Conditioning");
            temp_1.classList.remove("Ceiling_fans");
            temp_1.classList.remove("Water_pumps");
            temp_1.classList.remove("Electric_fan");
            temp_1.classList.remove("Light");
        }
        if(Anh_TB_1 == 'Điều hòa' && DieuHoa_1 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_1.classList.add("on");
            element_1.classList.remove("off");
            temp_1.classList.add("Air_Conditioning");
            temp_1.classList.remove("Ceiling_fans");
            temp_1.classList.remove("Water_pumps");
            temp_1.classList.remove("Electric_fan");
            temp_1.classList.remove("Light");
        }
        if(Anh_TB_2 == 'Quạt' && Quat_2 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_2.classList.add("off");
            element_2.classList.remove("on");
            temp_2.classList.add("Electric_fan");
            temp_2.classList.remove("Light");
            temp_2.classList.remove("Ceiling_fans");
            temp_2.classList.remove("Water_pumps");
            temp_2.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_2 == 'Quạt' && Quat_2 == 1){
            console.log('Quạt nhận giá trị ON')
            element_2.classList.add("on");
            element_2.classList.remove("off");
            temp_2.classList.add("Electric_fan");
            temp_2.classList.remove("Light");
            temp_2.classList.remove("Ceiling_fans");
            temp_2.classList.remove("Water_pumps");
            temp_2.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_2 == 'Quạt trần' && Quat_Tran_2 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_2.classList.add("off");
            element_2.classList.remove("on");
            temp_2.classList.add("Ceiling_fans");
            temp_2.classList.remove("Light");
            temp_2.classList.remove("Water_pumps");
            temp_2.classList.remove("Electric_fan");
            temp_2.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_2 == 'Quạt trần' && Quat_Tran_2 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_2.classList.add("on");
            element_2.classList.remove("off");
            temp_2.classList.add("Ceiling_fans");
            temp_2.classList.remove("Light");
            temp_2.classList.remove("Water_pumps");
            temp_2.classList.remove("Electric_fan");
            temp_2.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_2 == 'Bóng đèn' && BongDen_2 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_2.classList.add("off");
            element_2.classList.remove("on");
            temp_2.classList.add("Light");
            temp_2.classList.remove("Ceiling_fans");
            temp_2.classList.remove("Water_pumps");
            temp_2.classList.remove("Electric_fan");
            temp_2.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_2 == 'Bóng đèn' && BongDen_2 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_2.classList.add("on");
            element_2.classList.remove("off");
            temp_2.classList.add("Light");
            temp_2.classList.remove("Ceiling_fans");
            temp_2.classList.remove("Water_pumps");
            temp_2.classList.remove("Electric_fan");
            temp_2.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_2 == 'Điều hòa' && DieuHoa_2 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_2.classList.add("off");
            element_2.classList.remove("on");
            temp_2.classList.add("Air_Conditioning");
            temp_2.classList.remove("Ceiling_fans");
            temp_2.classList.remove("Water_pumps");
            temp_2.classList.remove("Electric_fan");
            temp_2.classList.remove("Light");
        }
        if(Anh_TB_2 == 'Điều hòa' && DieuHoa_2 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_2.classList.add("on");
            element_2.classList.remove("off");
            temp_2.classList.add("Air_Conditioning");
            temp_2.classList.remove("Ceiling_fans");
            temp_2.classList.remove("Water_pumps");
            temp_2.classList.remove("Electric_fan");
            temp_2.classList.remove("Light");
        }

//
        if(Anh_TB_3 == 'Quạt' && Quat_3 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_3.classList.add("off");
            element_3.classList.remove("on");
            temp_3.classList.add("Electric_fan");
            temp_3.classList.remove("Light");
            temp_3.classList.remove("Ceiling_fans");
            temp_3.classList.remove("Water_pumps");
            temp_3.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_3 == 'Quạt' && Quat_3 == 1){
            console.log('Quạt nhận giá trị ON')
            element_3.classList.add("on");
            element_3.classList.remove("off");
            temp_3.classList.add("Electric_fan");
            temp_3.classList.remove("Light");
            temp_3.classList.remove("Ceiling_fans");
            temp_3.classList.remove("Water_pumps");
            temp_3.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_3 == 'Quạt trần' && Quat_Tran_3 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_3.classList.add("off");
            element_3.classList.remove("on");
            temp_3.classList.add("Ceiling_fans");
            temp_3.classList.remove("Light");
            temp_3.classList.remove("Water_pumps");
            temp_3.classList.remove("Electric_fan");
            temp_3.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_3 == 'Quạt trần' && Quat_Tran_3 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_3.classList.add("on");
            element_3.classList.remove("off");
            temp_3.classList.add("Ceiling_fans");
            temp_3.classList.remove("Light");
            temp_3.classList.remove("Water_pumps");
            temp_3.classList.remove("Electric_fan");
            temp_3.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_3 == 'Bóng đèn' && BongDen_3 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_3.classList.add("off");
            element_3.classList.remove("on");
            temp_3.classList.add("Light");
            temp_3.classList.remove("Ceiling_fans");
            temp_3.classList.remove("Water_pumps");
            temp_3.classList.remove("Electric_fan");
            temp_3.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_3 == 'Bóng đèn' && BongDen_3 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_3.classList.add("on");
            element_3.classList.remove("off");
            temp_3.classList.add("Light");
            temp_3.classList.remove("Ceiling_fans");
            temp_3.classList.remove("Water_pumps");
            temp_3.classList.remove("Electric_fan");
            temp_3.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_3 == 'Điều hòa' && DieuHoa_3 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_3.classList.add("off");
            element_3.classList.remove("on");
            temp_3.classList.add("Air_Conditioning");
            temp_3.classList.remove("Ceiling_fans");
            temp_3.classList.remove("Water_pumps");
            temp_3.classList.remove("Electric_fan");
            temp_3.classList.remove("Light");
        }
        if(Anh_TB_3 == 'Điều hòa' && DieuHoa_3 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_3.classList.add("on");
            element_3.classList.remove("off");
            temp_3.classList.add("Air_Conditioning");
            temp_3.classList.remove("Ceiling_fans");
            temp_3.classList.remove("Water_pumps");
            temp_3.classList.remove("Electric_fan");
            temp_3.classList.remove("Light");
        }

//
        if(Anh_TB_4 == 'Quạt' && Quat_4 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_4.classList.add("off");
            element_4.classList.remove("on");
            temp_4.classList.add("Electric_fan");
            temp_4.classList.remove("Light");
            temp_4.classList.remove("Ceiling_fans");
            temp_4.classList.remove("Water_pumps");
            temp_4.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_4 == 'Quạt' && Quat_4 == 1){
            console.log('Quạt nhận giá trị ON')
            element_4.classList.add("on");
            element_4.classList.remove("off");
            temp_4.classList.add("Electric_fan");
            temp_4.classList.remove("Light");
            temp_4.classList.remove("Ceiling_fans");
            temp_4.classList.remove("Water_pumps");
            temp_4.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_4 == 'Quạt trần' && Quat_Tran_4 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_4.classList.add("off");
            element_4.classList.remove("on");
            temp_4.classList.add("Ceiling_fans");
            temp_4.classList.remove("Light");
            temp_4.classList.remove("Water_pumps");
            temp_4.classList.remove("Electric_fan");
            temp_4.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_4 == 'Quạt trần' && Quat_Tran_4 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_4.classList.add("on");
            element_4.classList.remove("off");
            temp_4.classList.add("Ceiling_fans");
            temp_4.classList.remove("Light");
            temp_4.classList.remove("Water_pumps");
            temp_4.classList.remove("Electric_fan");
            temp_4.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_4 == 'Bóng đèn' && BongDen_4 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_4.classList.add("off");
            element_4.classList.remove("on");
            temp_4.classList.add("Light");
            temp_4.classList.remove("Ceiling_fans");
            temp_4.classList.remove("Water_pumps");
            temp_4.classList.remove("Electric_fan");
            temp_4.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_4 == 'Bóng đèn' && BongDen_4 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_4.classList.add("on");
            element_4.classList.remove("off");
            temp_4.classList.add("Light");
            temp_4.classList.remove("Ceiling_fans");
            temp_4.classList.remove("Water_pumps");
            temp_4.classList.remove("Electric_fan");
            temp_4.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_4 == 'Điều hòa' && DieuHoa_4 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_4.classList.add("off");
            element_4.classList.remove("on");
            temp_4.classList.add("Air_Conditioning");
            temp_4.classList.remove("Ceiling_fans");
            temp_4.classList.remove("Water_pumps");
            temp_4.classList.remove("Electric_fan");
            temp_4.classList.remove("Light");
        }
        if(Anh_TB_4 == 'Điều hòa' && DieuHoa_4 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_4.classList.add("on");
            element_4.classList.remove("off");
            temp_4.classList.add("Air_Conditioning");
            temp_4.classList.remove("Ceiling_fans");
            temp_4.classList.remove("Water_pumps");
            temp_4.classList.remove("Electric_fan");
            temp_4.classList.remove("Light");
        }

//
        if(Anh_TB_5 == 'Quạt' && Quat_5 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_5.classList.add("off");
            element_5.classList.remove("on");
            temp_5.classList.add("Electric_fan");
            temp_5.classList.remove("Light");
            temp_5.classList.remove("Ceiling_fans");
            temp_5.classList.remove("Water_pumps");
            temp_5.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_5 == 'Quạt' && Quat_5 == 1){
            console.log('Quạt nhận giá trị ON')
            element_5.classList.add("on");
            element_5.classList.remove("off");
            temp_5.classList.add("Electric_fan");
            temp_5.classList.remove("Light");
            temp_5.classList.remove("Ceiling_fans");
            temp_5.classList.remove("Water_pumps");
            temp_5.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_5 == 'Quạt trần' && Quat_Tran_5 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_5.classList.add("off");
            element_5.classList.remove("on");
            temp_5.classList.add("Ceiling_fans");
            temp_5.classList.remove("Light");
            temp_5.classList.remove("Water_pumps");
            temp_5.classList.remove("Electric_fan");
            temp_5.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_5 == 'Quạt trần' && Quat_Tran_5 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_5.classList.add("on");
            element_5.classList.remove("off");
            temp_5.classList.add("Ceiling_fans");
            temp_5.classList.remove("Light");
            temp_5.classList.remove("Water_pumps");
            temp_5.classList.remove("Electric_fan");
            temp_5.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_5 == 'Bóng đèn' && BongDen_5 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_5.classList.add("off");
            element_5.classList.remove("on");
            temp_5.classList.add("Light");
            temp_5.classList.remove("Ceiling_fans");
            temp_5.classList.remove("Water_pumps");
            temp_5.classList.remove("Electric_fan");
            temp_5.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_5 == 'Bóng đèn' && BongDen_5 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_5.classList.add("on");
            element_5.classList.remove("off");
            temp_5.classList.add("Light");
            temp_5.classList.remove("Ceiling_fans");
            temp_5.classList.remove("Water_pumps");
            temp_5.classList.remove("Electric_fan");
            temp_5.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_5 == 'Điều hòa' && DieuHoa_5 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_5.classList.add("off");
            element_5.classList.remove("on");
            temp_5.classList.add("Air_Conditioning");
            temp_5.classList.remove("Ceiling_fans");
            temp_5.classList.remove("Water_pumps");
            temp_5.classList.remove("Electric_fan");
            temp_5.classList.remove("Light");
        }
        if(Anh_TB_5 == 'Điều hòa' && DieuHoa_5 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_5.classList.add("on");
            element_5.classList.remove("off");
            temp_5.classList.add("Air_Conditioning");
            temp_5.classList.remove("Ceiling_fans");
            temp_5.classList.remove("Water_pumps");
            temp_5.classList.remove("Electric_fan");
            temp_5.classList.remove("Light");
        }

        if(Anh_TB_6 == 'Quạt' && Quat_6 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_6.classList.add("off");
            element_6.classList.remove("on");
            temp_6.classList.add("Electric_fan");
            temp_6.classList.remove("Light");
            temp_6.classList.remove("Ceiling_fans");
            temp_6.classList.remove("Water_pumps");
            temp_6.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_6 == 'Quạt' && Quat_6 == 1){
            console.log('Quạt nhận giá trị ON')
            element_6.classList.add("on");
            element_6.classList.remove("off");
            temp_6.classList.add("Electric_fan");
            temp_6.classList.remove("Light");
            temp_6.classList.remove("Ceiling_fans");
            temp_6.classList.remove("Water_pumps");
            temp_6.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_6 == 'Quạt trần' && Quat_Tran_6 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_6.classList.add("off");
            element_6.classList.remove("on");
            temp_6.classList.add("Ceiling_fans");
            temp_6.classList.remove("Light");
            temp_6.classList.remove("Water_pumps");
            temp_6.classList.remove("Electric_fan");
            temp_6.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_6 == 'Quạt trần' && Quat_Tran_6 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_6.classList.add("on");
            element_6.classList.remove("off");
            temp_6.classList.add("Ceiling_fans");
            temp_6.classList.remove("Light");
            temp_6.classList.remove("Water_pumps");
            temp_6.classList.remove("Electric_fan");
            temp_6.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_6 == 'Bóng đèn' && BongDen_6 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_6.classList.add("off");
            element_6.classList.remove("on");
            temp_6.classList.add("Light");
            temp_6.classList.remove("Ceiling_fans");
            temp_6.classList.remove("Water_pumps");
            temp_6.classList.remove("Electric_fan");
            temp_6.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_6 == 'Bóng đèn' && BongDen_6 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_6.classList.add("on");
            element_6.classList.remove("off");
            temp_6.classList.add("Light");
            temp_6.classList.remove("Ceiling_fans");
            temp_6.classList.remove("Water_pumps");
            temp_6.classList.remove("Electric_fan");
            temp_6.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_6 == 'Điều hòa' && DieuHoa_6 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_6.classList.add("off");
            element_6.classList.remove("on");
            temp_6.classList.add("Air_Conditioning");
            temp_6.classList.remove("Ceiling_fans");
            temp_6.classList.remove("Water_pumps");
            temp_6.classList.remove("Electric_fan");
            temp_6.classList.remove("Light");
        }
        if(Anh_TB_6 == 'Điều hòa' && DieuHoa_6 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_6.classList.add("on");
            element_6.classList.remove("off");
            temp_6.classList.add("Air_Conditioning");
            temp_6.classList.remove("Ceiling_fans");
            temp_6.classList.remove("Water_pumps");
            temp_6.classList.remove("Electric_fan");
            temp_6.classList.remove("Light");
        }


        if(Anh_TB_7 == 'Quạt' && Quat_7 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_7.classList.add("off");
            element_7.classList.remove("on");
            temp_7.classList.add("Electric_fan");
            temp_7.classList.remove("Light");
            temp_7.classList.remove("Ceiling_fans");
            temp_7.classList.remove("Water_pumps");
            temp_7.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_7 == 'Quạt' && Quat_7 == 1){
            console.log('Quạt nhận giá trị ON')
            element_7.classList.add("on");
            element_7.classList.remove("off");
            temp_7.classList.add("Electric_fan");
            temp_7.classList.remove("Light");
            temp_7.classList.remove("Ceiling_fans");
            temp_7.classList.remove("Water_pumps");
            temp_7.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_7 == 'Quạt trần' && Quat_Tran_7 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_7.classList.add("off");
            element_7.classList.remove("on");
            temp_7.classList.add("Ceiling_fans");
            temp_7.classList.remove("Light");
            temp_7.classList.remove("Water_pumps");
            temp_7.classList.remove("Electric_fan");
            temp_7.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_7 == 'Quạt trần' && Quat_Tran_7 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_7.classList.add("on");
            element_7.classList.remove("off");
            temp_7.classList.add("Ceiling_fans");
            temp_7.classList.remove("Light");
            temp_7.classList.remove("Water_pumps");
            temp_7.classList.remove("Electric_fan");
            temp_7.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_7 == 'Bóng đèn' && BongDen_7 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_7.classList.add("off");
            element_7.classList.remove("on");
            temp_7.classList.add("Light");
            temp_7.classList.remove("Ceiling_fans");
            temp_7.classList.remove("Water_pumps");
            temp_7.classList.remove("Electric_fan");
            temp_7.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_7 == 'Bóng đèn' && BongDen_7 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_7.classList.add("on");
            element_7.classList.remove("off");
            temp_7.classList.add("Light");
            temp_7.classList.remove("Ceiling_fans");
            temp_7.classList.remove("Water_pumps");
            temp_7.classList.remove("Electric_fan");
            temp_7.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_7 == 'Điều hòa' && DieuHoa_7 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_7.classList.add("off");
            element_7.classList.remove("on");
            temp_7.classList.add("Air_Conditioning");
            temp_7.classList.remove("Ceiling_fans");
            temp_7.classList.remove("Water_pumps");
            temp_7.classList.remove("Electric_fan");
            temp_7.classList.remove("Light");
        }
        if(Anh_TB_7 == 'Điều hòa' && DieuHoa_7 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_7.classList.add("on");
            element_7.classList.remove("off");
            temp_7.classList.add("Air_Conditioning");
            temp_7.classList.remove("Ceiling_fans");
            temp_7.classList.remove("Water_pumps");
            temp_7.classList.remove("Electric_fan");
            temp_7.classList.remove("Light");
        }

//
        if(Anh_TB_8 == 'Quạt' && Quat_8 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_8.classList.add("off");
            element_8.classList.remove("on");
            temp_8.classList.add("Electric_fan");
            temp_8.classList.remove("Light");
            temp_8.classList.remove("Ceiling_fans");
            temp_8.classList.remove("Water_pumps");
            temp_8.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_8 == 'Quạt' && Quat_8 == 1){
            console.log('Quạt nhận giá trị ON')
            element_8.classList.add("on");
            element_8.classList.remove("off");
            temp_8.classList.add("Electric_fan");
            temp_8.classList.remove("Light");
            temp_8.classList.remove("Ceiling_fans");
            temp_8.classList.remove("Water_pumps");
            temp_8.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_8 == 'Quạt trần' && Quat_Tran_8 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_8.classList.add("off");
            element_8.classList.remove("on");
            temp_8.classList.add("Ceiling_fans");
            temp_8.classList.remove("Light");
            temp_8.classList.remove("Water_pumps");
            temp_8.classList.remove("Electric_fan");
            temp_8.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_8 == 'Quạt trần' && Quat_Tran_8 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_8.classList.add("on");
            element_8.classList.remove("off");
            temp_8.classList.add("Ceiling_fans");
            temp_8.classList.remove("Light");
            temp_8.classList.remove("Water_pumps");
            temp_8.classList.remove("Electric_fan");
            temp_8.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_8 == 'Bóng đèn' && BongDen_8 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_8.classList.add("off");
            element_8.classList.remove("on");
            temp_8.classList.add("Light");
            temp_8.classList.remove("Ceiling_fans");
            temp_8.classList.remove("Water_pumps");
            temp_8.classList.remove("Electric_fan");
            temp_8.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_8 == 'Bóng đèn' && BongDen_8 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_8.classList.add("on");
            element_8.classList.remove("off");
            temp_8.classList.add("Light");
            temp_8.classList.remove("Ceiling_fans");
            temp_8.classList.remove("Water_pumps");
            temp_8.classList.remove("Electric_fan");
            temp_8.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_8 == 'Điều hòa' && DieuHoa_8 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_8.classList.add("off");
            element_8.classList.remove("on");
            temp_8.classList.add("Air_Conditioning");
            temp_8.classList.remove("Ceiling_fans");
            temp_8.classList.remove("Water_pumps");
            temp_8.classList.remove("Electric_fan");
            temp_8.classList.remove("Light");
        }
        if(Anh_TB_8 == 'Điều hòa' && DieuHoa_8 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_8.classList.add("on");
            element_8.classList.remove("off");
            temp_8.classList.add("Air_Conditioning");
            temp_8.classList.remove("Ceiling_fans");
            temp_8.classList.remove("Water_pumps");
            temp_8.classList.remove("Electric_fan");
            temp_8.classList.remove("Light");
        }

//
        if(Anh_TB_9 == 'Quạt' && Quat_9 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_9.classList.add("off");
            element_9.classList.remove("on");
            temp_9.classList.add("Electric_fan");
            temp_9.classList.remove("Light");
            temp_9.classList.remove("Ceiling_fans");
            temp_9.classList.remove("Water_pumps");
            temp_9.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_9 == 'Quạt' && Quat_9 == 1){
            console.log('Quạt nhận giá trị ON')
            element_9.classList.add("on");
            element_9.classList.remove("off");
            temp_9.classList.add("Electric_fan");
            temp_9.classList.remove("Light");
            temp_9.classList.remove("Ceiling_fans");
            temp_9.classList.remove("Water_pumps");
            temp_9.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_9 == 'Quạt trần' && Quat_Tran_9 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_9.classList.add("off");
            element_9.classList.remove("on");
            temp_9.classList.add("Ceiling_fans");
            temp_9.classList.remove("Light");
            temp_9.classList.remove("Water_pumps");
            temp_9.classList.remove("Electric_fan");
            temp_9.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_9 == 'Quạt trần' && Quat_Tran_9 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_9.classList.add("on");
            element_9.classList.remove("off");
            temp_9.classList.add("Ceiling_fans");
            temp_9.classList.remove("Light");
            temp_9.classList.remove("Water_pumps");
            temp_9.classList.remove("Electric_fan");
            temp_9.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_9 == 'Bóng đèn' && BongDen_9 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_9.classList.add("off");
            element_9.classList.remove("on");
            temp_9.classList.add("Light");
            temp_9.classList.remove("Ceiling_fans");
            temp_9.classList.remove("Water_pumps");
            temp_9.classList.remove("Electric_fan");
            temp_9.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_9 == 'Bóng đèn' && BongDen_9 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_9.classList.add("on");
            element_9.classList.remove("off");
            temp_9.classList.add("Light");
            temp_9.classList.remove("Ceiling_fans");
            temp_9.classList.remove("Water_pumps");
            temp_9.classList.remove("Electric_fan");
            temp_9.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_9 == 'Điều hòa' && DieuHoa_9 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_9.classList.add("off");
            element_9.classList.remove("on");
            temp_9.classList.add("Air_Conditioning");
            temp_9.classList.remove("Ceiling_fans");
            temp_9.classList.remove("Water_pumps");
            temp_9.classList.remove("Electric_fan");
            temp_9.classList.remove("Light");
        }
        if(Anh_TB_9 == 'Điều hòa' && DieuHoa_9 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_9.classList.add("on");
            element_9.classList.remove("off");
            temp_9.classList.add("Air_Conditioning");
            temp_9.classList.remove("Ceiling_fans");
            temp_9.classList.remove("Water_pumps");
            temp_9.classList.remove("Electric_fan");
            temp_9.classList.remove("Light");
        }

//
        if(Anh_TB_10 == 'Quạt' && Quat_10 == 0){
            console.log('Quạt nhận giá trị OFF')
            element_10.classList.add("off");
            element_10.classList.remove("on");
            temp_10.classList.add("Electric_fan");
            temp_10.classList.remove("Light");
            temp_10.classList.remove("Ceiling_fans");
            temp_10.classList.remove("Water_pumps");
            temp_10.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_10 == 'Quạt' && Quat_10 == 1){
            console.log('Quạt nhận giá trị ON')
            element_10.classList.add("on");
            element_10.classList.remove("off");
            temp_10.classList.add("Electric_fan");
            temp_10.classList.remove("Light");
            temp_10.classList.remove("Ceiling_fans");
            temp_10.classList.remove("Water_pumps");
            temp_10.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_10 == 'Quạt trần' && Quat_Tran_10 == 0){
            console.log('Quạt trần nhận giá trị OFF')
            element_10.classList.add("off");
            element_10.classList.remove("on");
            temp_10.classList.add("Ceiling_fans");
            temp_10.classList.remove("Light");
            temp_10.classList.remove("Water_pumps");
            temp_10.classList.remove("Electric_fan");
            temp_10.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_10 == 'Quạt trần' && Quat_Tran_10 == 1){
            console.log('Quạt trần nhận giá trị ON')
            element_10.classList.add("on");
            element_10.classList.remove("off");
            temp_10.classList.add("Ceiling_fans");
            temp_10.classList.remove("Light");
            temp_10.classList.remove("Water_pumps");
            temp_10.classList.remove("Electric_fan");
            temp_10.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_10 == 'Bóng đèn' && BongDen_10 == 0){
            console.log('Bóng đèn nhận giá trị OFF')
            element_10.classList.add("off");
            element_10.classList.remove("on");
            temp_10.classList.add("Light");
            temp_10.classList.remove("Ceiling_fans");
            temp_10.classList.remove("Water_pumps");
            temp_10.classList.remove("Electric_fan");
            temp_10.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_10 == 'Bóng đèn' && BongDen_10 == 1){
            console.log('Bóng đèn nhận giá trị ON')
            element_10.classList.add("on");
            element_10.classList.remove("off");
            temp_10.classList.add("Light");
            temp_10.classList.remove("Ceiling_fans");
            temp_10.classList.remove("Water_pumps");
            temp_10.classList.remove("Electric_fan");
            temp_10.classList.remove("Air_Conditioning");
        }
        if(Anh_TB_10 == 'Điều hòa' && DieuHoa_10 == 0){
            console.log('Điều hòa nhận giá trị OFF')
            element_10.classList.add("off");
            element_10.classList.remove("on");
            temp_10.classList.add("Air_Conditioning");
            temp_10.classList.remove("Ceiling_fans");
            temp_10.classList.remove("Water_pumps");
            temp_10.classList.remove("Electric_fan");
            temp_10.classList.remove("Light");
        }
        if(Anh_TB_10 == 'Điều hòa' && DieuHoa_10 == 1){
            console.log('Điều hòa nhận giá trị ON')
            element_10.classList.add("on");
            element_10.classList.remove("off");
            temp_10.classList.add("Air_Conditioning");
            temp_10.classList.remove("Ceiling_fans");
            temp_10.classList.remove("Water_pumps");
            temp_10.classList.remove("Electric_fan");
            temp_10.classList.remove("Light");
        }
//        =======================================
        if(Quat_1 == 0){
            ON_OFF_QUAT__1.classList.add("OFF");
            ON_OFF_QUAT__1.classList.remove("ON");
        }
        if(Quat_1 == 1){
            ON_OFF_QUAT__1.classList.add("ON");
            ON_OFF_QUAT__1.classList.remove("OFF");
        }
        if(Quat_Tran_1 == 0){
            ON_OFF_QUATTRAN__1.classList.add("OFF");
            ON_OFF_QUATTRAN__1.classList.remove("ON");
        }
        if(Quat_Tran_1 == 1){
            ON_OFF_QUATTRAN__1.classList.add("ON");
            ON_OFF_QUATTRAN__1.classList.remove("OFF");
        }
        if(BongDen_1 == 0){
            ON_OFF_BONGDEN__1.classList.add("OFF");
            ON_OFF_BONGDEN__1.classList.remove("ON");
        }
        if(BongDen_1 == 1){
            ON_OFF_BONGDEN__1.classList.add("ON");
            ON_OFF_BONGDEN__1.classList.remove("OFF");
        }
        if(DieuHoa_1 == 0){
            ON_OFF_DIEUHOA__1.classList.add("OFF");
            ON_OFF_DIEUHOA__1.classList.remove("ON");
        }
        if(DieuHoa_1 == 1){
            ON_OFF_DIEUHOA__1.classList.add("ON");
            ON_OFF_DIEUHOA__1.classList.remove("OFF");
        }

//        =======================================
        if(Quat_2 == 0){
            ON_OFF_QUAT__2.classList.add("OFF");
            ON_OFF_QUAT__2.classList.remove("ON");
        }
        if(Quat_2 == 1){
            ON_OFF_QUAT__2.classList.add("ON");
            ON_OFF_QUAT__2.classList.remove("OFF");
        }
        if(Quat_Tran_2 == 0){
            ON_OFF_QUATTRAN__2.classList.add("OFF");
            ON_OFF_QUATTRAN__2.classList.remove("ON");
        }
        if(Quat_Tran_2 == 1){
            ON_OFF_QUATTRAN__2.classList.add("ON");
            ON_OFF_QUATTRAN__2.classList.remove("OFF");
        }
        if(BongDen_2 == 0){
            ON_OFF_BONGDEN__2.classList.add("OFF");
            ON_OFF_BONGDEN__2.classList.remove("ON");
        }
        if(BongDen_2 == 1){
            ON_OFF_BONGDEN__2.classList.add("ON");
            ON_OFF_BONGDEN__2.classList.remove("OFF");
        }
        if(DieuHoa_2 == 0){
            ON_OFF_DIEUHOA__2.classList.add("OFF");
            ON_OFF_DIEUHOA__2.classList.remove("ON");
        }
        if(DieuHoa_2 == 1){
            ON_OFF_DIEUHOA__2.classList.add("ON");
            ON_OFF_DIEUHOA__2.classList.remove("OFF");
        }

//        =======================================
        if(Quat_3 == 0){
            ON_OFF_QUAT__3.classList.add("OFF");
            ON_OFF_QUAT__3.classList.remove("ON");
        }
        if(Quat_3 == 1){
            ON_OFF_QUAT__3.classList.add("ON");
            ON_OFF_QUAT__3.classList.remove("OFF");
        }
        if(Quat_Tran_3 == 0){
            ON_OFF_QUATTRAN__3.classList.add("OFF");
            ON_OFF_QUATTRAN__3.classList.remove("ON");
        }
        if(Quat_Tran_3 == 1){
            ON_OFF_QUATTRAN__3.classList.add("ON");
            ON_OFF_QUATTRAN__3.classList.remove("OFF");
        }
        if(BongDen_3 == 0){
            ON_OFF_BONGDEN__3.classList.add("OFF");
            ON_OFF_BONGDEN__3.classList.remove("ON");
        }
        if(BongDen_3 == 1){
            ON_OFF_BONGDEN__3.classList.add("ON");
            ON_OFF_BONGDEN__3.classList.remove("OFF");
        }
        if(DieuHoa_3 == 0){
            ON_OFF_DIEUHOA__3.classList.add("OFF");
            ON_OFF_DIEUHOA__3.classList.remove("ON");
        }
        if(DieuHoa_3 == 1){
            ON_OFF_DIEUHOA__3.classList.add("ON");
            ON_OFF_DIEUHOA__3.classList.remove("OFF");
        }

//        =======================================
        if(Quat_4 == 0){
            ON_OFF_QUAT__4.classList.add("OFF");
            ON_OFF_QUAT__4.classList.remove("ON");
        }
        if(Quat_4 == 1){
            ON_OFF_QUAT__4.classList.add("ON");
            ON_OFF_QUAT__4.classList.remove("OFF");
        }
        if(Quat_Tran_4 == 0){
            ON_OFF_QUATTRAN__4.classList.add("OFF");
            ON_OFF_QUATTRAN__4.classList.remove("ON");
        }
        if(Quat_Tran_4 == 1){
            ON_OFF_QUATTRAN__4.classList.add("ON");
            ON_OFF_QUATTRAN__4.classList.remove("OFF");
        }
        if(BongDen_4 == 0){
            ON_OFF_BONGDEN__4.classList.add("OFF");
            ON_OFF_BONGDEN__4.classList.remove("ON");
        }
        if(BongDen_4 == 1){
            ON_OFF_BONGDEN__4.classList.add("ON");
            ON_OFF_BONGDEN__4.classList.remove("OFF");
        }
        if(DieuHoa_4 == 0){
            ON_OFF_DIEUHOA__4.classList.add("OFF");
            ON_OFF_DIEUHOA__4.classList.remove("ON");
        }
        if(DieuHoa_4 == 1){
            ON_OFF_DIEUHOA__4.classList.add("ON");
            ON_OFF_DIEUHOA__4.classList.remove("OFF");
        }

//        =======================================
        if(Quat_5 == 0){
            ON_OFF_QUAT__5.classList.add("OFF");
            ON_OFF_QUAT__5.classList.remove("ON");
        }
        if(Quat_5 == 1){
            ON_OFF_QUAT__5.classList.add("ON");
            ON_OFF_QUAT__5.classList.remove("OFF");
        }
        if(Quat_Tran_5 == 0){
            ON_OFF_QUATTRAN__5.classList.add("OFF");
            ON_OFF_QUATTRAN__5.classList.remove("ON");
        }
        if(Quat_Tran_5 == 1){
            ON_OFF_QUATTRAN__5.classList.add("ON");
            ON_OFF_QUATTRAN__5.classList.remove("OFF");
        }
        if(BongDen_5 == 0){
            ON_OFF_BONGDEN__5.classList.add("OFF");
            ON_OFF_BONGDEN__5.classList.remove("ON");
        }
        if(BongDen_5 == 1){
            ON_OFF_BONGDEN__5.classList.add("ON");
            ON_OFF_BONGDEN__5.classList.remove("OFF");
        }
        if(DieuHoa_5 == 0){
            ON_OFF_DIEUHOA__5.classList.add("OFF");
            ON_OFF_DIEUHOA__5.classList.remove("ON");
        }
        if(DieuHoa_5 == 1){
            ON_OFF_DIEUHOA__5.classList.add("ON");
            ON_OFF_DIEUHOA__5.classList.remove("OFF");
        }

//        =======================================
        if(Quat_6 == 0){
            ON_OFF_QUAT__6.classList.add("OFF");
            ON_OFF_QUAT__6.classList.remove("ON");
        }
        if(Quat_6 == 1){
            ON_OFF_QUAT__6.classList.add("ON");
            ON_OFF_QUAT__6.classList.remove("OFF");
        }
        if(Quat_Tran_6 == 0){
            ON_OFF_QUATTRAN__6.classList.add("OFF");
            ON_OFF_QUATTRAN__6.classList.remove("ON");
        }
        if(Quat_Tran_6 == 1){
            ON_OFF_QUATTRAN__6.classList.add("ON");
            ON_OFF_QUATTRAN__6.classList.remove("OFF");
        }
        if(BongDen_6 == 0){
            ON_OFF_BONGDEN__6.classList.add("OFF");
            ON_OFF_BONGDEN__6.classList.remove("ON");
        }
        if(BongDen_6 == 1){
            ON_OFF_BONGDEN__6.classList.add("ON");
            ON_OFF_BONGDEN__6.classList.remove("OFF");
        }
        if(DieuHoa_6 == 0){
            ON_OFF_DIEUHOA__6.classList.add("OFF");
            ON_OFF_DIEUHOA__6.classList.remove("ON");
        }
        if(DieuHoa_6 == 1){
            ON_OFF_DIEUHOA__6.classList.add("ON");
            ON_OFF_DIEUHOA__6.classList.remove("OFF");
        }

//        =======================================
        if(Quat_7 == 0){
            ON_OFF_QUAT__7.classList.add("OFF");
            ON_OFF_QUAT__7.classList.remove("ON");
        }
        if(Quat_7 == 1){
            ON_OFF_QUAT__7.classList.add("ON");
            ON_OFF_QUAT__7.classList.remove("OFF");
        }
        if(Quat_Tran_7 == 0){
            ON_OFF_QUATTRAN__7.classList.add("OFF");
            ON_OFF_QUATTRAN__7.classList.remove("ON");
        }
        if(Quat_Tran_7 == 1){
            ON_OFF_QUATTRAN__7.classList.add("ON");
            ON_OFF_QUATTRAN__7.classList.remove("OFF");
        }
        if(BongDen_7 == 0){
            ON_OFF_BONGDEN__7.classList.add("OFF");
            ON_OFF_BONGDEN__7.classList.remove("ON");
        }
        if(BongDen_7 == 1){
            ON_OFF_BONGDEN__7.classList.add("ON");
            ON_OFF_BONGDEN__7.classList.remove("OFF");
        }
        if(DieuHoa_7 == 0){
            ON_OFF_DIEUHOA__7.classList.add("OFF");
            ON_OFF_DIEUHOA__7.classList.remove("ON");
        }
        if(DieuHoa_7 == 1){
            ON_OFF_DIEUHOA__7.classList.add("ON");
            ON_OFF_DIEUHOA__7.classList.remove("OFF");
        }

//        =======================================
        if(Quat_8 == 0){
            ON_OFF_QUAT__8.classList.add("OFF");
            ON_OFF_QUAT__8.classList.remove("ON");
        }
        if(Quat_8 == 1){
            ON_OFF_QUAT__8.classList.add("ON");
            ON_OFF_QUAT__8.classList.remove("OFF");
        }
        if(Quat_Tran_8 == 0){
            ON_OFF_QUATTRAN__8.classList.add("OFF");
            ON_OFF_QUATTRAN__8.classList.remove("ON");
        }
        if(Quat_Tran_8 == 1){
            ON_OFF_QUATTRAN__8.classList.add("ON");
            ON_OFF_QUATTRAN__8.classList.remove("OFF");
        }
        if(BongDen_8 == 0){
            ON_OFF_BONGDEN__8.classList.add("OFF");
            ON_OFF_BONGDEN__8.classList.remove("ON");
        }
        if(BongDen_8 == 1){
            ON_OFF_BONGDEN__8.classList.add("ON");
            ON_OFF_BONGDEN__8.classList.remove("OFF");
        }
        if(DieuHoa_8 == 0){
            ON_OFF_DIEUHOA__8.classList.add("OFF");
            ON_OFF_DIEUHOA__8.classList.remove("ON");
        }
        if(DieuHoa_8 == 1){
            ON_OFF_DIEUHOA__8.classList.add("ON");
            ON_OFF_DIEUHOA__8.classList.remove("OFF");
        }

//        =======================================
        if(Quat_9 == 0){
            ON_OFF_QUAT__9.classList.add("OFF");
            ON_OFF_QUAT__9.classList.remove("ON");
        }
        if(Quat_9 == 1){
            ON_OFF_QUAT__9.classList.add("ON");
            ON_OFF_QUAT__9.classList.remove("OFF");
        }
        if(Quat_Tran_9 == 0){
            ON_OFF_QUATTRAN__9.classList.add("OFF");
            ON_OFF_QUATTRAN__9.classList.remove("ON");
        }
        if(Quat_Tran_9 == 1){
            ON_OFF_QUATTRAN__9.classList.add("ON");
            ON_OFF_QUATTRAN__9.classList.remove("OFF");
        }
        if(BongDen_9 == 0){
            ON_OFF_BONGDEN__9.classList.add("OFF");
            ON_OFF_BONGDEN__9.classList.remove("ON");
        }
        if(BongDen_9 == 1){
            ON_OFF_BONGDEN__9.classList.add("ON");
            ON_OFF_BONGDEN__9.classList.remove("OFF");
        }
        if(DieuHoa_9 == 0){
            ON_OFF_DIEUHOA__9.classList.add("OFF");
            ON_OFF_DIEUHOA__9.classList.remove("ON");
        }
        if(DieuHoa_9 == 1){
            ON_OFF_DIEUHOA__9.classList.add("ON");
            ON_OFF_DIEUHOA__9.classList.remove("OFF");
        }

//        =======================================
        if(Quat_10 == 0){
            ON_OFF_QUAT__10.classList.add("OFF");
            ON_OFF_QUAT__10.classList.remove("ON");
        }
        if(Quat_10 == 1){
            ON_OFF_QUAT__10.classList.add("ON");
            ON_OFF_QUAT__10.classList.remove("OFF");
        }
        if(Quat_Tran_10 == 0){
            ON_OFF_QUATTRAN__10.classList.add("OFF");
            ON_OFF_QUATTRAN__10.classList.remove("ON");
        }
        if(Quat_Tran_10 == 1){
            ON_OFF_QUATTRAN__10.classList.add("ON");
            ON_OFF_QUATTRAN__10.classList.remove("OFF");
        }
        if(BongDen_10 == 0){
            ON_OFF_BONGDEN__10.classList.add("OFF");
            ON_OFF_BONGDEN__10.classList.remove("ON");
        }
        if(BongDen_10 == 1){
            ON_OFF_BONGDEN__10.classList.add("ON");
            ON_OFF_BONGDEN__10.classList.remove("OFF");
        }
        if(DieuHoa_10 == 0){
            ON_OFF_DIEUHOA__10.classList.add("OFF");
            ON_OFF_DIEUHOA__10.classList.remove("ON");
        }
        if(DieuHoa_10 == 1){
            ON_OFF_DIEUHOA__10.classList.add("ON");
            ON_OFF_DIEUHOA__10.classList.remove("OFF");
        }
    })
}