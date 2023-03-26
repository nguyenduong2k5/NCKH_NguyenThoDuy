from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import CONSTROL, Quat, Quat_Tran, BongDen, MayChieu, DieuHoa
import json
# from .forms import CONSTROL_FORMS
from django.views import View

# Create your views here.
def WEB_SERVER(request):
    # ======================= Thực hiện tương tác với LOẠI THIẾT BỊ ======================= 
    ID_1 = CONSTROL.objects.values().get(pk = 1)
    ID_2 = CONSTROL.objects.values().get(pk = 2)
    ID_3 = CONSTROL.objects.values().get(pk = 3)
    ID_4 = CONSTROL.objects.values().get(pk = 4)
    ID_5 = CONSTROL.objects.values().get(pk = 5)
    ID_6 = CONSTROL.objects.values().get(pk = 6)
    ID_7 = CONSTROL.objects.values().get(pk = 7)
    ID_8 = CONSTROL.objects.values().get(pk = 8)
    ID_9 = CONSTROL.objects.values().get(pk = 9)
    ID_10 = CONSTROL.objects.values().get(pk = 10)

    # ======================= Thực hiện tương tác với QUẠT ======================= 
    ID_QUAT_1 = Quat.objects.values().get(pk = 1)
    ID_QUAT_2 = Quat.objects.values().get(pk = 2)
    ID_QUAT_3 = Quat.objects.values().get(pk = 3)
    ID_QUAT_4 = Quat.objects.values().get(pk = 4)
    ID_QUAT_5 = Quat.objects.values().get(pk = 5)
    ID_QUAT_6 = Quat.objects.values().get(pk = 6)
    ID_QUAT_7 = Quat.objects.values().get(pk = 7)
    ID_QUAT_8 = Quat.objects.values().get(pk = 8)
    ID_QUAT_9 = Quat.objects.values().get(pk = 9)
    ID_QUAT_10 = Quat.objects.values().get(pk = 10)

    # ======================= Thực hiện tương tác với QUẠT TRẦN ======================= 
    ID_QUATTRAN_1 = Quat_Tran.objects.values().get(pk = 1)
    ID_QUATTRAN_2 = Quat_Tran.objects.values().get(pk = 2)
    ID_QUATTRAN_3 = Quat_Tran.objects.values().get(pk = 3)
    ID_QUATTRAN_4 = Quat_Tran.objects.values().get(pk = 4)
    ID_QUATTRAN_5 = Quat_Tran.objects.values().get(pk = 5)
    ID_QUATTRAN_6 = Quat_Tran.objects.values().get(pk = 6)
    ID_QUATTRAN_7 = Quat_Tran.objects.values().get(pk = 7)
    ID_QUATTRAN_8 = Quat_Tran.objects.values().get(pk = 8)
    ID_QUATTRAN_9 = Quat_Tran.objects.values().get(pk = 9)
    ID_QUATTRAN_10 = Quat_Tran.objects.values().get(pk = 10)

    # ======================= Thực hiện tương tác với Bóng đèn ======================= 
    ID_BONGDEN_1 = BongDen.objects.values().get(pk = 1)
    ID_BONGDEN_2 = BongDen.objects.values().get(pk = 2)
    ID_BONGDEN_3 = BongDen.objects.values().get(pk = 3)
    ID_BONGDEN_4 = BongDen.objects.values().get(pk = 4)
    ID_BONGDEN_5 = BongDen.objects.values().get(pk = 5)
    ID_BONGDEN_6 = BongDen.objects.values().get(pk = 6)
    ID_BONGDEN_7 = BongDen.objects.values().get(pk = 7)
    ID_BONGDEN_8 = BongDen.objects.values().get(pk = 8)
    ID_BONGDEN_9 = BongDen.objects.values().get(pk = 9)
    ID_BONGDEN_10 = BongDen.objects.values().get(pk = 10)

    # ======================= Thực hiện tương tác với Máy chiếu ======================= 
    ID_MAYCHIEU_1 = MayChieu.objects.values().get(pk = 1)
    ID_MAYCHIEU_2 = MayChieu.objects.values().get(pk = 2)
    ID_MAYCHIEU_3 = MayChieu.objects.values().get(pk = 3)
    ID_MAYCHIEU_4 = MayChieu.objects.values().get(pk = 4)
    ID_MAYCHIEU_5 = MayChieu.objects.values().get(pk = 5)
    ID_MAYCHIEU_6 = MayChieu.objects.values().get(pk = 6)
    ID_MAYCHIEU_7 = MayChieu.objects.values().get(pk = 7)
    ID_MAYCHIEU_8 = MayChieu.objects.values().get(pk = 8)
    ID_MAYCHIEU_9 = MayChieu.objects.values().get(pk = 9)
    ID_MAYCHIEU_10 = MayChieu.objects.values().get(pk = 10)

    # ======================= Thực hiện tương tác với Điều hòa ======================= 
    ID_DIEUHOA_1 = DieuHoa.objects.values().get(pk = 1)
    ID_DIEUHOA_2 = DieuHoa.objects.values().get(pk = 2)
    ID_DIEUHOA_3 = DieuHoa.objects.values().get(pk = 3)
    ID_DIEUHOA_4 = DieuHoa.objects.values().get(pk = 4)
    ID_DIEUHOA_5 = DieuHoa.objects.values().get(pk = 5)
    ID_DIEUHOA_6 = DieuHoa.objects.values().get(pk = 6)
    ID_DIEUHOA_7 = DieuHoa.objects.values().get(pk = 7)
    ID_DIEUHOA_8 = DieuHoa.objects.values().get(pk = 8)
    ID_DIEUHOA_9 = DieuHoa.objects.values().get(pk = 9)
    ID_DIEUHOA_10 = DieuHoa.objects.values().get(pk = 10)

    return JsonResponse({
        'ID_1':ID_1,
        'ID_2':ID_2,
        'ID_3':ID_3,
        'ID_4':ID_4,
        'ID_5':ID_5,
        'ID_6':ID_6,
        'ID_7':ID_7,
        'ID_8':ID_8,
        'ID_9':ID_9,
        'ID_10':ID_10,
        'ID_QUAT_1':ID_QUAT_1,
        'ID_QUAT_2':ID_QUAT_2,
        'ID_QUAT_3':ID_QUAT_3,
        'ID_QUAT_4':ID_QUAT_4,
        'ID_QUAT_5':ID_QUAT_5,
        'ID_QUAT_6':ID_QUAT_6,
        'ID_QUAT_7':ID_QUAT_7,
        'ID_QUAT_8':ID_QUAT_8,
        'ID_QUAT_9':ID_QUAT_9,
        'ID_QUAT_10':ID_QUAT_10,
        'ID_QUATTRAN_1':ID_QUATTRAN_1,
        'ID_QUATTRAN_2':ID_QUATTRAN_2,
        'ID_QUATTRAN_3':ID_QUATTRAN_3,
        'ID_QUATTRAN_4':ID_QUATTRAN_4,
        'ID_QUATTRAN_5':ID_QUATTRAN_5,
        'ID_QUATTRAN_6':ID_QUATTRAN_6,
        'ID_QUATTRAN_7':ID_QUATTRAN_7,
        'ID_QUATTRAN_8':ID_QUATTRAN_8,
        'ID_QUATTRAN_9':ID_QUATTRAN_9,
        'ID_QUATTRAN_10':ID_QUATTRAN_10,
        'ID_BONGDEN_1':ID_BONGDEN_1,
        'ID_BONGDEN_2':ID_BONGDEN_2,
        'ID_BONGDEN_3':ID_BONGDEN_3,
        'ID_BONGDEN_4':ID_BONGDEN_4,
        'ID_BONGDEN_5':ID_BONGDEN_5,
        'ID_BONGDEN_6':ID_BONGDEN_6,
        'ID_BONGDEN_7':ID_BONGDEN_7,
        'ID_BONGDEN_8':ID_BONGDEN_8,
        'ID_BONGDEN_9':ID_BONGDEN_9,
        'ID_BONGDEN_10':ID_BONGDEN_10,
        'ID_MAYCHIEU_1':ID_MAYCHIEU_1,
        'ID_MAYCHIEU_2':ID_MAYCHIEU_2,
        'ID_MAYCHIEU_3':ID_MAYCHIEU_3,
        'ID_MAYCHIEU_4':ID_MAYCHIEU_4,
        'ID_MAYCHIEU_5':ID_MAYCHIEU_5,
        'ID_MAYCHIEU_6':ID_MAYCHIEU_6,
        'ID_MAYCHIEU_7':ID_MAYCHIEU_7,
        'ID_MAYCHIEU_8':ID_MAYCHIEU_8,
        'ID_MAYCHIEU_9':ID_MAYCHIEU_9,
        'ID_MAYCHIEU_10':ID_MAYCHIEU_10,
        'ID_DIEUHOA_1':ID_DIEUHOA_1,
        'ID_DIEUHOA_2':ID_DIEUHOA_2,
        'ID_DIEUHOA_3':ID_DIEUHOA_3,
        'ID_DIEUHOA_4':ID_DIEUHOA_4,
        'ID_DIEUHOA_5':ID_DIEUHOA_5,
        'ID_DIEUHOA_6':ID_DIEUHOA_6,
        'ID_DIEUHOA_7':ID_DIEUHOA_7,
        'ID_DIEUHOA_8':ID_DIEUHOA_8,
        'ID_DIEUHOA_9':ID_DIEUHOA_9,
        'ID_DIEUHOA_10':ID_DIEUHOA_10})

