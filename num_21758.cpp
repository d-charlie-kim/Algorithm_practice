#include <cstdio>
#include <algorithm>
#include <iostream>

int *array;

unsigned int forward(unsigned int base, int N) {
	unsigned int candidate = base;

	for (int pivot = 1; pivot < N - 2; pivot++) {
		unsigned int temp = base + array[pivot] - array[pivot + 1] - array[pivot + 1];
		if (temp > candidate)
			candidate = temp;	
		base = temp;
	}
	return candidate;
}

unsigned int backward(unsigned int base, int N) {
	unsigned int candidate = base;

	for (int pivot = N - 2; pivot > 1; pivot--) {
		unsigned int temp = base + array[pivot] - array[pivot - 1] - array[pivot - 1];
		if (temp > candidate)
			candidate = temp;
		base = temp;
	}
	return candidate;
}

unsigned int midrange(unsigned int base, int N) {
	unsigned int candidate = 0;

	for (int pivot = 1; pivot < N - 1; pivot++) {
		unsigned int temp = base + array[pivot];
		if (temp > candidate)
			candidate = temp;
	}
	return candidate;
}

int main() {
	int N = 0;
	unsigned int temp = 0, baseSum = 0;
	scanf("%d", &N);
	array = new int[N];

	for (int i = 0; i < N; i++) {
		scanf("%d", &temp);
		baseSum += temp;
		array[i] = temp;
	}

	baseSum *= 2;
	unsigned int first = forward(baseSum - array[0] - array[0] - array[1] - array[1], N);
	unsigned int second = backward(baseSum - array[N - 1] - array[N - 1] - array[N - 2] - array[N - 2], N);
	unsigned int third = midrange((baseSum / 2) - array[0] - array[N - 1], N);

	std::cout << std::max(std::max(first, second), third) << "\n";
}
