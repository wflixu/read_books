#include <stdio.h> 
int main(){
	int in=0;
	int out =0;
	int x,y,z;
	printf("����������\n");
	scanf("%d",&in);
	x=in/100;
	y=(in%100)/10;
	z=in%10;
	out = z*100+y*10+x;
	printf("����Ľ���ǣ�\n %d",out); 
	return 0;
}
