#include <QCoreApplication>

int add(int a, int b)
{
    return a + b;
}

int sub(int a, int b)
{
    return a - b;
}

long long mul(int a, int b)
{
    return a * b;
}

double divide(int a, int b)
{
    return static_cast<double>(a) / b;
}

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    qDebug() << add(3, 4);
    qDebug() << sub(3, 4);
    qDebug() << mul(3, 4);
    qDebug() << divide(3, 4);

    return a.exec();
}
