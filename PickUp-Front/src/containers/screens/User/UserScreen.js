import React, { useEffect, useState } from "react";
import { View, FlatList, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { detailProAction } from "../../../store/actions/detailProAction";
import { listCategoryAction } from "../../../store/actions/listCategoryAction";
import CategoryButton from "../../../components/CategoryButton";
import { listProAction } from "../../../store/actions/listProAction";
import UserCard from "../../../components/UserCard";
import categoryApi from "../../../api/category";
import userApi from "../../../api/user";
import useApi from "../../../hooks/useApi";
import AppActivityIndicator from "../../../components/AppActivityIndicator";

const UserScreen = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const getCategoryApi = useApi(categoryApi.getCategory);
  const getUserApi = useApi(userApi.getUser);
  const getUserByCategoryApi = useApi(userApi.getUserByCategory);

  useEffect(() => {
    getCategory();
    getUser();
  }, []);

  const getCategory = async () => {
    const result = await getCategoryApi.request();
    if (!result.ok) {
      console.log(result);
      return null;
    }
    props.listCategoryAction(result.data);
  };

  const getUser = async () => {
    const result = await getUserApi.request();
    if (!result.ok) {
      console.log(result);
      return null;
    }
    props.listProAction(result.data);
  };

  const getUserByCategory = async (id) => {
    const result = await getUserByCategoryApi.request(id.toString());
    if (!result.ok) {
      console.log(result);
      return null;
    }
    props.listProAction(result.data);
  };

  const handlerItem = (item) => {
    props.navigation.navigate("UserProfile", { userId: item.userId });
  };

  return (
    <>
      <AppActivityIndicator
        visible={
          getUserApi.loading ||
          getCategoryApi.loading ||
          getUserByCategoryApi.loading
        }
      />
      <View style={styles.container}>
        <View style={styles.category}>
          <CategoryButton name="Tout" onPress={getUser} />
          <ScrollView
            horizontal={true}
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
          >
            {props.listCat?.map((item, index) => (
              <CategoryButton
                key={index}
                name={item.name}
                onPress={() => {
                  getUserByCategory(item.categoryId);
                }}
              />
            ))}
          </ScrollView>
        </View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 40 }}
          refreshing={refreshing}
          onRefresh={() => {
            getCategory();
            getUser();
          }}
          data={props.listPro}
          keyExtractor={(item) => item.userId.toString()}
          renderItem={({ item, index }) => (
            <UserCard
              headerTitle={item.name}
              image={item.url}
              thumbnail={item.thumbnail}
              onPress={() => handlerItem(item)}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    marginVertical: 10,
  },
  container: {
    backgroundColor: "#D3D3D3",
    // backgroundColor: "#d38062",
  },
});

const mapStateToProps = (state) => ({
  listCat: state.pro.listCat,
  listPro: state.pro.listPro,
});

const mapDispatchToProps = {
  detailProAction,
  listCategoryAction,
  listProAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
