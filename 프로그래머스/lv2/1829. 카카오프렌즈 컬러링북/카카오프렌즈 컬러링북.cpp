#include <vector>

using namespace std;

// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
int section_size;

static void size_check(int m, int n, vector<vector<int> > &picture, int i, int j, int num)
{
    section_size += 1;
    picture[i][j] = -1;
    if (i > 0 && picture[i - 1][j] == num)
        size_check(m, n, picture, i - 1, j, num);
    if (i < m - 1 && picture[i + 1][j] == num)
        size_check(m, n, picture, i + 1, j, num);
    if (j > 0 && picture[i][j - 1] == num)
        size_check(m, n, picture, i, j - 1, num);
    if (j < n - 1 && picture[i][j + 1] == num)
        size_check(m, n, picture, i, j + 1, num);
}

vector<int> solution(int m, int n, vector<vector<int>> picture)
{
    int number_of_area = 0;
    int max_size_of_one_area = 0;
    
    vector<int> answer(2);
    answer[0] = number_of_area;
    answer[1] = max_size_of_one_area;
    
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (picture[i][j] != 0 && picture[i][j] != -1)
            {
                section_size = 0;
                answer[0] += 1;
                size_check(m, n, picture, i, j, picture[i][j]);
                answer[1] = max(section_size, answer[1]);
            }
        }
    }
    return answer;
}