#include <stdio.h>
#include <math.h>

int main()
{
	long long min, max;
	scanf ("%lld%lld", &min, &max);
	long long temp = min;
	long long n, count = 0;
	while (temp <= max)
	{
		n = 2;
		while (n * n <= temp)
		{
			if (temp % (n * n) == 0)
			{	
				count++;
				break;
			}
			n++;
		}
		temp++;
	}
	printf("%lld\n", max - min - count + 1);
}
2 3 5 7 11 13 17 19 23 27 29 31 37 41
