#include <iostream>

int N, A, B;
int Total[11];
int Major[11];

void input()
{
	std::cin >> N >> A >> B;

	int X, Y;
	for (int i = 0; i < 10; i++)
	{
		std::cin >> X >> Y;
		Major[i] = X;
		Total[i] = X + Y;
	}
}

bool solve()
{
	int sem = N + 1;

	for (int i = 0; i < 10; i++)
	{
		if (sem > 8)
			break;
		A += (Major[i] * 3);
		B += (std::min(Total[i], 6) * 3);
		sem += 1;
	}
	
	if (A < 66 || B < 130)
		return false;
	return true;
}

int main()
{
	// N학기, 전공학점 A, 총 B학점 이수
	// 졸업 조건: 총 130학점, 전공학점 66학점
	// 10개의 학기 제공
	// 최대 6과목 수강 가능, 한 과목당 3학점
	input();

	if (solve())
		std::cout << "Nice" << "\n";
	else
		std::cout << "Nae ga wae" << "\n";
	return 0;
}