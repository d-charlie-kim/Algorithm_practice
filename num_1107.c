#include <stdio.h>

int main()
{
	int goal, broken_size, broken_button;
	int button[10];
	int num[6] = { 0, };
	int temp, size, A, B, count = 0;
	
	// 버튼 모두 1로 초기화
	for(int i = 0; i < 10; i++)
		button[i] = 1;

	// 고장난 버튼 0으로
	scanf("%d%d", &goal, &broken_size);
	for (int i = 0; i < broken_size; i++)
	{
		scanf("%d", &broken_button);
		button[broken_button] = 0;
	}
	
	// 목표 번호 자릿수 체크
	temp = goal;
	size = 0;
	for (; temp > 0; (temp = temp / 10))
		size++;
	if (goal == 0)
		size = 1;
	
	// goal 보다 큰 최솟값으로 부터 goal 로 가는 횟수 : A
	// A 구하기
	A = 0;
	count = 0;
	for (int i = 0; i <= 500000; i++)
	{
		temp = goal + i;
		while (temp > 0 && button[temp % 10] == 1)
		{
			temp = temp / 10;
			count++;
		}
		if (temp == 0 && count == 0 && button[0] == 1)
			count = 1;
		if (temp == 0 && count != 0)
		{
			A = i + count;
			break;
		}
		count = 0;
	}
	if (count == 0)
		A = 500000;

	// goal보다 작은 최댓값으로부터 goal로 가는 횟수 : B
	// B 구하기
	B = 0;
	count = 0;
	for (int i = 0; i <= goal; i++)
	{
		temp = goal - i;
		while (temp > 0 && button[temp % 10] == 1)
		{
			temp = temp / 10;
			count++;
		}
		if (temp == 0 && count == 0 && button[0] == 1)
			count = 1;
		if (temp == 0 && count != 0)
		{
			B = i + count;
			break;
		}
		count = 0;
	}
	if (count == 0)
		B = 500000;

	// A와 B 그리고 채널100으로부터 출발하는것 중 최솟값
	if (A > B)
		count = B;
	else
		count = A;
	if (goal > 100 && count > goal - 100)
		count = goal - 100;
	else if (goal <= 100 && count > 100 - goal)
		count = 100 - goal;
	printf("%d\n", count);
}
