#include <stdio.h>
#include <math.h>

int main()
{
	double A, B, V;
	double count = 0;

	scanf("%lf%lf%lf", &A, &B, &V);
	if (A >= V)
	{
		printf("1\n");
		return (0);
	}
	else if ((2 * A) - B >= V)
	{
		printf("2\n");
		return (0);
	}
	if (fmod((V - A), (A - B)) == 0)
		count = (V - A) / (A - B);
	else
		count = (V - A) / (A - B) + 1;
	printf("%d\n", (int)count + 1);
	return (0);
}
