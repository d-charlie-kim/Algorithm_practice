#include <stdio.h>
#include <string.h>

int	counting(int a, int b, char box[a][b + 1], char *line)
{
	int count = 0;

	for (int i = 0; i < a; i++)
	{
		if (strcmp(box[i], line) == 0)
			count++;
	}
	return (count);
}

int	checking(int b, int size, char *line)
{
	int temp = 0;
	for (int i = 0; i < b; i++)
	{
		if (line[i] == '0')
			temp++;
	}
	if ((size - temp) >= 0 && (size - temp) % 2 == 0)
		return (1);
	else
		return (0);
}

int	simul(int a, int b, int size, char box[a][b + 1])
{
	int count = 0, temp;

	for (int i = 0; i < a; i++)
	{
		temp = 0;
		if (checking(b, size, box[i]))
			temp = counting(a, b, box, box[i]);
		if (temp > count)
			count = temp;
	}
	return (count);
}

int main()
{
	int a, b, size, count;
	scanf("%d%d", &a, &b);
	char box[a][b + 1];

	for (int i = 0; i < a; i++)
		scanf("%s", box[i]);
	scanf("%d", &size);
	count = simul(a, b, size, box);
	printf("%d\n", count);
	return (0);
}
