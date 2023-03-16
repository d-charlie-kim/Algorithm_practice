#include <iostream>
#include <vector>
#include <algorithm>

int N, K;
std::vector<int> coins;
int answer = 0;

void input()
{
	std::cin >> N >> K;

	int temp;
	for(int i = 0; i < N; i++)
	{
		std::cin >> temp;
		coins.push_back(temp);
	}
	std::sort(coins.begin(), coins.end());
}

void solve()
{
	for (int i = N - 1; i >= 0; i--)
	{
		// std::cout << "K: " << K << "\n";
		// std::cout << "coins: " << coins[i] << "\n";
		if (K == 0)
			break;

		if (coins[i] <= K)
		{
			answer += (K / coins[i]);
			K = (K % coins[i]);
		}
	}
}

int main()
{
	input();
	solve();
	std::cout << answer << "\n";
	return 0;
}