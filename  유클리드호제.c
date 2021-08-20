#include <stdio.h>

int gcd(int x,int y){
    if(y==0)
        return x;
    else
        return gcd(y,x%y);
}

int main(void){
    int x[1000],y[1000],N;
    scanf("%d",&N);
    for(int i=0;i<N;i++){
        scanf("%d %d",&x[i],&y[i]);
    }
    for(int i=0;i<N;i++){
        printf("%d\n",((x[i]/ gcd(x[i],y[i]))*(y[i]/ gcd(x[i],y[i])))* gcd(x[i],y[i]));
    }
}
