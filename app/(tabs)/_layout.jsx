import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => <Icon name="add-circle" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
