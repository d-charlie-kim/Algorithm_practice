#include <stdio.h>

int main()
{
	int i = 0;
	int size = 100;
	for (; i < size; (i = i + 1) && size--)
		printf("i : %d size : %d\n", i, size);
}
