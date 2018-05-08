package Chapter4;

public class XCopy {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int orig = 42;
		XCopy x  = new XCopy();
		int y = x.go(orig);
		System.out.println(orig+ " " + y);
	}
	int go(int arg){
		arg = arg * 2;
		return arg;
	}

}
