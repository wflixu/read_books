#include <stdio.h>
#include <string.h>

typedef unsigned char *byte_pointer;


void inplace_swap(int *x, int *y){
    *y = *x ^ *y;
    *x = *x ^ *y;
    *y = *x ^ *y;
}


void reverse_array(int a[],int cnt){
    int first,last;
    for(first=0,last=cnt-1;first<last;first++,last--){
        inplace_swap(&a[first], &a[last]);
    }
}


int main(){
	
     int arr[4] ={1,2,3,4};

    reverse_array(arr,4);
    int i=0;
     for(;i<4;i++){
         printf("arr[%d]=%d\n",i,arr[i]);
     }
	return 0;
}
 

