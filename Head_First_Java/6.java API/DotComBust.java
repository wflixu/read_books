package Chapter6;
import java.util.*;
public class DotComBust {
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//声明一个GameHelper 实例变量  helper；
		//声明一个类型为 DotCom 的 ArrayList列表 dotComsList；
		//声明游戏者猜的数目  numOfGuesses 初始为 0
		
        //声明 setUpGame（）方法  生成并初始化 DotCom 对象 的name 和 locations
		
	}
	
	GameHelper helper = new GameHelper();
	ArrayList<DotCom> dotComsList = new ArrayList<DotCom>();
	int numOfGuessess=0;
	
	void setUpGame(){
		for(int i=0;i<3;i++){
			DotCom ls = new DotCom();
			ls.name = "dot"+ i;
		}
	}
	void startPlaying(){
		
	}
	void finishGame(){
		
	}
}
