#include <iostream>

int N, S, answer = 0;
int nums[21];

void input()
{    
	std::cin >> N >> S;
	for (int i = 0; i < N; i++)
		std::cin >> nums[i];
}

void solve(int sum, int index)
{
	sum += nums[index];
	if (sum == S)
		answer += 1;
	if (index < N - 1)
	{
		solve(sum, index + 1);
		solve(sum - nums[index], index + 1);
	}
}

int main()
{	
	std::cin.tie(NULL);
	std::ios::sync_with_stdio(false);

	input();
	solve(0, 0);
	std::cout << answer << "\n";
	return 0;
}