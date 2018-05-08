package Chapter4;

public class ClockTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Clock c =new Clock();
		c.setTime("1245");
		String tod  = c.getTime();
		System.out.println("time:"+tod);
	}

}
