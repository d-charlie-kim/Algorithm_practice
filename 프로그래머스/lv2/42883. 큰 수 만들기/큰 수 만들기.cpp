#include <string>
#include <vector>

using namespace std;

string solution(string number, int k) {
    string answer = "";
    for (;k > 0;)
    {
        int temp = k;
        for (int i = 0; i < number.length() - 1; i++)
        {
            if (number[i] < number[i + 1])
            {
                number.erase(i, 1);
                k--;
                break;
            }
        }
        if (temp == k)
            break ;
    }
    for (; k > 0; k--)
        number.pop_back();
    answer = number;
    return answer;
}