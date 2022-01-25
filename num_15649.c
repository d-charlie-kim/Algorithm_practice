#include <stdio.h>

int n, m;

void	printing(int *nums)		// nums 배열에서 m까지만 출력
{
	for (int i = 0; i < m; i++)
		{
			if (i != 0)
				printf(" ");
			printf("%d", nums[i]);
		}
		printf("\n");
}

void	recursive(int *nums, int *check, int count)
{
	if (count == m)		// 카운트 체크 ---> 다 채웠으면 출력하고 끝낸다.
	{
		printing(nums);
		return ;
	}
	for (int i = 1; i <= n; i++)	// 덜 채웠으면 채우고 재귀를 돌린다. (숫자 n까지 가능한 숫자 반복)
	{								// 이미 들어가 있는 숫자를 제외하고, 나머지 가능한 숫자들을 nums 배열의 빈자리에 넣으면서 재귀를 돌린다.
		if (check[i] == 0)
		{
			check[i] = 1;			// 이 숫자를 넣을 거에요.
			nums[count] = i;		// count로 채워진 개수를 체크를 하고 있기 때문에 인덱스로 활용
			recursive(nums, check, count + 1);	// 
			check[i] = 0;			// 다시 되돌리는 작업이 필요하다.
		}
	}
}

int	main(void)
{
	int nums[9] = {0, 0, 0, 0, 0, 0, 0, 0};			// 채우고 출력할 배열
	int	check[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0};	// 해당 숫자를 사용했는지 체크하는 용도

	scanf ("%d%d", &n, &m);
	for (int i = 1; i <= n; i++)
	{
		nums[0] = i;					// 가장 처음에 숫자를 채운다. (1부터 n까지)
		check[i] = 1;					// 처음 채운 숫자는 사용했다고 체크
		recursive(nums, check, 1);
		check[i] = 0;					// 1 다음 2를 처음에 넣었을 때 1이 사용되었다고 체크되면 안되므로 되돌려 놓는다.
	}
	return (0);
}
