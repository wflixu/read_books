package Chapter6;
import java.util.ArrayList;
public class DotCom {
	String name;
	private ArrayList<String>locationCells; 
	
	public void setLocationCells(ArrayList<String> loc){
		locationCells = loc;
	}
	
	public String CheckYourself (String stringGuess){
		int guess = Integer.parseInt(stringGuess);
		String result = "miss";
		int index = locationCells.indexOf(guess);
		if(index>0){
			locationCells.remove(index);
			if(locationCells.isEmpty()){
				result = "kill";
			}else {
				result= "hit";
			}
		}
		System.out.println(result);
		return result;
	}
}
}
