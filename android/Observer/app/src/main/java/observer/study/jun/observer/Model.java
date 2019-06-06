package observer.study.jun.observer;

import java.util.ArrayList;
import java.util.List;
import java.util.Observable;

public class Model extends Observable {
    private List<Integer> mList;

    public Model(){
        mList = new ArrayList<>(3);
        for(int i = 0; i < 3; i++){
            mList.add(0);
        }
    }

    public int getValueAtIndex(final int the_index) throws IndexOutOfBoundsException{
        return mList.get(the_index);
    }

    public void setValueAtIndex(final int the_index) throws IndexOutOfBoundsException{
        System.out.println("index " + the_index);
        System.out.println("value " + (mList.get(the_index) + 1));

        int value = mList.get(the_index) + 1;
        mList.set(the_index, value);
        setChanged();
        notifyObservers();
    }
}
