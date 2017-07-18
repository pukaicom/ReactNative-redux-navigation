package cache.pk.com.rncache;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by pukai on 17/4/26.
 */

public class ReactNativeActivity extends BaseReactActivity {
    public static final String JS_MAIN_MODULE_NAME = "Test";
    public static final String JS_MAIN_BUNDLE_NAME = "index.android";
    public static final String JS_BUNDLE_LOCAL_FILE = "index.android.bundle";
    private boolean isFirstResume = true;
    boolean isSendEmitter = true;

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        ((PkApplication)getApplication()).addActivity(this);
        super.onCreate(savedInstanceState);
        Log.d("initRnactivity", "ReactNativeActivity onCreate");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d("initRnactivity", "ReactNativeActivity onResume");
        if(!isFirstResume&&isSendEmitter) {
            WritableMap params = Arguments.createMap();
            params.putInt("name", 666);
            try {
                mReactInstanceManager.getCurrentReactContext()
                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("test", params);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }else{
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
        }
        if (isFirstResume) {
            isFirstResume = false;
        }
    }
    @Override
    protected void onDestroy() {
        Log.d("initRnactivity", "ReactNativeActivity onDestroy");
        ((PkApplication)getApplication()).removeActivity(this);
        super.onDestroy();
    }

    @Override
    public void finish() {
        Log.d("initRnactivity", "ReactNativeActivity finish");
        super.finish();
    }

    @Override
    protected String getJsModuleName() {
        return JS_MAIN_MODULE_NAME;
    }

    @Override
    protected ReactPackage getPackages() {
        return new PkReactPackage();
    }

    @Override
    protected String getMainBundleName() {
        return JS_MAIN_BUNDLE_NAME;
    }

    @Override
    protected String getJSBundleFile() {
        return null;
    }

    @Override
    protected String getBundleAssetName() {
        return JS_BUNDLE_LOCAL_FILE;
    }

}
