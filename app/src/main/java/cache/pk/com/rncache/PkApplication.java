package cache.pk.com.rncache;

import android.app.Activity;
import android.app.Application;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by pukai on 17/7/4.
 */

public class PkApplication extends Application{


    private List<Activity> mList = new LinkedList<Activity>();
    public void addActivity(Activity activity) {
        mList.add(activity);
    }
    public void removeActivity(Activity activity){
        mList.remove(activity);
    }
    public void exitAll() {
        try {
            for (Activity activity:mList) {
                if (activity != null)
                    activity.finish();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            System.exit(0);
        }
    }
}
