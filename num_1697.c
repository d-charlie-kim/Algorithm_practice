#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct s_numbers
{
	int nums[100001];
	int min;
}	t_numbers;

int main()
{
	int src, dest;
	int count;
	t_numbers numbers;

	bzero(numbers.nums, 100001);
	numbers.nums[src] = 1;
	numbers.min = 0;
	count = 0;
	scanf("%d%d", &src, &dest);
	if (dest <= src)
	{
		printf("%d\n", src - dest);
		exit(0);
	}



	
}
