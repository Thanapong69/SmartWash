package com.app;

import com.facebook.react.ReactActivity;
import android.content.Intent;     // <--- import;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;

public class MainActivity extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        return "App";
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
}
