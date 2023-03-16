#include <iostream>
#include <vector>
#include <string>
#include <cmath>

int N, answer = -1;
std::vector<std::pair<char, int> > blocks;
std::string nextStep = "BOJ";

void input()
{
	std::cin >> N;
	char temp;
	for (int i = 0; i < N; i++)
	{
		std::cin >> temp;
		blocks.push_back(std::make_pair(temp, -1));
	}
	blocks[0].second = 0;
}

void solve()
{
	int step;
	for (int now = 1; now < N; now++)
	{
		if (blocks[now].first == 'B')
			step = 3;
		else if (blocks[now].first == 'O')
			step = 1;
		else
			step = 2;

		for (int before = now - 1; before >= 0; before--)
		{
			if (blocks[before].second != -1 && blocks[before].first == nextStep[(step - 1) % 3])
			{
				if (blocks[now].second == -1)
					blocks[now].second = blocks[before].second + std::pow(now - before, 2);
				else
					blocks[now].second = std::min(blocks[now].second, blocks[before].second + (int)(std::pow(now - before, 2)));
			}
		}
	}
}

int main()
{
	input();
	solve();
	std::cout << blocks[N - 1].second << "\n";
	return 0;
}