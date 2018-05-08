#include <stdio.h> 
int main(){
	int in=0;
	int out =0;
	int x,y,z;
	printf("请输入数字\n");
	scanf("%d",&in);
	x=in/100;
	y=(in%100)/10;
	z=in%10;
	out = z*100+y*10+x;
	printf("输入的结果是：\n %d",out); 
	return 0;
}
