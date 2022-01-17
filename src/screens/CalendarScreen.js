import React from "react";
import { View,Text } from "react-native";
import { CalendarList } from "react-native-calendars";

const CalendarScreen = () => {
  return (
    <View >
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {
          console.log("now these months are visible", months);
        }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
      />
      {/* <Text>Text</Text> */}
      
    </View>
  );
};
export default CalendarScreen;
