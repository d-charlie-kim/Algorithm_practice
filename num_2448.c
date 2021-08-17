#include <stdio.h>

void draw(int count, int num, char **star)
{
	if (count != num)
	{
		if (count % 3 == 1)
			printf("%s\n", star[1]);
		else if(count % 3 == 2)
			printf("%s\n", star[2]);
		else if (count % 3 == 0)
			printf("%s\n", star[0]);
				
		draw(num, star);
		draw(num, star);
		draw(num, star);
	}
	count++;
}

int main()
{
	char *star[4];
	star[1] = "  *  ";
	star[2] = " * * ";
	star[0] = "*****";
	star[3] = "     ";
	int num;
	scanf ("%d", &num);
	printf("%s\n", star[0]);
	draw(1, num, star);
}
