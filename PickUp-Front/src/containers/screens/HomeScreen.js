import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import * as Permissions from "expo-permissions";

import useLocation from "../../hooks/useLocation";
import userApi from "../../api/user";
import useApi from "../../hooks/useApi";
import promosApi from "../../api/promos";
import routes from "../../config/routes";
import AppText from "../../components/AppText";
import UserCard from "../../components/UserCard";

const HomeScreen = (props) => {
  const getUserAvailableApi = useApi(userApi.getUserAvailableAround);
  const getPromosApi = useApi(promosApi.getPromos);
  const k = useLocation();
  const [listP, setListP] = useState();
  const [listPromos, setListPromos] = useState();

  useEffect(() => {
    getUserAvailable();
    getPromos();
  }, []);

  const getUserAvailable = async () => {
    const result = await getUserAvailableApi.request();
    if (!result.ok) {
      console.log(result);
      return null;
    }
    setListP(result.data);
  };

  const getPromos = async () => {
    const result = await getPromosApi.request();
    if (!result.ok) {
      console.log(result);
      return null;
    }
    setListPromos(result.data);
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{ padding: 10, paddingBottom: 100 }}
        ListHeaderComponent={
          <View>
            <Text style={{ fontSize: 30, marginLeft: 10 }}>
              Disponible dans l'heure:
            </Text>
            <FlatList
              horizontal
              data={listP}
              keyExtractor={(item) => item.userId.toString()}
              renderItem={({ item, index }) => (
                <View>
                  <UserCard
                    key={index}
                    headerTitle={item.name}
                    thumbnail={item.thumbnail}
                    image={item.url}
                    imageWidth={300}
                    onPress={() => console.log("pres")}
                  />
                </View>
              )}
            />
          </View>
        }
        ListFooterComponent={
          <View>
            <Text style={{ fontSize: 30, marginLeft: 10 }}>Promotion:</Text>
            <FlatList
              data={listPromos}
              keyExtractor={(item) =>
                item.eventId.toString() + item.userId.toString()
              }
              renderItem={({ item, index }) => (
                <View>
                  <UserCard
                    key={index}
                    headerTitle={item.description}
                    thumbnail={item.thumbnail}
                    image={item.url}
                    onPress={() => console.log("pres")}
                  />
                </View>
              )}
            />
          </View>
        }
      />
    </View>
  );
};

export default HomeScreen;
