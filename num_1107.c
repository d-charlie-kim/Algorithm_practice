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
	temp = goal;
	size = 0;
	
	// 목표 번호 자릿수 체크
	for (; temp > 0; (temp = temp / 10))
		size++;
	if (goal == 0)
		size = 1;

	// 목표 번호 num 배열에 하나씩 넣음
	temp = goal;
	for (int i = size - 1; temp > 0; i--)
	{
		num[i] = temp % 10;
		temp = temp / 10;
	}

	// "A < goal < B" 의 A와 B 구하기
	// B = goal 보다 큰 최솟값
	int i;
	temp = size;
	B = num[i] + 1;
	i = 0;
	for (; i < 10; i++)
		if (button[i] == 1)
			break;
	for (; temp > 1; temp--)
		B = B * 10 + i;

	// A = goal 보다 작은 최댓값
	temp = size - 1;
	for (int i = 0; i < size && button[num[i] == 1]; i++ && temp--)
		A = A * 10 + num[i];  
	i = 9;
	for (; i > 0; i--)
		if (button[i] == 1)
			break;
	while (temp > 0)
	{
		A = A * 10 + i;
		temp--;
	}
	printf("%d\n", A);
	

	// // A 혹은 B 혹은 100 중에서 어느 접근이 가장 빠른지 판단
	// if ()
	// {
		
	// }
	// else
	// {
		
	// }
	// // 처음 숫자 버튼 누르는 횟수 합산
	// count = count + size;
	// printf("%d\n", count);
}
