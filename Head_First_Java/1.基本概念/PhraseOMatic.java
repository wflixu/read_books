

public class PhraseOMatic {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] wordList1 = {"24/7","multi-Tier","3000 foot","B-to-B","win-win","front-end","web-based","pervasive","smart","six-sigma","critical-path","dynamic"};
		String[] wordList2 = {"empowered","sticky","value-added","oriented","centric","distributed","clustered","branded","outside-the-box","positioned","networked","focused","leveraged","aligned","targeted","networked","focused","shared","coopertive","accelerate"};
		String[] wordList3 = {"process","tippping-point","solution","architecture","core competency","strategy","mindshare","portal","space","vision","paradigm","mission"};
		
		//����ÿһ���ж��ٸ���������
		int oneLength = wordList1.length;
		int twoLength = wordList2.length;
		int threeLength = wordList3.length;
		
		for(int i = 0;i<10;i++){
			//�����������
			int rand1 = (int) (Math.random()*oneLength);
			int rand2 = (int) (Math.random()*twoLength);
			int rand3 = (int) (Math.random()*threeLength);
			
			//��ϳ�ר������
			String phrase = wordList1[rand1]+ " " + wordList2[rand2] + " " + wordList3[rand3];
			System.out.println("What we need is a " + phrase);
		}
		
	}

}
