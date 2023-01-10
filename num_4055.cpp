#include <iostream>
#include <vector>
#include <algorithm>

int P;
std::vector <int> Time[25];

void Input()
{
	int s, e;
	for (int i = 0; i < P; i++)
	{
		std::cin >> s >> e;
		Time[s].push_back(e);
	}
}

int Solve()
{
	int count = 0;
	for (int hour = 8; hour < 24; hour++)
	{
		if (Time[hour].size() <= 2)
		{
			count += Time[hour].size();
		}
		else if(Time[hour].size() > 2)
		{
			count += 2;
			std::sort(Time[hour].begin(), Time[hour].end());
			for (int i = 2; i < Time[hour].size(); i++)
			{
				if (Time[hour][i] > hour + 1)
					Time[hour + 1].push_back(Time[hour][i]);
			}
		}
	}
	return count;
}

void Print(int d, int n)
{
	std::cout << "On day " << d << " Emma can attend as many as " << n << " parties." << "\n";
}

void Clear()
{
	for (int i = 0; i < 25; i++)
	{
		Time[i].clear();
	}
}

int main()
{
	std::cin >> P;
	for (int d = 1; P != 0; d++)
	{
		Input();		
		int n = Solve();
		Print(d, n);
		Clear();
		std::cin >> P;
	}
}