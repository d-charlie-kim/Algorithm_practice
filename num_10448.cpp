#include <iostream>
#include <vector>

int T, K, answer;
std::vector<int> nums;

void input()
{
	std::cin >> T;
	for (int i = 1, num = 0; num < 1000; i++)
	{
		num += i;
		nums.push_back(num);
	}
}

void solve()
{
	for (int i = 0; i < T; i++)
	{
		std::cin >> K;
		for (int a = 0; nums[a] < K; a++)
		{
			for (int b = a; nums[b] < K; b++)
			{
				for (int c = b; nums[c] < K; c++)
				{
					if (nums[a] + nums[b] + nums[c] == K)
					{
						std::cout << 1 << "\n";
						K = 0;
					}
				}
			}
		}
		if (K != 0)
			std::cout << 0 << "\n";
	}
}

int main()
{
	input();
	solve();
	return 0;
}