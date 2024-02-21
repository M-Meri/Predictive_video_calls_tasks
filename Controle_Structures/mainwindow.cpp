#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_clicked()
{
    QString text = ui->lineEdit->text();
    int number = text.toInt();

    //> == < to 0?
    if (number > 0)
    {
        ui->label_2->setText("the number is positive");
    } else if (number < 0) {
        ui->label_2->setText("the number is negative");
    } else {
        ui->label_2->setText("the number  is 0");
    }

    //set grade
    switch(number)
    {
    case 90 ... 100:
        ui->label_3->setText("The grade is A");
        break;
    case 80 ... 89:
        ui->label_3->setText("The grade is B");
        break;
    case 70 ... 79:
        ui->label_3->setText("The grade is C");
        break;
    case 60 ... 69:
        ui->label_3->setText("The grade is D");
        break;
    case 50 ... 59:
        ui->label_3->setText("The grade is E");
        break;
    default:
        ui->label_3->setText("The grade is F");
    }
}

