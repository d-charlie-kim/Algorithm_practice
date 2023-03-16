#include <stdio.h>
#include <math.h>

int main()
{
	int size;
	scanf("%d", &size);
	double sx, sy, sr, dx, dy, dr;
	double d;
	double big;
	while (size > 0)
	{
		scanf("%le%le%le%le%le%le", &sx, &sy, &sr, &dx, &dy, &dr);
		d = sqrt(((dx - sx) * (dx - sx)) + ((dy - sy) * (dy - sy)));
		if (dr >= sr)
			big = dr;
		else
			big = sr;
		if ((dx == sx) && (dy == sy) && (sr == dr))
			printf("-1\n");
		else if (d <= big)
		{
			if (d < sqrt(pow(dr - sr, 2)))
				printf("0\n");
			else if (d == sqrt(pow(dr - sr, 2)))
				printf("1\n");
			else if (d > sqrt(pow(dr - sr, 2)))
				printf("2\n");
		}
		else
		{
			if (d > sr + dr)
				printf("0\n");
			else if (d == sr + dr)
				printf("1\n");
			else if (d < sr + dr)
				printf("2\n");
		}
		size--;
	}
	return(0);
}
