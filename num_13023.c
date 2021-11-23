#include <stdio.h>
#include <stdlib.h>

typedef struct s_list
{
	int index;
	struct s_list *next;
}	t_list;

int check = 0;

void	checking(t_list *list, int first, int second, int third, int fourth, int fifth)
{
	t_list *ptr;

	// printf("%d : %d : %d : %d : %d\n", first, second, third, fourth, fifth);
	if (second == -1)
	{
		ptr = list[first].next;
		while (ptr != NULL)
		{
			if (ptr->index != first)
				checking(list, first, ptr->index, -1, -1, -1);
			ptr = ptr->next;
		}
	}
	else if(third == -1)
	{
		ptr = list[second].next;
		while (ptr != NULL)
		{
			if (ptr->index != first && ptr->index != second)
				checking(list, first, second, ptr->index, -1, -1);
			ptr = ptr->next;
		}
	}
	else if (fourth == -1)
	{
		ptr = list[third].next;
		while (ptr != NULL)
		{
			if (ptr->index != first && ptr->index != second && ptr->index != third)
				checking(list, first, second, third, ptr->index, -1);
			ptr = ptr->next;
		}
	}
	else
	{
		ptr = list[fourth].next;
		while (ptr != NULL)
		{
			if (ptr->index != first && ptr->index != second && ptr->index != third && ptr->index != fourth)
			{
				printf("1\n");
				exit (0);
			}
			ptr = ptr->next;
		}
	}
}

int	main(void)
{
	int i, N, M, a, b;
	t_list *list;
	t_list *ptr;
	scanf("%d%d", &N, &M);
	list = (t_list *)malloc(sizeof(t_list) * (N + 1));
	for (int i = 0; i < N; i++)
	{
		list[i].next = NULL;
		list[i].index = -1;
	}
	i = 0;

	while (i < M)
	{
		scanf("%d%d", &a, &b);
		ptr = &(list[a]);
		while (ptr->next != NULL)
			ptr = ptr->next;
		ptr->next = (t_list *)malloc(sizeof(t_list));
		ptr = ptr->next;
		ptr->index = b;
		ptr->next = NULL;
		ptr = &(list[b]);
		while (ptr->next != NULL)
			ptr = ptr->next;
		ptr->next = (t_list *)malloc(sizeof(t_list));
		ptr = ptr->next;
		ptr->index = a;
		ptr->next = NULL;
		i++;
	}
	int host = 0;
	while (host < N)
	{
		checking (list, host, -1, -1, -1, -1);
		host++;
	}
	printf("0\n");
	return (0);
}
