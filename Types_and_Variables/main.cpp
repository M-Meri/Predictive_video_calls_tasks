#include <QCoreApplication>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    int integer = 5;
    float fp_number = 3.14f;
    double dfp_number = 2.5;
    char character = 'a';
    bool flag = true;

    qDebug() << integer << fp_number << dfp_number << character << flag;

    return a.exec();
}
