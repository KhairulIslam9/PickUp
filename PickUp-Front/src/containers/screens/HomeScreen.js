import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

import AppButton from "../../components/AppButton";
import useLocation from "../../hooks/useLocation";
import userApi from "../../api/user";
import useApi from "../../hooks/useApi";
import AppText from "../../components/AppText";
import routes from "../../config/routes";

const HomeScreen = (props) => {
  const getUserAvailableApi = useApi(userApi.getUserAvailableAround);
  const k = useLocation();
  const [listP, setListP] = useState();

  useEffect(() => {
    getUserAvailable();
  }, []);

  const getUserAvailable = async () => {
    const result = await getUserAvailableApi.request();
    if (!result.ok) {
      console.log(result);
      return null;
    }
    setListP(result.data);
  };

  return (
    <View>
      <AppButton
        title="Open drawler"
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <AppButton
        title="Nzg"
        onPress={() =>
          props.navigation.navigate(routes.USER_PROFILE_SCREEN_2, {
            params: { proId: 1 },
          })
        }
      />
      {/* <FlatList
        data={listP}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => <AppText>{item.name}</AppText>}
      /> */}
    </View>
  );
};

export default HomeScreen;
