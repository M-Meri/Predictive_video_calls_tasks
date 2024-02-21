#include "mainwindow.h"
#include "qlineedit.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    for (int i = 1; i <= 10; ++i)
    {
        qDebug() << i;
    }

    return a.exec();
}