def index(request):
    # add_test_data()
    constrol_1 = CONSTROL.objects.all()[0:5]
    constrol_2 = CONSTROL.objects.all()[5:10]
    return render(request, 'BASE.html', {'CONSTROL_1':constrol_1, 'CONSTROL_2':constrol_2})

def On_Click(request):
    if request.method == "POST":
        id = request.POST.get('sid')
        # print('Vị trí nút bấm: ' + id)
        constrol = CONSTROL.objects.get(pk = id)
        quat = Quat.objects.get(pk = id)
        quatTran = Quat_Tran.objects.get(pk = id)
        bongDen = BongDen.objects.get(pk = id)
        mayChieu = MayChieu.objects.get(pk = id)
        dieuHoa = DieuHoa.objects.get(pk = id)
        # print('ID lúc này là: ', constrol.id)
        # print('TYPE lúc này là: ', constrol.TYPE)
        # if(constrol.TYPE == 'Bóng đèn'):
        #     print('Nhận thấy có BÓNG ĐÈN')
        # if(constrol.TYPE == 'Quạt trần'):
        #     print('Nhận thấy có QUẠT TRẦN')
        # if(constrol.TYPE == 'Quạt'):
        #     print('Nhận thấy có QUẠT')
        # if(constrol.TYPE == 'Máy chiếu'):
        #     print('Nhận thấy có MÁY CHIẾU')
        # if(constrol.TYPE == 'Điều hòa'):
        #     print('Nhận thấy có ĐIỀU HÒA')
        # ======================= Thực hiện tương tác với QUẠT ======================= 
        if(constrol.TYPE == 'Quạt'):
            print('Nhận thấy có tác động đến QUẠT')
            print('ID là: ', quat.id)
            if(quat.STATUS == 0):
                Quat_Show = Quat(id = quat.id, STATUS = quat.STATUS + 1)
                print('Đã bật')
            if(quat.STATUS == 1):
                Quat_Show = Quat(id = quat.id, STATUS = quat.STATUS)
                print('Không đổi')
            Quat_Show.save()
        
        # ======================= Thực hiện tương tác với QUẠT TRẦN ======================= 
        if(constrol.TYPE == 'Quạt trần'):
            print('Nhận thấy có tác động đến QUẠT TRẦN')
            print('ID là: ', quatTran.id)
            if(quatTran.STATUS == 0):
                QuatTran_Show = Quat_Tran(id = quatTran.id, STATUS = quatTran.STATUS + 1)
                print('Đã bật')
            if(quatTran.STATUS == 1):
                QuatTran_Show = Quat_Tran(id = quatTran.id, STATUS = quatTran.STATUS)
                print('Không đổi')
            QuatTran_Show.save()
        
        # ======================= Thực hiện tương tác với Bóng đèn ======================= 
        if(constrol.TYPE == 'Bóng đèn'):
            print('Nhận thấy có tác động đến BÓNG ĐÈN')
            print('ID là: ', bongDen.id)
            if(bongDen.STATUS == 0):
                BongDen_Show = BongDen(id = bongDen.id, STATUS = bongDen.STATUS + 1)
                print('Đã bật')
            if(bongDen.STATUS == 1):
                BongDen_Show = BongDen(id = bongDen.id, STATUS = bongDen.STATUS)
                print('Không đổi')
            BongDen_Show.save()
        
        # ======================= Thực hiện tương tác với Máy chiếu ======================= 
        # if(constrol.TYPE == 'Máy chiếu'):
        #     print('Nhận thấy có tác động đến MÁY CHIẾU')
        #     print('ID là: ', mayChieu.id)
        #     if(mayChieu.STATUS == 0):
        #         MayChieu_Show = MayChieu(id = mayChieu.id, STATUS = mayChieu.STATUS + 1)
        #         print('Đã bật')
        #     if(mayChieu.STATUS == 1):
        #         MayChieu_Show = MayChieu(id = mayChieu.id, STATUS = mayChieu.STATUS)
        #         print('Không đổi')
        #     MayChieu_Show.save()
        #     _MAYCHIEU_ = MayChieu.objects.filter(id=id).values('STATUS')[0]['STATUS']
        #     print('===>Trạng thái của máy chiếu là: ', _MAYCHIEU_)

        # ======================= Thực hiện tương tác với Điều hòa ======================= 
        if(constrol.TYPE == 'Điều hòa'):
            print('Nhận thấy có tác động đến ĐIỀU HÒA')
            print('ID là: ', dieuHoa.id)
            if(dieuHoa.STATUS == 0):
                DieuHoa_Show = DieuHoa(id = dieuHoa.id, STATUS = dieuHoa.STATUS + 1)
                print('Đã bật')
            if(dieuHoa.STATUS == 1):
                DieuHoa_Show = DieuHoa(id = dieuHoa.id, STATUS = dieuHoa.STATUS)
                print('Không đổi')
            DieuHoa_Show.save()
        _QUAT_ = Quat.objects.filter(id=id).values('STATUS')[0]['STATUS']
        _QUATTRAN_ = Quat_Tran.objects.filter(id=id).values('STATUS')[0]['STATUS']
        _BONGDEN_ = BongDen.objects.filter(id=id).values('STATUS')[0]['STATUS']
        _DIEUHOA_ = DieuHoa.objects.filter(id=id).values('STATUS')[0]['STATUS']

        print('===> Trạng thái của quạt là: ', _QUAT_)
        print('===> Trạng thái của quạt trần là: ', _QUATTRAN_)
        print('===> Trạng thái của bóng đèn là: ', _BONGDEN_)
        print('===> Trạng thái của điều hòa là: ', _DIEUHOA_)
        # else:
        #     print('Không phải tác động đến Quạt, Quạt trần, Bóng đèn, Máy chiếu, Điều hòa. Không xử lý')
        Mess_Show = CONSTROL(id = constrol.id, NAME = constrol.NAME, TYPE = constrol.TYPE, STATUS_Quat = _QUAT_, STATUS_QuatTran = _QUATTRAN_, STATUS_DieuHoa = _DIEUHOA_, STATUS_BongDen = _BONGDEN_)
        Mess_Show.save()
        return JsonResponse({'status':'On_Click'})
    else:
        return JsonResponse({'status':'Err'})

