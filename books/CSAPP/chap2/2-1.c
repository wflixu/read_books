#include <stdio.h>
int main(){
	 short x=123456;
	 short mx=-x;
	 show_bytes((byte_pointer) &x,sizeof(short));
	 show_bytes((byte_pointer) &mx,sizeof(short));
	return 0;
} 
