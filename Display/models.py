from django.db import models

# Create your models here.
class CONSTROL(models.Model):
    STATUS_TYPES = (
        ('Quạt', 'Quạt'),
        ('Quạt trần', 'Quạt trần'),
        ('Điều hòa', 'Điều hòa'),
        ('Bóng đèn', 'Bóng đèn')
    )
    STATUS_Quat = models.IntegerField(default = 0)
    STATUS_QuatTran = models.IntegerField(default = 0)
    STATUS_DieuHoa = models.IntegerField(default = 0)
    STATUS_BongDen = models.IntegerField(default = 0)
    NAME = models.CharField(max_length = 255)
    TYPE = models.CharField(max_length = 50, null=False, choices=STATUS_TYPES)

    def __str__(self):
        template = '{0.STATUS_Quat} {0.STATUS_QuatTran} {0.STATUS_DieuHoa} {0.STATUS_BongDen} {0.NAME} {0.TYPE}'
        return template.format(self)
    

class Quat(models.Model):
    STATUS = models.IntegerField(default = 0)

    def __str__(self):
        template = '{0.STATUS}'
        return template.format(self)

class Quat_Tran(models.Model):
    STATUS = models.IntegerField(default = 0)

    def __str__(self):
        template = '{0.STATUS}'
        return template.format(self)

class BongDen(models.Model):
    STATUS = models.IntegerField(default = 0)

    def __str__(self):
        template = '{0.STATUS}'
        return template.format(self)

class MayChieu(models.Model):
    STATUS = models.IntegerField(default = 0)

    def __str__(self):
        template = '{0.STATUS}'
        return template.format(self)

class DieuHoa(models.Model):
    STATUS = models.IntegerField(default = 0)

    def __str__(self):
        template = '{0.STATUS}'
        return template.format(self)