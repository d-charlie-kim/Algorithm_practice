#include <iostream>
#include <string>
#include <algorithm>

int N, answer = 0;
char board[51][51];

void input()
{
	std::cin >> N;
	for (int i = 0; i < N; i++)
	{
		for (int j = 0; j < N; j++)
		{
			std::cin >> board[i][j];
		}
	}
}

int count(int x, int y)
{
	char check;
	int max = 0, temp = 1;

	if (x == -1)
	{
		check = board[0][y];
		for (int i = 1; i < N; i++)
		{
			if (board[i][y] == check)
			{
				temp += 1;
			}
			else
			{
				max = std::max(max, temp);
				temp = 1;
				check = board[i][y];
			}
		}
		max = std::max(max, temp);
	}
	else if (y == -1)
	{
		check = board[x][0];
		for (int j = 1; j < N; j++)
		{
			if (board[x][j] == check)
				temp += 1;
			else
			{
				max = std::max(max, temp);
				temp = 1;
				check = board[x][j];
			}
		}
		max = std::max(max, temp);
	}
	return max;
}

int change(int a, int b, int c, int d)
{
	if (c == N || d == N)
		return 0;

	char temp = board[a][b];
	board[a][b] = board[c][d];
	board[c][d] = temp;

	int max = 0;
	max = std::max(max, count(a, -1));
	max = std::max(max, count(c, -1));
	max = std::max(max, count(-1, b));
	max = std::max(max, count(-1, d));

	board[c][d] = board[a][b];
	board[a][b] = temp;

	return (max);
}

void solve()
{
	for (int i = 0; i < N; i++)
	{
		for (int j = 0; j < N; j++)
		{
			answer = std::max(answer, change(i, j, i + 1, j));
			answer = std::max(answer, change(i, j, i, j + 1));
		
			if (answer == N)
				return ;
		}
	}
}

int main()
{
	std::cin.tie(NULL);
	std::ios::sync_with_stdio(false);
	input();
	solve();
	std::cout << answer << "\n";
	return 0;
}