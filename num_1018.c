#include <stdio.h>

int main()
{
	int h, w;
	scanf("%d%d", &h, &w);
	char board[51][51];
	for(int i = 0; i < h; i++)
		scanf("%s", board[i]);
	int count_a = 0, count_b = 0, total = 64, j = 0, i = 0;
	int check_a = 0, check_b = 1, temp = 0, x = 8, y = 8;
	while (x <= w)
	{
		y = 8;
		while (y <= h)
		{
			check_a = 0;
			check_b = 1;
			count_a = 0;
			count_b = 0;
			i = y - 8;
			while (i < y)
			{
				j =  x - 8;
				while (j < x)
				{
					if (board[i][j] == 'B' && (j % 2) == check_a)
						count_a++;
					else if (board[i][j] == 'W' && (j % 2) == check_a)
						count_b++;
					else if (board[i][j] == 'B' && (j % 2) == check_b)
						count_b++;
					else if (board[i][j] == 'W' && (j % 2) == check_b)
						count_a++;
					j++;
				}
				i++;
				temp = check_a;
				check_a = check_b;
				check_b = temp;
			}
			if (count_a < total)
				total = count_a;
			if (count_b < total)
				total = count_b;
			y++;
		}
		x++;
	}
	printf("%d\n", total);
}
