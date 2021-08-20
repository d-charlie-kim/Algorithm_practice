#include <stdio.h>

int main()
{
	int size;
	long long count = 0;
	int nums[100001];
	int zero = 0;
	scanf("%d", &size);
	for (int i = 0; i < size; i++)
		scanf("%d", &nums[i]);
	for (int i = size - 1; i >= 0; i--)
	{
		if (nums[i] == 0)
			zero++;
		else if (zero > 0 && nums[i] != 0)
		{
			nums[i] = 0;
			zero--;
		}
	}
	for (int i = 0; i < size; i++)
		count = count + nums[i];
	printf("%lld\n", count);
}
