package Chapter6;
import java.util.*;
public class DotComBust {
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//����һ��GameHelper ʵ������  helper��
		//����һ������Ϊ DotCom �� ArrayList�б� dotComsList��
		//������Ϸ�߲µ���Ŀ  numOfGuesses ��ʼΪ 0
		
        //���� setUpGame��������  ���ɲ���ʼ�� DotCom ���� ��name �� locations
		
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
