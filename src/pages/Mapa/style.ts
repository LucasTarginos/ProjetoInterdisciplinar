import { StyleSheet, Platform } from "react-native";

export const style = StyleSheet.create({
  selectedCategory: {
    backgroundColor: '#EC9200',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? 50 : 0,
    backgroundColor: "#205387",
  },
  map: {
    flex: 1,
   
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#fff",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
  },
  categoryConteiner: {
    padding: 10,
  },
  categoryItem: {
    height: 110,
    backgroundColor: "#FF9E00",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    textAlign: "center",
    color: "#6c6c80",
    fontSize: 12,
  },
});
