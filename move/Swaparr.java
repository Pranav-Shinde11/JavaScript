import java.util.Arrays;

public class Swaparr {
    public static void main(String[] args) {
        int[]arr = { 1,2,3,4,5};
        reverse(arr);
        System.out.println(Arrays.toString(arr));
//        System.out.println(reverse(Arrays.toString(arr)));
//        System.out.println(reverse(Arrays.toString(arr));)
    }

    public static void reverse (int[] arr){
        int s = 0;
        int e = arr.length-1;

        while(s < e ){

            Swap(arr,s,e);
//            int temp = arr[s];
//            arr[s] = arr[e];
//            arr[e] =temp;
            s++;
            e--;
        }
    }

    public static void Swap(int[] arr,int a , int b){
        int temp = arr[a];
        arr[a] = arr[b] ;
        arr[b] = temp;
    }
}