def Off_Click(request):
    if request.method == "POST":
        id = request.POST.get('sid')
        # print('Vị trí nút bấm: ' + id)
        constrol = CONSTROL.objects.get(pk = id)
        quat = Quat.objects.get(pk = id)
        quatTran = Quat_Tran.objects.get(pk = id)
        bongDen = BongDen.objects.get(pk = id)
        mayChieu = MayChieu.objects.get(pk = id)
        dieuHoa = DieuHoa.objects.get(pk = id)
        # print('ID lúc này là: ', constrol.id)
        # print('TYPE lúc này là: ', constrol.TYPE)
        # if(constrol.TYPE == 'Bóng đèn'):
        #     print('Nhận thấy có BÓNG ĐÈN')
        # if(constrol.TYPE == 'Quạt trần'):
        #     print('Nhận thấy có QUẠT TRẦN')
        # if(constrol.TYPE == 'Quạt'):
        #     print('Nhận thấy có QUẠT')
        # if(constrol.TYPE == 'Máy chiếu'):
        #     print('Nhận thấy có MÁY CHIẾU')
        # if(constrol.TYPE == 'Điều hòa'):
        #     print('Nhận thấy có ĐIỀU HÒA')
        # ======================= Thực hiện tương tác với QUẠT ======================= 
        if(constrol.TYPE == 'Quạt'):
            print('Nhận thấy có tác động đến QUẠT')
            print('ID là: ', quat.id)
            if(quat.STATUS == 0):
                Quat_Show = Quat(id = quat.id, STATUS = quat.STATUS)
                print('Không đổi')
            if(quat.STATUS == 1):
                Quat_Show = Quat(id = quat.id, STATUS = quat.STATUS - 1)
                print('Đã tắt')
            Quat_Show.save()

        
        # ======================= Thực hiện tương tác với QUẠT TRẦN ======================= 
        if(constrol.TYPE == 'Quạt trần'):
            print('Nhận thấy có tác động đến QUẠT TRẦN')
            print('ID là: ', quatTran.id)
            if(quatTran.STATUS == 0):
                QuatTran_Show = Quat_Tran(id = quatTran.id, STATUS = quatTran.STATUS)
                print('Không đổi')
            if(quatTran.STATUS == 1):
                QuatTran_Show = Quat_Tran(id = quatTran.id, STATUS = quatTran.STATUS - 1)
                print('Đã tắt')
            QuatTran_Show.save()

        
        # ======================= Thực hiện tương tác với Bóng đèn ======================= 
        if(constrol.TYPE == 'Bóng đèn'):
            print('Nhận thấy có tác động đến BÓNG ĐÈN')
            print('ID là: ', bongDen.id)
            if(bongDen.STATUS == 0):
                BongDen_Show = BongDen(id = bongDen.id, STATUS = bongDen.STATUS)
                print('Không đổi')
            if(bongDen.STATUS == 1):
                BongDen_Show = BongDen(id = bongDen.id, STATUS = bongDen.STATUS - 1)
                print('Đã tắt')
            BongDen_Show.save()

        
        # ======================= Thực hiện tương tác với Máy chiếu ======================= 
        # if(constrol.TYPE == 'Máy chiếu'):
        #     print('Nhận thấy có tác động đến MÁY CHIẾU')
        #     print('ID là: ', mayChieu.id)
        #     if(mayChieu.STATUS == 0):
        #         MayChieu_Show = MayChieu(id = mayChieu.id, STATUS = mayChieu.STATUS)
        #         print('Không đổi')
        #     if(mayChieu.STATUS == 1):
        #         MayChieu_Show = MayChieu(id = mayChieu.id, STATUS = mayChieu.STATUS - 1)
        #         print('Đã tắt')
        #     MayChieu_Show.save()
        #     _MAYCHIEU_ = MayChieu.objects.filter(id=id).values('STATUS')[0]['STATUS']
        #     print('===>Trạng thái của máy chiếu là: ', _MAYCHIEU_)

        # ======================= Thực hiện tương tác với Điều hòa ======================= 
        if(constrol.TYPE == 'Điều hòa'):
            print('Nhận thấy có tác động đến ĐIỀU HÒA')
            print('ID là: ', dieuHoa.id)
            if(dieuHoa.STATUS == 0):
                DieuHoa_Show = DieuHoa(id = dieuHoa.id, STATUS = dieuHoa.STATUS)
                print('Không đổi')
            if(dieuHoa.STATUS == 1):
                DieuHoa_Show = DieuHoa(id = dieuHoa.id, STATUS = dieuHoa.STATUS - 1)
                print('Đã tắt')
            DieuHoa_Show.save()





        _QUAT_ = Quat.objects.filter(id=id).values('STATUS')[0]['STATUS']
        _QUATTRAN_ = Quat_Tran.objects.filter(id=id).values('STATUS')[0]['STATUS']
        _BONGDEN_ = BongDen.objects.filter(id=id).values('STATUS')[0]['STATUS']
        _DIEUHOA_ = DieuHoa.objects.filter(id=id).values('STATUS')[0]['STATUS']

        print('===> Trạng thái của quạt là: ', _QUAT_)
        print('===> Trạng thái của quạt trần là: ', _QUATTRAN_)
        print('===> Trạng thái của bóng đèn là: ', _BONGDEN_)
        print('===> Trạng thái của điều hòa là: ', _DIEUHOA_)
        # else:
        #     print('Không phải tác động đến Quạt, Quạt trần, Bóng đèn, Máy chiếu, Điều hòa. Không xử lý')
        Mess_Show = CONSTROL(id = constrol.id, NAME = constrol.NAME, TYPE = constrol.TYPE, STATUS_Quat = _QUAT_, STATUS_QuatTran = _QUATTRAN_, STATUS_DieuHoa = _DIEUHOA_, STATUS_BongDen = _BONGDEN_)
        Mess_Show.save()
        return JsonResponse({'status':'Off_Click'})
    else:
        return JsonResponse({'status':'Err'})


