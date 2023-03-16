#include <cstdio>

int main() {
	int N, count = 0;
	scanf("%d", &N);
	int temp = (N % 7);

	count += (N / 7);
	if (temp == 4 || temp == 6)
		count += 2;
	else if (temp != 0)
		count += 1;
	if (N == 3)
		count = 2;
	printf("%d\n", count);
}
