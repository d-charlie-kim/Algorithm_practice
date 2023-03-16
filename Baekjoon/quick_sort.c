#include <stdio.h>
#include <stdlib.h>

void recursive_sort(int **arr, int left, int right)
{
	int *nums = *arr;
	int low = left + 1, high = right;
	int pivot = nums[left];
	int temp;
	if (left < right)
	{
		while (low <= high)
		{
			while (low <= right && pivot > nums[low])
				low++;
			while (left <= high && pivot < nums[high])
				high--;
			if (low < high)
			{
				temp = nums[high];
				nums[high] = nums[low];
				nums[low] = temp;
			}
		}
		nums[left] = nums[high];
		nums[high] = pivot;
		recursive_sort(arr, left, high - 1);
		recursive_sort(arr, high + 1, right);
	}
}

int main()
{
	int *nums;
	int size = 0;
	scanf("%d", &size);
	nums = (int *)malloc(sizeof(int) * size);
	for(int i = 0; i < size; i++)
		scanf("%d", &nums[i]);
	recursive_sort(&nums, 0, size - 1);
	for(int i = 0; i < size; i++)
		printf("%d\n", nums[i]);
}