# Đổi thiết bị theo ID chọn
def updade(request, id):
    if request.method == "POST":
        NAME = request.POST.get('NAME')
        TYPE = request.POST.get('TYPE')
        new_NAME = CONSTROL(id = id, NAME = NAME, TYPE = TYPE)
        new_NAME.save()
        print('Đã thực hiện UPDATE')
        return redirect('/')
    return render(request, 'BASE.html')

def add_test_data():
    Add_Quat = []
    Add_Quat_Tran = []
    Add_Bong_Den = []
    Add_May_Chieu = []
    Add_Dieu_Hoa = []
    for i in range(10):
        QUAT_ADD = Quat(STATUS = 0)
        Add_Quat.append(QUAT_ADD)

        QUATTRAN_ADD = Quat(STATUS = 0)
        Add_Quat_Tran.append(QUATTRAN_ADD)

        BONGDEN_ADD = Quat(STATUS = 0)
        Add_Bong_Den.append(BONGDEN_ADD)

        MAYCHIEU_ADD = Quat(STATUS = 0)
        Add_May_Chieu.append(MAYCHIEU_ADD)

        DIEUHOA_ADD = Quat(STATUS = 0)
        Add_Dieu_Hoa.append(DIEUHOA_ADD)

    Quat.objects.bulk_create(Add_Quat)
    Quat_Tran.objects.bulk_create(Add_Quat_Tran)
    BongDen.objects.bulk_create(Add_Bong_Den)
    MayChieu.objects.bulk_create(Add_May_Chieu)
    DieuHoa.objects.bulk_create(Add_Dieu_Hoa)