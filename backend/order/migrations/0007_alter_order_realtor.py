# Generated by Django 3.2.3 on 2021-07-24 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0006_alter_order_realtor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='realtor',
            field=models.CharField(max_length=200),
        ),
    ]