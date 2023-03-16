#include <iostream>

int N;
int nums[51];

int main()
{
	std::cin >> N;

	int temp;
	for (int i = 0; i < N; i++)
	{
		std::cin >> temp;
		nums[temp] += 1;
	}
	for (int i = 50; i >= -1; i--)
	{
		if (i == -1)
			std::cout << i << "\n";
		else if (nums[i] == i)
		{
			std::cout << i << "\n";
			break;
		}
	}
	return 0;
}