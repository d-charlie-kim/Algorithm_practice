#include <stdio.h>

int main()
{
	int N, M, goal = 0;
	scanf ("%d", &N);
	int nums[11] = { 0, };
	for (int i = 0; i < N; i++)
		scanf("%d", &(nums[i]));
	scanf("%d", &M);
	
	// 최대 숫자의 자릿수 (size) 확인
	int min = 51, size;
	for (int i = 1; i < N; i++)
	{
		if (min > nums[i])
			min = nums[i];
	}
	if (M < min)
	{
		printf("0\n");
		return (0);
	}
	size = M / min;
	// 가장 싼 숫자 많이 사는 것 과
	// 가장 싼 숫자 하나와 숫자 '0' 많이 사는 것 비교
	if (size < ((M - min) / nums[0]) + 1)
		size = ((M - min) / nums[0]) + 1;
	if (min > nums[0])
		min = nums[0];

	// 가장 큰 숫자 하나 사고 / 가장 싼 숫자 많이 샀을 때 자릿수 비교
	// 최대 숫자의 자릿수와 같다면 해당하는 수 출력.
	// 반복.
	int count = 0, temp = 0;
	for (int i = 1; size > 0 && i < N; i++)
	{
		temp = M - nums[N - i];
		if (temp >= 0 && (temp / min) == size - 1)
		{
			printf("%d", N - i);
			size--;
			M = M - nums[N - i];
			i--;
		}
	}
	for (; size > 0; size--)
		printf("0");
	printf("\n");
}
