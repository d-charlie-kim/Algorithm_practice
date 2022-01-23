#include <stdio.h>

int main(void)
{
	int a[10] = { 0, };
	int c[10] = { 0, };
	int *b;

	b = a;
	printf("%p\n", b);
	b = c;
	printf("%p\n", b);
}
