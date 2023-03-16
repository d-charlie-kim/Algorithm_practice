#include <iostream>
#include <vector>
#include <cctype>

#define MINUS 0
#define PLUS 1

int answer = 0;
std::string str;
std::vector<int> numbers;
std::vector<char> symbol; 

void input()
{
	std::cin >> str;
	symbol.push_back('+');

	int temp = 0;
	for (int i = 0; i < str.size(); i++)
	{
		if (isdigit(str[i]))
		{
			temp = (temp * 10) + (str[i] - '0');
		}
		else
		{
			numbers.push_back(temp);
			temp = 0;
			symbol.push_back(str[i]);
		}
	}
	numbers.push_back(temp);
}

void solve()
{
	int flag = PLUS;

	for (int i = 0; i < numbers.size(); i++)
	{
		if (flag == MINUS)
			answer -= numbers[i];
		else if (flag == PLUS && symbol[i] == '-')
		{
			answer -= numbers[i];
			flag = MINUS;
		}
		else if (flag == PLUS)
			answer += numbers[i];
	}
}

int main()
{
	input();
	solve();
	std::cout << answer << "\n";
	return 0;
}