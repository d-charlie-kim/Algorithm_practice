#include <iostream>
#include <string>
#include <algorithm>

int H, W, answer = 64;
std::string board[51];
std::string color = "BW";

void input()
{
	std::cin >> H >> W;
	for (int i = 0; i < H; i++)
		std::cin >> board[i];
}

void solve()
{
	int count, colorCheck;
	for (int h = 0; h <= H - 8; h++)
	{
		for (int w = 0; w <= W - 8; w++)
		{
			count = 0;
			colorCheck = 1;
			for (int i = h; i < h + 8; i++)
			{
				colorCheck -= 1;
				for (int j = w; j < w + 8; j++)
				{
					if (board[i][j] == color[colorCheck % 2])
						count += 1;
					colorCheck += 1;
				}
			}
			answer = std::min(answer, std::min(count, 64 - count));
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