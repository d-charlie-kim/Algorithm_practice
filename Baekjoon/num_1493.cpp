#include <iostream>
#include <cmath>

long long L, W, H, N;
long long coinCount[21];
long long coinSize[21];
long long answer = 0;

void input()
{
	std::cin >> L >> W >> H >> N;

	int size;
	for (int i = 1; i <= N; i++)
	{
		std::cin >> size;
		coinSize[i] = std::pow(2, size);
		std::cin >> coinCount[i];
	}
}

void recursive(long long length, long long width, long long height, int index)
{
	if (answer == -1)
		return ;
	if (length == 0 || width == 0 || height == 0)
		return ;

	if (index == 1)
	{
		long long total = length * width * height;
		long long lastSize = std::pow(coinSize[1], 3);

		if ((total % lastSize) == 0 && total <= (lastSize * coinCount[1]))
		{
			answer += (total / lastSize);
			coinCount[1] -= (total / lastSize);
		}
		else
			answer = -1;
		return ;
	}

	if (length >= coinSize[index] && width >= coinSize[index] && height >= coinSize[index] && coinCount[index] != 0)
	{
		answer += 1;
		coinCount[index] -= 1;

		recursive(length, width - coinSize[index], height, index);
		recursive(length - coinSize[index], coinSize[index], height, index);
		recursive(coinSize[index], coinSize[index], height - coinSize[index], index);
	}
	else
		recursive(length, width, height, index - 1);
}

void solve()
{
	recursive(L, W, H, N);
}

void output()
{
	std::cout << answer << "\n";
}

int main()
{
	std::cin.tie(NULL);
	std::ios::sync_with_stdio(false);

	input();
	solve();
	output();
	return 0;
}
